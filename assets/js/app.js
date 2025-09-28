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

const togglebtn = document.getElementById('filter-toggle');
const panel = document.getElementById('filter-panel');
const filterButtons = document.querySelectorAll('.btn-filter');
const icon = document.getElementById('filter-icon');

togglebtn.addEventListener('click', () => {

  const expanded = togglebtn.getAttribute('aria-expanded') === 'true';
  togglebtn.setAttribute('aria-expanded', !expanded);
  panel.hidden = expanded;
  panel.classList.toggle('active');

    // Cambiar el ícono
  if (expanded) {
    icon.classList.remove('bi-x-circle');
    icon.classList.add('bi-filter-circle');
  } else {
    icon.classList.remove('bi-filter-circle');
    icon.classList.add('bi-x-circle');
  }



});

//cierra el panel si se hace clci fuera
document.addEventListener('click',  (e) => {
  const isClickInside = togglebtn.contains(e.target) || panel.contains(e.target);

  if(!isClickInside && !panel.hidden){
    togglebtn.setAttribute('aria-expanded', false);
    panel.hidden = true;
    panel.classList.remove('active');
  }
});

// Cerrar si se hace scroll
window.addEventListener('scroll', () => {
  if (!panel.hidden) {
    togglebtn.setAttribute('aria-expanded', false);
    panel.hidden = true;
    panel.classList.remove('active');
  }
});

// Cerrar al hacer clic en un botón del panel
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    togglebtn.setAttribute('aria-expanded', false);
    panel.hidden = true;
    panel.classList.remove('active');
  });
});





