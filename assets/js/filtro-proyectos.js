export function activarFiltros() {
  const botonesFiltro = document.querySelectorAll(".btn-filter");

  botonesFiltro.forEach(boton => {
    boton.addEventListener("click", () => {
      const filtro = boton.dataset.filter;
      const tarjetas = document.querySelectorAll(".card_project");

      botonesFiltro.forEach(b => b.classList.remove("active"));
      boton.classList.add("active");

      tarjetas.forEach(card => {
        const tags = card.dataset.tags.split(",");
        const mostrar = filtro === "all" || tags.includes(filtro);

        if (mostrar) {
          card.classList.remove("oculta");
          card.style.display = "block";
        } else {
          card.classList.add("oculta");
          setTimeout(() => {
            card.style.display = "none";
          }, 400);
        }
      });
    });
  });
}