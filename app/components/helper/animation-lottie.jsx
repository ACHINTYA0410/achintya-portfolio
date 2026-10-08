"use client";
import dynamic from 'next/dynamic';
import useMotion from './use-motion';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
export default function AnimationLottie({ animationPath }) {
  const motion = useMotion();
  return <Lottie key={motion ? 'play' : 'still'} loop={motion} autoplay={motion} animationData={animationPath} style={{ width: '95%' }} />;
}
