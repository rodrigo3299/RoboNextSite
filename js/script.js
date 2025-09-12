
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80; 
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


const navLinksCollapse = document.querySelectorAll(".navbar-collapse .nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navLinksCollapse.forEach(link => {
  link.addEventListener("click", () => {
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: true });
    bsCollapse.hide();
  });
});


const form = document.querySelector("#comunicacao form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  
  form.reset();


  const confirmMsg = document.createElement("div");
  confirmMsg.className = "alert alert-success mt-3";
  confirmMsg.textContent = "Mensagem enviada com sucesso!";

  
  form.appendChild(confirmMsg);

  
  setTimeout(() => {
    confirmMsg.remove();
  }, 3000);
});

document.addEventListener("DOMContentLoaded", () => {
  const ctx1 = document.getElementById('clientesChart');
  if (ctx1) {
    new Chart(ctx1, {
      type: 'line',
      data: {
        labels: ['2025', '2026', '2027', '2028', '2029'],
        datasets: [{
          label: 'Clientes (estimado)',
          data: [50, 100, 200, 500, 1000],
          borderColor: 'blue',
          borderWidth: 2,
          fill: false
        }]
      },
      options: { responsive: true }
    });
  }

  
  const ctx2 = document.getElementById('investimentoChart');
  if (ctx2) {
    new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['Rodada A', 'Rodada B', 'Rodada C'],
        datasets: [{
          label: 'Investimento (em R$ mil)',
          data: [5, 10, 15],
          backgroundColor: ['#007bff', '#28a745', '#ffc107']
        }]
      },
      options: { responsive: true }
    });
  }
});
