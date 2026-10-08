"use client";
import { useEffect, useRef, useState } from 'react';
import useMotion from './use-motion';

export default function AnimatedNumber({ value, pad = 2 }) {
  const motion = useMotion();
  const element = useRef(null);
  const [displayed, setDisplayed] = useState(value);
  useEffect(() => {
    if (!motion) return;
    let frame = 0;
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      observer.disconnect();
      let start;
      const tick = time => {
        start ??= time;
        const progress = Math.min(1, (time - start) / 1000);
        setDisplayed(Math.round(value * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: .5 });
    observer.observe(element.current);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [motion, value]);
  return <strong ref={element}><span className="sr-only">{value}</span><span aria-hidden="true">{String(motion ? displayed : value).padStart(pad, '0')}</span></strong>;
}
