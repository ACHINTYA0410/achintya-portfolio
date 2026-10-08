"use client";
import { useEffect, useState } from 'react';
import useMotion from './use-motion';
const phrases = ['Backend systems.', 'Agentic AI.', 'Full-stack products.'];
export default function TypedFocus() {
  const motion = useMotion();
  const [text, setText] = useState(phrases[0]);
  useEffect(() => {
    if (!motion) return;
    let phrase = 0, length = phrases[0].length, deleting = true, timer;
    const tick = () => {
      const current = phrases[phrase];
      length += deleting ? -1 : 1;
      setText(current.slice(0, length));
      let delay = deleting ? 38 : 75;
      if (!deleting && length === current.length) { deleting = true; delay = 2000; }
      if (deleting && length === 0) { deleting = false; phrase = (phrase + 1) % phrases.length; delay = 250; }
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, 2200);
    return () => clearTimeout(timer);
  }, [motion]);
  return <div className="typed-focus"><span className="sr-only">Backend systems, agentic AI, and full-stack products.</span><span aria-hidden="true"><span className="typed-prompt">&gt; </span>{motion ? text : phrases[0]}<span className="typed-caret">_</span></span></div>;
}
