export interface Project {
    title: string;
    year: number;
    category: string;
    description: string;
    url?: string;
    image?: string;
}

export const projects: Project[] = [
    {
        title: "Mi Portafolio Personal",
        year: 2026,
        category: "Desarrollo Web",
        description: "Sitio web de presentación profesional construido con TypeScript, HTML y Git.",
        url: "https://github.com/KdooQ/Portfolio"
    },
    {
        title: "Churn Prediction Pipeline",
        year: 2026,
        category: "Machine Learning / Data Science",
        description: "Pipeline analítico de predicción de abandono de clientes (churn) implementado con Python.",
        url: "https://github.com/KdooQ/Churn-prediction-pipeline"
    }
];