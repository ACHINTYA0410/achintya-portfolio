import { skillsData } from '@/utils/data/skills';
import SkillIcon from './skill-icon';
const groups = [
  { name: 'Languages', end: 4, accent: '#f4bf69' },
  { name: 'Backend & APIs', end: 8, accent: '#78beff' },
  { name: 'Databases', end: 13, accent: '#6ee7b7' },
  { name: 'AI & Agents', end: 19, accent: '#c4b5fd' },
  { name: 'Tools & Testing', end: 23, accent: '#f9a8b7' },
  { name: 'Core Computer Science', end: 28, accent: '#a5b4fc' },
];
export default function Skills() {
  return <section id="skills" className="skills-section" aria-labelledby="skills-heading">
    <div className="section-intro"><div><p className="eyebrow">The toolkit</p><h2 id="skills-heading">Built with curiosity.</h2></div><p>Languages, systems, and tools<br />behind the work.</p></div>
    <div className="skill-groups">{groups.map((group, index) => <div className="skill-group" key={group.name} style={{ '--skill-accent': group.accent }}><h3><span>{String(index + 1).padStart(2, '0')}</span>{group.name}</h3><ul className="skill-grid">{skillsData.slice(index === 0 ? 0 : groups[index - 1].end, group.end).map(skill => <li className="skill-tile" key={skill}><SkillIcon skill={skill} /><span>{skill}</span></li>)}</ul></div>)}</div>
  </section>;
}
