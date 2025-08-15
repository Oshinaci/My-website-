// Dark Mode Toggle
const toggle = document.getElementById('darkToggle');
const html = document.documentElement;

toggle.addEventListener('click', () => {
  html.classList.toggle('dark');
  localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
});

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  html.classList.add('dark');
}

// AOS Animation Init
AOS.init({
  duration: 800,
  once: true
});
