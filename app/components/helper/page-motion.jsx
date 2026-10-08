"use client";
import { useEffect, useRef } from 'react';
import useMotion from './use-motion';

export default function PageMotion({ children }) {
  const root = useRef(null);
  const progress = useRef(null);
  const motion = useMotion();
  useEffect(() => {
    let frame = 0;
    const paint = () => {
      frame = 0;
      const range = document.documentElement.scrollHeight - window.innerHeight;
      if (progress.current) progress.current.style.transform = 'scaleX(' + (range > 0 ? Math.min(1, Math.max(0, window.scrollY / range)) : 0) + ')';
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(paint); };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    const resize = new ResizeObserver(schedule);
    resize.observe(document.body);
    paint();
    return () => { cancelAnimationFrame(frame); resize.disconnect(); window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); };
  }, []);
  useEffect(() => {
    if (!motion || !root.current) return;
    const container = root.current;
    const seen = new WeakSet();
    const animations = new Set();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        const siblings = [...entry.target.parentElement.children];
        const delay = entry.target.matches('.skill-tile, .project-tile') ? (siblings.indexOf(entry.target) % 4) * 65 : 0;
        const animation = entry.target.animate([
          { opacity: 0.15, transform: 'translateY(24px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ], { duration: 650, delay, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'backwards' });
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      });
    }, { threshold: 0.08 });
    const observe = () => container.querySelectorAll('#about, #experience, #education, .section-intro, .skill-tile, .project-tile').forEach(el => {
      if (!seen.has(el)) { seen.add(el); observer.observe(el); }
    });
    observe();
    const mutation = new MutationObserver(observe);
    mutation.observe(container, { childList: true, subtree: true });
    let frame = 0, active = null;
    const reset = () => {
      cancelAnimationFrame(frame); frame = 0;
      if (active) { active.style.removeProperty('--tilt-x'); active.style.removeProperty('--tilt-y'); active.style.removeProperty('--spot-opacity'); }
      active = null;
    };
    const move = event => {
      if (event.pointerType !== 'mouse') return;
      const card = event.target.closest('.project-tile, .hero-system');
      if (!card || !container.contains(card)) { reset(); return; }
      if (active !== card) { reset(); active = card; }
      cancelAnimationFrame(frame);
      const { clientX, clientY } = event;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rect = card.getBoundingClientRect();
        const x = (clientX - rect.left) / rect.width;
        const y = (clientY - rect.top) / rect.height;
        card.style.setProperty('--tilt-x', ((.5 - y) * 5) + 'deg');
        card.style.setProperty('--tilt-y', ((x - .5) * 5) + 'deg');
        card.style.setProperty('--spot-x', x * 100 + '%');
        card.style.setProperty('--spot-y', y * 100 + '%');
        card.style.setProperty('--spot-opacity', '1');
      });
    };
    container.addEventListener('pointermove', move, { passive: true });
    container.addEventListener('pointerleave', reset);
    return () => { observer.disconnect(); mutation.disconnect(); animations.forEach(a => a.cancel()); reset(); container.removeEventListener('pointermove', move); container.removeEventListener('pointerleave', reset); };
  }, [motion]);
  const toggle = () => {
    document.documentElement.dataset.motion = motion ? 'off' : 'on';
    window.dispatchEvent(new Event('portfolio-motion'));
  };
  return <div ref={root}><div className="reading-progress" aria-hidden="true" ref={progress} /><button type="button" className="motion-toggle" onClick={toggle} aria-pressed={motion} title="System reduced-motion preferences are always respected">{motion ? 'Ⅱ Pause motion' : '▷ Motion off'}</button>{children}</div>;
}
