import { projects, type Project } from "./data/projects.js";

const projectsContainer = document.querySelector("#projects-list");

if (!projectsContainer) {
    throw new Error("No se encontró el contenedor de proyectos en el HTML");
}

function createProjectElement(project: Project): HTMLLIElement {
    const listItem = document.createElement("li");

    // Construimos el HTML interno del elemento de la lista
    listItem.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.category} - ${project.year}</p>
        <p>${project.description}</p>
    `;

    // Solo si existe una URL, añadimos dinámicamente el enlace "Ver proyecto"
    if (project.url) {
        const link = document.createElement("a");
        link.href = project.url;
        link.textContent = "Ver proyecto";
        link.target = "_blank"; // Opcional: para que abra en otra pestaña
        listItem.appendChild(link);
    }

    return listItem;
}

projects.forEach(project => {
    const projectElement = createProjectElement(project);
    projectsContainer.appendChild(projectElement);
});