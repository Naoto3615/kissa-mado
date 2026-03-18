const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
      }
    });
  },
  { threshold: 0.2 },
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const year = document.querySelector('#year');
if (year) {
  year.textContent = String(new Date().getFullYear());
}
