import { useState } from "react";
import type { Project } from "../types";
import { statusLabel } from "../data/projects";
import { asset } from "../utils/assets";
import { Icon } from "./Icon";
import { Modal } from "./Modal";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: Props) {
  return (
    <Modal open={!!project} onClose={onClose} label={project?.title ?? "Proyecto"} className="modal--project">
      {project && <Content key={project.id} project={project} onClose={onClose} />}
    </Modal>
  );
}

function Content({ project, onClose }: { project: Project; onClose: () => void }) {
  const images = [project.coverImage, ...project.gallery];
  const [current, setCurrent] = useState(0);

  return (
    <div className="modal__inner">
      <button className="modal__close" onClick={onClose} aria-label="Cerrar">
        <Icon name="close" />
      </button>
      <img className="modal__main-img" src={asset(images[current])} alt={`${project.title}, imagen ${current + 1}`} />
      {images.length > 1 && (
        <ul className="thumbs">
          {images.map((src, i) => (
            <li key={src}>
              <button
                onClick={() => setCurrent(i)}
                aria-label={`Ver imagen ${i + 1}`}
                aria-current={i === current}
              >
                <img src={asset(src)} alt="" loading="lazy" />
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="modal__text">
        <div className="project__top">
          <h3>{project.title}</h3>
          <span className={`badge badge--${project.status}`}>{statusLabel[project.status]}</span>
        </div>
        <p>{project.longDescription}</p>
        {project.features.length > 0 && (
          <>
            <h4>Funcionalidades principales</h4>
            <ul className="list">
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </>
        )}
        <h4>Tecnologías</h4>
        <ul className="chips">
          {project.technologies.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="project__actions">
          {project.demoUrl && (
            <a className="btn btn--primary" href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <Icon name="external" /> Ver demostración
            </a>
          )}
          {project.githubUrl && (
            <a className="btn btn--ghost" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Icon name="github" /> Ver código
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
