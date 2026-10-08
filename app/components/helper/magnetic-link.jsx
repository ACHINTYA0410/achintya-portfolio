"use client";
import { useEffect, useRef } from 'react';
import useMotion from './use-motion';

export default function MagneticLink({ children, className, href, target }) {
  const motion = useMotion();
  const element = useRef(null);
  const frame = useRef(0);
  const reset = () => {
    cancelAnimationFrame(frame.current);
    element.current?.style.removeProperty('--magnet-x');
    element.current?.style.removeProperty('--magnet-y');
  };
  useEffect(() => {
    const link = element.current;
    if (!motion) { link.style.removeProperty('--magnet-x'); link.style.removeProperty('--magnet-y'); }
    return () => cancelAnimationFrame(frame.current);
  }, [motion]);
  const move = event => {
    if (!motion || event.pointerType !== 'mouse') return;
    const { clientX, clientY } = event;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const rect = element.current.getBoundingClientRect();
      element.current.style.setProperty('--magnet-x', Math.max(-7, Math.min(7, (clientX - rect.left - rect.width / 2) * .1)) + 'px');
      element.current.style.setProperty('--magnet-y', Math.max(-5, Math.min(5, (clientY - rect.top - rect.height / 2) * .15)) + 'px');
    });
  };
  return <a ref={element} href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className={className + ' magnetic-link'} onPointerMove={move} onPointerLeave={reset} onBlur={reset}>{children}</a>;
}
