const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { test } = require('node:test');
const React = require('react');
const { act } = React;
const { renderToString } = require('react-dom/server');
const { JSDOM } = require('jsdom');
const swc = require('next/dist/build/swc');
const projectRoot = path.resolve(__dirname, '..');

// Compile the actual client components with Next's existing compiler.
const originalJs = require.extensions['.js'];
function compile(module, filename) {
  if (!filename.startsWith(path.join(projectRoot, 'app') + path.sep) && !filename.startsWith(path.join(projectRoot, 'utils') + path.sep)) return originalJs(module, filename);
  const source = fs.readFileSync(filename, 'utf8').replace(/(['"])@\//g, '$1' + projectRoot.replaceAll('\\', '/') + '/');
  const result = swc.transformSync(source, {
    filename, jsc: { parser: { syntax: 'ecmascript', jsx: true }, transform: { react: { runtime: 'automatic' } }, target: 'es2020' }, module: { type: 'commonjs' },
  });
  module._compile(result.code, filename);
}

test('portfolio hydration, extension diagnosis, filters, and motion preferences', async () => {
  await swc.loadBindings();
  require.extensions['.js'] = compile;
  require.extensions['.jsx'] = compile;
  const PageMotion = require('../app/components/helper/page-motion.jsx').default;
  const TypedFocus = require('../app/components/helper/typed-focus.jsx').default;
  const AnimatedNumber = require('../app/components/helper/animated-number.jsx').default;
  const MagneticLink = require('../app/components/helper/magnetic-link.jsx').default;
  const Projects = require('../app/components/homepage/projects/index.jsx').default;
  const tree = React.createElement(PageMotion, null,
    React.createElement(TypedFocus), React.createElement(AnimatedNumber, { value: 6 }),
    React.createElement(MagneticLink, { href: '#projects', className: 'primary-action' }, 'Explore'),
    React.createElement(Projects));
  const serverHtml = renderToString(tree);
  assert.match(serverHtml, /06/);
  assert.equal((serverHtml.match(/class="project-tile"/g) || []).length, 6);
  assert.equal(serverHtml.includes('bis_skin_checked'), false);
  const dom = new JSDOM('<!doctype html><html><body><div id="root">' + serverHtml + '</div></body></html>', { url: 'http://localhost', pretendToBeVisual: true });
  const listeners = new Set();
  let reduced = false;
  dom.window.matchMedia = () => ({ get matches() { return reduced; }, addEventListener: (_, fn) => listeners.add(fn), removeEventListener: (_, fn) => listeners.delete(fn) });
  class Observer { observe() {} unobserve() {} disconnect() {} }
  Object.assign(global, { window: dom.window, document: dom.window.document, HTMLElement: dom.window.HTMLElement,
    MutationObserver: dom.window.MutationObserver, IntersectionObserver: Observer, ResizeObserver: Observer,
    requestAnimationFrame: dom.window.requestAnimationFrame.bind(dom.window), cancelAnimationFrame: dom.window.cancelAnimationFrame.bind(dom.window),
    Event: dom.window.Event, IS_REACT_ACT_ENVIRONMENT: true });
  const { hydrateRoot } = require('react-dom/client');
  const warnings = [], recoverable = [];
  const originalError = console.error;
  console.error = (...args) => warnings.push(args.map(String).join(' '));
  let client, injected;
  try {
    await act(async () => { client = hydrateRoot(document.getElementById('root'), tree, { onRecoverableError: error => recoverable.push(error) }); });
    assert.deepEqual(recoverable, []);
    assert.deepEqual(warnings, [], 'Clean server/client markup must hydrate without warnings');
    const button = document.querySelector('.motion-toggle');
    assert.equal(button.getAttribute('aria-pressed'), 'true');
    await act(async () => button.click());
    assert.equal(document.documentElement.dataset.motion, 'off');
    assert.equal(button.getAttribute('aria-pressed'), 'false');
    await act(async () => button.click());
    assert.equal(button.getAttribute('aria-pressed'), 'true');
    await act(async () => { reduced = true; listeners.forEach(fn => fn()); });
    assert.equal(button.getAttribute('aria-pressed'), 'false', 'Reduced-motion preference overrides the toggle');
    assert.equal(document.querySelector('.typed-focus [aria-hidden]').textContent.includes('Backend systems.'), true);
    const filters = [...document.querySelectorAll('.project-filters button')];
    for (const [label, count] of [['AI & Agents', 3], ['Backend Systems', 1], ['Full Stack', 2], ['All', 6]]) {
      await act(async () => filters.find(el => el.textContent === label).click());
      assert.equal(document.querySelectorAll('.project-tile').length, count);
    }
    const details = document.querySelector('.project-details');
    details.open = true;
    assert.ok(details.textContent.includes('Created a hybrid RAG system'));
    assert.deepEqual(warnings, []);
    await act(async () => client.unmount());
    client = null;
    // Reproduce the screenshot's exact extra attribute independently of animation code.
    const host = document.createElement('div');
    document.body.appendChild(host);
    const simple = React.createElement('div', { hidden: true }, 'metadata');
    host.innerHTML = renderToString(simple);
    host.firstElementChild.setAttribute('bis_skin_checked', '1');
    await act(async () => { injected = hydrateRoot(host, simple); });
    assert.ok(warnings.some(warning => warning.includes('bis_skin_checked')), 'Browser-injected attribute reproduces the reported warning');
  } finally {
    if (client) await act(async () => client.unmount());
    if (injected) await act(async () => injected.unmount());
    console.error = originalError;
    dom.window.close();
    require.extensions['.js'] = originalJs;
    delete require.extensions['.jsx'];
  }
});
