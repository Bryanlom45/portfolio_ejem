
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


document.addEventListener('DOMContentLoaded', () => {
  const panel = document.getElementById('panel-filter');
  const filterIcon = document.getElementById('filter-icon');
  const closeIcon = document.getElementById('close-icon');
  const filterButtons = document.querySelectorAll('.btn-filter');

  // 👉 Abrir panel al hacer clic en el ícono de filtro
  filterIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    panel.classList.add('active');
    filterIcon.style.display = 'none';
  });

  // 👉 Cerrar panel al hacer clic en el ícono de cierre (bi-x-circle)
  closeIcon.addEventListener('click', () => {
    panel.classList.remove('active');
    filterIcon.style.display = 'inline-block';
  });

  // 👉 Cerrar panel al seleccionar un filtro
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      panel.classList.remove('active');
      filterIcon.style.display = 'inline-block';
    });
  });

  // 👉 Cerrar panel al hacer scroll
  window.addEventListener('scroll', () => {
    if (panel.classList.contains('active')) {
      panel.classList.remove('active');
      filterIcon.style.display = 'inline-block';
    }
  });

  // 👉 Cerrar panel al hacer clic fuera de él
  document.addEventListener('click', (e) => {
    if (!panel.contains(e.target) && !filterIcon.contains(e.target)) {
      panel.classList.remove('active');
      filterIcon.style.display = 'inline-block';
    }
  });
});





