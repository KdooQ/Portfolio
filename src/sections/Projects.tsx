import { useState } from "react";
import { projects } from "../data/projects";
import type { Project } from "../types";
import { Section } from "../components/Section";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectModal } from "../components/ProjectModal";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  // Los destacados primero.
  const sorted = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured));

  return (
    <Section id="proyectos" title="Proyectos" intro="Lo que he construido y lo que estoy construyendo.">
      <div className="grid grid--projects">
        {sorted.map((p) => (
          <ProjectCard key={p.id} project={p} onOpen={setSelected} />
        ))}
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}
