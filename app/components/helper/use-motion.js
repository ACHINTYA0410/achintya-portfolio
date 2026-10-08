"use client";
import { useSyncExternalStore } from 'react';
const query = '(prefers-reduced-motion: reduce)';
function subscribe(callback) {
  const media = window.matchMedia(query);
  media.addEventListener('change', callback);
  window.addEventListener('portfolio-motion', callback);
  return () => { media.removeEventListener('change', callback); window.removeEventListener('portfolio-motion', callback); };
}
function getSnapshot() { return !window.matchMedia(query).matches && document.documentElement.dataset.motion !== 'off'; }
export default function useMotion() { return useSyncExternalStore(subscribe, getSnapshot, () => false); }
