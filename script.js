// Existing menu functionality
const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

// Alterna o menu e o ícone ao clicar no menu-btn
menuBtn.addEventListener('click', () => {
  const isActive = navbar.classList.toggle('active');
  menuBtn.textContent = isActive ? 'x' : '☰'; // Alterna entre "X" e "☰"
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

// Add Back-to-Top functionality
document.addEventListener('DOMContentLoaded', function () {
  // Create the back-to-top button element
  const backToTopButton = document.createElement('a');
  backToTopButton.href = '#';
  backToTopButton.className = 'back-to-top';
  backToTopButton.innerHTML = '↑';
  backToTopButton.setAttribute('aria-label', 'Voltar ao topo');
  document.body.appendChild(backToTopButton);

  // Show or hide the button based on scroll position
  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });

  // Smooth scroll to top when clicked
  backToTopButton.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Add lazy loading to images for better performance
  document.querySelectorAll('img').forEach(img => {
    if (!img.classList.contains('quote')) {
      img.loading = 'lazy';
    }
  });

  // Add animations on scroll
  const animateOnScrollElements = document.querySelectorAll('.box, .content, .container-image');

  const checkIfInView = () => {
    animateOnScrollElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight - 100) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  // Set initial styles for animation
  animateOnScrollElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  // Check on load and scroll
  window.addEventListener('load', checkIfInView);
  window.addEventListener('scroll', checkIfInView);
});