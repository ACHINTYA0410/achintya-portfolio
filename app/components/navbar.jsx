import Link from 'next/link';

const sections = ['About', 'Experience', 'Skills', 'Projects', 'Education'];
export default function Navbar() {
  return <nav className="portfolio-nav" aria-label="Main navigation"><Link className="nav-brand" href="/" aria-label="Achintya home">AM<span>.</span></Link><div className="nav-links">{sections.map(section => <Link key={section} href={'/#' + section.toLowerCase()}>{section}</Link>)}</div><Link href="/resume.pdf" target="_blank" className="nav-resume">Resume <span aria-hidden="true">↗</span></Link></nav>;
}
