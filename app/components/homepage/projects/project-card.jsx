export default function ProjectCard({ project }) {
  const profileLink = project.code && new URL(project.code).pathname.split('/').filter(Boolean).length === 1;
  return (
    <article className="project-tile">
      <div className="project-topline"><span>{project.category}</span><span className="project-number">{String(project.id).padStart(2, '0')}</span></div>
      <h3>{project.name}</h3>
      <p className="project-summary">{project.summary}</p>
      <ul className="tech-tags" aria-label="Technologies">{project.tools.map(tool => <li key={tool}>{tool}</li>)}</ul>
      <details className="project-details"><summary>Inside the build <span aria-hidden="true">+</span></summary><div><p className="project-focus">{project.role}</p><p>{project.description}</p></div></details>
      {project.code && <a className="project-source" href={project.code} target="_blank" rel="noopener noreferrer">{profileLink ? 'GitHub profile' : 'View source'} <span aria-hidden="true">↗</span><span className="sr-only"> for {project.name} (opens in a new tab)</span></a>}
    </article>
  );
}
