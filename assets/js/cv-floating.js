export function controlarBotonCV() {
  const cvFloating = document.querySelector('.btn-cv-floating');
  const cvInside = document.querySelector('.btn-cv-floating-inside');
  const aboutSection = document.querySelector('#about');
  const contactSection = document.querySelector('.contact');

  window.addEventListener('scroll', () => {
    const aboutTop = aboutSection.getBoundingClientRect().top;
    const contactTop = contactSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (aboutTop <= windowHeight * 0.8) {
      cvFloating.classList.add('visible');
    } else {
      cvFloating.classList.remove('visible');
    }

    if (contactTop < windowHeight - 100) {
      cvFloating.style.display = 'none';
      cvInside.classList.add('visible');
    } else {
      cvFloating.style.display = 'block';
      cvInside.classList.remove('visible');
    }
  });
}