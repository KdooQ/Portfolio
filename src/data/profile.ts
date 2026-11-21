// Información personal y enlaces. Edita aquí; nada más.
export const profile = {
  name: "Tadeo Oquendo",
  initials: "TO",
  location: "Manta, Manabí, Ecuador",
  tagline: "Estudiante de Ingeniería de Software | Desarrollo de Software y Web.",
  intro:
    "Me interesa la tecnología, la programación y la construcción de soluciones digitales. Estudio Ingeniería de Software en la ULEAM y aprendo de forma continua creando proyectos.",
  email: "tadeooquendom@gmail.com",
  whatsappNumber: "593998927534", // formato internacional, sin "+" ni espacios
  whatsappDisplay: "+593 998927534",
  whatsappMessage:
    "Hola Tadeo, he visitado tu portafolio y me gustaría ponerme en contacto contigo.",
  github: "https://github.com/KdooQ", // vacío ("") para ocultarlo
  linkedin: "", // pega aquí tu URL de LinkedIn cuando la tengas
};

export const mailtoUrl = `mailto:${profile.email}`;
export const whatsappUrl = `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(
  profile.whatsappMessage,
)}`;

export const navItems = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "tecnologias", label: "Tecnologías" },
  { id: "proyectos", label: "Proyectos" },
  { id: "galeria", label: "Galería" },
  { id: "formacion", label: "Formación" },
  { id: "contacto", label: "Contacto" },
];

export const highlights = [
  "Desarrollo de software y web",
  "Aprendizaje continuo",
  "Trabajo en equipo",
  "Resolución de problemas",
];

export const timeline = [
  {
    kind: "Formación",
    title: "Ingeniería de Software",
    place: "Universidad Laica Eloy Alfaro de Manabí (ULEAM)",
    period: "En curso",
    text: "Formación universitaria en desarrollo y arquitectura de software, programación y resolución de problemas.",
  },
  {
    kind: "Experiencia",
    title: "Ayudante y Atención al Cliente",
    place: "CELLMAX Mobile",
    period: "Noviembre 2023 – Julio 2024",
    text: "Atención directa a clientes y apoyo en el día a día del negocio. Fortalecí la comunicación asertiva, la responsabilidad, la organización y el trabajo en equipo.",
  },
  {
    kind: "Formación",
    title: "Bachiller en Ciencias",
    place: "Unidad Educativa General Eloy Alfaro",
    period: "Graduado",
    text: "",
  },
];

export const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "Intermedio B2" },
];

export const softSkills = [
  "Responsabilidad",
  "Organización",
  "Aprendizaje rápido",
  "Comunicación asertiva",
  "Trabajo en equipo",
  "Puntualidad",
];
