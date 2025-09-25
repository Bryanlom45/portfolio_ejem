// abrir y cerrar mi navegacion

  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".mobile-nav-toggle");
    const header = document.querySelector(".header");
    const navlinks = document.querySelectorAll(".header nav a");

    toggle.addEventListener("click", function () {
      document.body.classList.toggle("mobile-nav-active");
      toggle.classList.toggle("bi-x");
    });

    navlinks.forEach(link=> {
      link.addEventListener("click", function () {
        setTimeout(()=>{
        document.body.classList.remove("mobile-nav-active");
        toggle.classList.remove("bi-x");
        toggle.setAttribute("aria-expanded", "false");
        },400);
      });
    });
    
  });

  // para el boton flotante de mi curriculum

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

// controla el contenido de la seccion de proyectos 

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

const toggleBtn = document.getElementById('filter-toggle');
const panel = document.getElementById('filter-panel');
const closeBtn = document.getElementById('filter-close');
const filterButtons = document.querySelectorAll('.btn-filter');

// Abrir panel
toggleBtn.addEventListener('click', () => {
  const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
  toggleBtn.setAttribute('aria-expanded', !expanded);
  panel.hidden = expanded;
  panel.classList.toggle('active');
});

// Cerrar panel
closeBtn.addEventListener('click', () => {
  toggleBtn.setAttribute('aria-expanded', 'false');
  panel.hidden = true;
  panel.classList.remove('active');
});

// Cerrar al hacer clic fuera
document.addEventListener('click', (e) => {
  if (!panel.contains(e.target) && !toggleBtn.contains(e.target)) {
    toggleBtn.setAttribute('aria-expanded', 'false');
    panel.hidden = true;
    panel.classList.remove('active');
  }
});

// Activar filtro
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    // Aquí puedes filtrar tus tarjetas con JS
  });
});