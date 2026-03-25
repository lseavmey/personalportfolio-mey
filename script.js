// 🌙 light Mode Toggle
document.addEventListener("DOMContentLoaded", () => {

  const lightBtn = document.getElementById('lightModeToggle');

  if (lightBtn) {
    lightBtn.addEventListener('click', () => {
      document.body.classList.toggle('light');
    });
  }

});

// ✨ Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


// 👀 Fade-in Animation on Scroll
const elements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

elements.forEach(el => observer.observe(el));

