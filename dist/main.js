import { projects } from "./data/projects.js";
const projectsContainer = document.querySelector("#projects-list");
if (!projectsContainer) {
    throw new Error("No se encontró el contenedor de proyectos en el HTML");
}
function createProjectElement(project) {
    const listItem = document.createElement("li");
    const titleElement = document.createElement("h3");
    titleElement.textContent = project.title;
    const infoElement = document.createElement("p");
    infoElement.className = "project-meta";
    infoElement.textContent = `${project.category} - ${project.year}`;
    const descElement = document.createElement("p");
    descElement.textContent = project.description;
    listItem.append(titleElement, infoElement, descElement);
    if (project.url) {
        const link = document.createElement("a");
        link.className = "project-link";
        link.href = project.url;
        link.textContent = "Ver proyecto";
        // Añadimos el icono accesible de la flecha
        const arrowSpan = document.createElement("span");
        arrowSpan.setAttribute("aria-hidden", "true");
        arrowSpan.textContent = " ↗";
        link.appendChild(arrowSpan);
        if (project.url.startsWith("http")) {
            link.target = "_blank";
            link.rel = "noopener noreferrer";
        }
        listItem.appendChild(link);
    }
    return listItem;
}
projects.forEach(project => {
    const projectElement = createProjectElement(project);
    projectsContainer.appendChild(projectElement);
});
//# sourceMappingURL=main.js.map