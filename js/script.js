// Destacar link ativo no menu ao rolar a página
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80; // Ajuste para navbar
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Fechar menu colapsável ao clicar em link (mobile)
const navLinksCollapse = document.querySelectorAll(".navbar-collapse .nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navLinksCollapse.forEach(link => {
  link.addEventListener("click", () => {
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: true });
    bsCollapse.hide();
  });
});

// Mensagem de confirmação no Fale Conosco
const form = document.querySelector("#comunicacao form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // evita que a página recarregue

  // Limpa o formulário
  form.reset();

  // Cria a mensagem de confirmação
  const confirmMsg = document.createElement("div");
  confirmMsg.className = "alert alert-success mt-3";
  confirmMsg.textContent = "Mensagem enviada com sucesso!";

  // Adiciona a mensagem abaixo do formulário
  form.appendChild(confirmMsg);

  // Remove a mensagem depois de 3 segundos
  setTimeout(() => {
    confirmMsg.remove();
  }, 3000);
});
