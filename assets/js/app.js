
  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".mobile-nav-toggle");
    const header = document.querySelector(".header");

    toggle.addEventListener("click", function () {
      document.body.classList.toggle("mobile-nav-active");
      document.classList.toggle("bi-x");
    });
  });


    const cvButton = document.querySelector('.btn-cv-floating');
  const aboutSection = document.querySelector('#about');

  window.addEventListener('scroll', () => {
    const aboutTop = aboutSection.getBoundingClientRect().top;

    if (aboutTop <= window.innerHeight * 0.8) {
      cvButton.classList.add('visible');
    } else {
      cvButton.classList.remove('visible');
    }
  });

const proyectos = [
  {
    titulo: "Slide Core",
    descripcion: "(PWA) con Angular, Nest.js",
    imagen: "assets/img/projects/slidecore.jpeg",
    github: "#",
    demo: "#"
  },
  {
    titulo: "Portafolio Creativo",
    descripcion: "HTML, CSS, animaciones personalizadas",
    imagen: "assets/img/projects/ctg.jpeg",
    github: "#",
    demo: "#"
  },

    {
    titulo: "Portafolio Creativo",
    descripcion: "HTML, CSS, animaciones personalizadas",
    imagen: "assets/img/projects/spa.jpeg",
    github: "#",
    demo: "#"
  },
  // Agrega más proyectos aquí
];

const container = document.getElementById("projectsContainer");

proyectos.forEach(proyecto => {
  const card = document.createElement("div");
  card.classList.add("card_project");

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
  
  container.appendChild(card);
});

