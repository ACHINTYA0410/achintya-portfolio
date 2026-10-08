import AnimatedNumber from '../../helper/animated-number';
import MagneticLink from '../../helper/magnetic-link';
import TypedFocus from '../../helper/typed-focus';
import { personalData } from '@/utils/data/personal-data';
import { projectsData } from '@/utils/data/projects-data';
import { experiences } from '@/utils/data/experience';

export default function HeroSection() {
  return <section className="portfolio-hero" aria-labelledby="hero-heading">
    <div className="hero-copy"><p className="eyebrow"><span className="status-dot" />Computer Science · VIT Vellore</p><h1 id="hero-heading">Achintya<br /><span>Mendiratta.</span></h1><TypedFocus /><p className="hero-statement">Building backend systems.<br />Exploring what AI can do.</p><p className="hero-description">{personalData.designation}. From document intelligence and agentic tutors to secure payment systems.</p><div className="hero-actions"><MagneticLink href="#projects" className="primary-action">Explore my work <span aria-hidden="true">↘</span></MagneticLink><MagneticLink href={personalData.resume} target="_blank" className="secondary-action">View resume <span aria-hidden="true">↗</span></MagneticLink></div><div className="hero-socials"><a href={personalData.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={personalData.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href={'mailto:' + personalData.email}>Email ↗</a></div></div>
    <div className="hero-system"><div className="system-header"><span className="status-dot" /><span>ENGINEERING / EXPLORATIONS</span><span aria-hidden="true">↗</span></div><div className="system-orbit" aria-hidden="true"><svg className="signal-paths" viewBox="0 0 420 340" preserveAspectRatio="none"><path d="M0 85 H85 L150 150 H210 M420 255 H330 L270 190 H210 M85 340 V270 L190 165" /><path className="signal-trace" d="M0 85 H85 L150 150 H210 M420 255 H330 L270 190 H210 M85 340 V270 L190 165" /></svg><div className="orbit-ring orbit-one" /><div className="orbit-ring orbit-two" /><div className="orbit-core">AM<span>BUILD · LEARN · ITERATE</span></div><span className="orbit-label label-ai">AI + AGENTS</span><span className="orbit-label label-api">BACKEND + APIs</span><span className="orbit-label label-web">FULL STACK</span></div><div className="hero-stats"><a href="#projects"><AnimatedNumber value={projectsData.length} /><span>Projects ↗</span></a><a href="#experience"><AnimatedNumber value={experiences.length} /><span>Internships ↗</span></a><a href="#education"><strong>2027</strong><span>VIT batch ↗</span></a></div></div>
    <a className="scroll-cue" href="#about">A little about me <span aria-hidden="true">↓</span></a>
  </section>;
}
