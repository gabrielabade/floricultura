// Seleciona os elementos
const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

// Alterna o menu e o ícone ao clicar no menu-btn
menuBtn.addEventListener('click', () => {
  const isActive = navbar.classList.toggle('active');
  menuBtn.textContent = isActive ? '✖' : '☰'; // Alterna entre "X" e "☰"
  menuBtn.setAttribute('aria-expanded', isActive); // Acessibilidade
});

// Fecha o menu ao clicar em um link de navegação e redefine o ícone
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuBtn.textContent = '☰'; // Volta para o ícone de menu
    menuBtn.setAttribute('aria-expanded', 'false'); // Acessibilidade
  });
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', (event) => {
  if (!navbar.contains(event.target) && !menuBtn.contains(event.target)) {
    navbar.classList.remove('active');
    menuBtn.textContent = '☰'; // Volta para o ícone de menu
    menuBtn.setAttribute('aria-expanded', 'false'); // Acessibilidade
  }
});

// Fecha o menu ao pressionar a tecla "Esc" 
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navbar.classList.contains('active')) {
    navbar.classList.remove('active');
    menuBtn.textContent = '☰'; // Volta para o ícone de menu
    menuBtn.setAttribute('aria-expanded', 'false'); // Acessibilidade
  }
});
