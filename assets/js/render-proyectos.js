export function renderProyectos(proyectos, containerId = "projectsContainer") {
  const container = document.getElementById(containerId);
  if (!container) return;

  proyectos.forEach(proyecto => {
    const card = document.createElement("div");
    card.classList.add("card_project");
    card.setAttribute("data-tags", proyecto.tags.join(","));

    card.innerHTML = `
      <div class="project_wrap">
        <img src="${proyecto.imagen}" alt="${proyecto.titulo}">
        <div class="info">
          <h4>${proyecto.titulo}</h4>
          <p>${proyecto.descripcion}</p>
          <div class="links_project">
            <a href="${proyecto.github}" aria-label="Ver código en GitHub"><i class="bi bi-github"></i></a>
            <a href="${proyecto.demo}" aria-label="Ver proyecto"><i class="bi bi-eye"></i></a>
          </div>
        </div>
      </div>
    `;

    if (proyecto.destacado) {
      card.classList.add("featured");
    }

    container.appendChild(card);
  });
}