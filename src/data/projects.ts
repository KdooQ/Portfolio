import type { Project } from "../types";

/**
 * PROYECTOS: para agregar uno, copia un objeto, cambia sus datos y listo.
 * Las imágenes van en public/images/projects/<slug>/ y aquí se escriben
 * SIN "/" inicial, p. ej. "images/projects/mi-app/cover.webp".
 * githubUrl y demoUrl son opcionales: si no existen, el botón no aparece.
 */
export const projects: Project[] = [
  {
    id: "ejemplo",
    slug: "proyecto-de-ejemplo",
    title: "Proyecto de ejemplo",
    description:
      "Tarjeta de demostración de la estructura. Reemplázala por tu proyecto real.",
    longDescription:
      "Esto es una demostración de cómo se ve un proyecto en el portafolio. No es un trabajo real: elimina este objeto y agrega el tuyo en src/data/projects.ts cuando quieras.",
    coverImage: "images/projects/ejemplo/cover.svg",
    gallery: [
      "images/projects/ejemplo/screen-1.svg",
      "images/projects/ejemplo/screen-2.svg",
    ],
    technologies: ["TypeScript", "React"],
    features: ["Funcionalidad de ejemplo 1", "Funcionalidad de ejemplo 2"],
    status: "demo",
    featured: true,
    // githubUrl: "https://github.com/KdooQ/mi-repositorio",
    // demoUrl: "https://kdooq.github.io/mi-demo/",
  },
];

export const statusLabel: Record<Project["status"], string> = {
  demo: "Demostración",
  "en-desarrollo": "En desarrollo",
  terminado: "Terminado",
};
