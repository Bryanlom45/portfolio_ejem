export function controlarNavegacion() {
  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".mobile-nav-toggle");
    const navlinks = document.querySelectorAll(".header nav a");

    toggle.addEventListener("click", function () {
      document.body.classList.toggle("mobile-nav-active");
      toggle.classList.toggle("bi-x");
    });

    navlinks.forEach(link => {
      link.addEventListener("click", function () {
        setTimeout(() => {
          document.body.classList.remove("mobile-nav-active");
          toggle.classList.remove("bi-x");
          toggle.setAttribute("aria-expanded", "false");
        }, 400);
      });
    });
  });
}

export function controlarPanelFiltros() {
  const togglebtn = document.getElementById('filter-toggle');
  const panel = document.getElementById('filter-panel');
  const filterButtons = document.querySelectorAll('.btn-filter');

  togglebtn.addEventListener('click', () => {
    const expanded = togglebtn.getAttribute('aria-expanded') === 'true';
    togglebtn.setAttribute('aria-expanded', !expanded);
    panel.hidden = expanded;
    panel.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    const isClickInside = togglebtn.contains(e.target) || panel.contains(e.target);
    if (!isClickInside && !panel.hidden) {
      togglebtn.setAttribute('aria-expanded', false);
      panel.hidden = true;
      panel.classList.remove('active');
    }
  });

  window.addEventListener('scroll', () => {
    if (!panel.hidden) {
      togglebtn.setAttribute('aria-expanded', false);
      panel.hidden = true;
      panel.classList.remove('active');
    }
  });

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      togglebtn.setAttribute('aria-expanded', false);
      panel.hidden = true;
      panel.classList.remove('active');
    });
  });
}