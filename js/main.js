const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav-links');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const track = document.getElementById('testimonial-track');
const move = (direction) => {
  const card = track?.querySelector('.testimonial-card');
  if (!track || !card) return;
  track.scrollBy({ left: direction * (card.getBoundingClientRect().width + 22), behavior: 'smooth' });
};
document.querySelector('.carousel-button.prev')?.addEventListener('click', () => move(-1));
document.querySelector('.carousel-button.next')?.addEventListener('click', () => move(1));
