export type ProjectStatus = "demo" | "en-desarrollo" | "terminado";

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  coverImage: string; // ruta dentro de public/, p. ej. "images/projects/mi-app/cover.webp"
  gallery: string[];
  technologies: string[];
  features: string[];
  status: ProjectStatus;
  featured: boolean;
  githubUrl?: string;
  demoUrl?: string;
}

export interface SkillItem {
  name: string;
  icon?: string; // slug de devicon (https://devicon.dev), p. ej. "python"
  invert?: boolean; // true si el logo original es negro (p. ej. GitHub)
  level?: string; // solo se muestra si tú lo escribes
}

export interface SkillCategory {
  title: string;
  items: SkillItem[];
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}
