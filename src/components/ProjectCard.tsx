import type { Project } from "../types";
import { statusLabel } from "../data/projects";
import { asset } from "../utils/assets";
import { Icon } from "./Icon";

interface Props {
  project: Project;
  onOpen: (p: Project) => void;
}

export function ProjectCard({ project, onOpen }: Props) {
  return (
    <article className="card project reveal">
      <img
        className="project__cover"
        src={asset(project.coverImage)}
        alt={`Portada de ${project.title}`}
        loading="lazy"
        width={1280}
        height={720}
      />
      <div className="project__body">
        <div className="project__top">
          <h3>{project.title}</h3>
          <span className={`badge badge--${project.status}`}>{statusLabel[project.status]}</span>
        </div>
        <p>{project.description}</p>
        <ul className="chips" aria-label="Tecnologías">
          {project.technologies.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="project__actions">
          <button className="link-btn" onClick={() => onOpen(project)}>
            <Icon name="external" size={16} /> Ver proyecto
          </button>
          {project.githubUrl && (
            <a className="link-btn" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Icon name="github" size={16} /> Ver código
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
