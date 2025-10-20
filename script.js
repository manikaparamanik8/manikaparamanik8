// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animate Header Text Glow
const header = document.querySelector('header h1');
let glow = true;
setInterval(() => {
  header.style.textShadow = glow ? '0 0 20px #fff' : 'none';
  glow = !glow;
}, 1000);

// Reveal sections on scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.85;
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < trigger) sec.classList.add('visible');
  });
});

