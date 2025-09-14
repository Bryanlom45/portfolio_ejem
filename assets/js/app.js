
  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".mobile-nav-toggle");
    const header = document.querySelector(".header");

    toggle.addEventListener("click", function () {
      document.body.classList.toggle("mobile-nav-active");
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
