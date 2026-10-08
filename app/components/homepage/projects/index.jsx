"use client";

import { useState } from 'react';
import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const filters = ['All', 'AI & Agents', 'Backend Systems', 'Full Stack'];
export default function Projects() {
  const [filter, setFilter] = useState('All');
  const visible = projectsData.filter(project => filter === 'All' || project.category === filter);
  return (
    <section id="projects" className="project-section" aria-labelledby="projects-heading">
      <div className="section-intro"><div><p className="eyebrow">Explore the work</p><h2 id="projects-heading">Ideas, engineered.</h2></div><p>From agentic AI to backend systems.<br />Explore the details behind each build.</p></div>
      <div className="project-toolbar"><div className="project-filters" role="group" aria-label="Filter projects">{filters.map(item => <button type="button" key={item} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}</div><span className="project-count" role="status">{visible.length} of {projectsData.length} projects</span></div>
      <div className="project-grid">{visible.map(project => <ProjectCard key={project.id} project={project} />)}</div>
    </section>
  );
}
