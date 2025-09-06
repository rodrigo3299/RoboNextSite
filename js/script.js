document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.menu-toggle');
  const nav = document.getElementById('primary-menu');
  const links = document.querySelectorAll('.nav-links a');

  if (btn && nav) {
    // abre/fecha no clique do botão
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      btn.classList.toggle('open');
      nav.classList.toggle('show');
    });

    // fecha ao clicar em qualquer link do menu
    links.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('show');
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
