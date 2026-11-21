import type { SkillCategory } from "../types";

// Para agregar una tecnología: añade un objeto a la categoría que corresponda.
// "icon" es el slug de https://devicon.dev (opcional). "level" es opcional y solo se muestra si lo escribes.
export const featuredTech = [
  { name: "Git", icon: "git" },
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Python", icon: "python" },
  { name: "HTML", icon: "html5" },
  { name: "CSS", icon: "css3" },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Lenguajes de programación",
    items: [
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Python", icon: "python" },
    ],
  },
  {
    title: "Desarrollo web",
    items: [
      { name: "HTML", icon: "html5" },
      { name: "CSS", icon: "css3" },
      { name: "Frontend" },
      { name: "Backend" },
      { name: "Diseño responsive" },
      { name: "Interfaces web" },
    ],
  },
  {
    title: "Control de versiones",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github", invert: true },
      { name: "Gestión de repositorios" },
      { name: "Flujos de trabajo" },
    ],
  },
  {
    title: "Herramientas",
    items: [
      { name: "Microsoft Office", level: "Intermedio" },
      { name: "Microsoft Excel", level: "Avanzado" },
    ],
  },
  {
    title: "Desarrollo de software",
    items: [
      { name: "Lógica de programación" },
      { name: "Programación orientada a objetos" },
      { name: "Estructuración de aplicaciones" },
      { name: "Resolución de problemas" },
      { name: "Arquitectura de software" },
    ],
  },
];
