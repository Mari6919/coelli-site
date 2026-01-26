document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  const links = nav.querySelectorAll('a[href^="#"]');

  if (!toggle || !nav) return;

  const openMenu = () => {
    nav.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Fechar menu");
  };

  const closeMenu = () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu");
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.contains("open");
    isOpen ? closeMenu() : openMenu();
  });

  // Fecha ao clicar fora
  document.addEventListener("click", (e) => {
    if (!nav.classList.contains("open")) return;
    const clickedInside = nav.contains(e.target) || toggle.contains(e.target);
    if (!clickedInside) closeMenu();
  });

  // Fecha com ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // Links: fecha menu e faz scroll suave certo
  links.forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      closeMenu();

      // Atualiza o hash sem saltos bruscos
      history.pushState(null, "", href);

      // Scroll respeitando offsets (scroll-margin-top / scroll-padding-top)
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 10);
    });
  });
});
