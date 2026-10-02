
document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu-btn');
  const links = document.querySelector('.nav-links');

  if (menu && links) {
    menu.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
  }

  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === current) a.classList.add('active');
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, {threshold:.12});

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  const booking = document.querySelector('#bookingForm');
  if (booking) {
    booking.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.querySelector('#name').value.trim();
      const service = document.querySelector('#service').value;
      const date = document.querySelector('#date').value;
      const message = document.querySelector('#message').value.trim();

      const text =
        `Hello Sandy B, I would like to book an appointment.%0A%0A` +
        `Name: ${encodeURIComponent(name)}%0A` +
        `Service: ${encodeURIComponent(service)}%0A` +
        `Preferred date: ${encodeURIComponent(date)}%0A` +
        `Message: ${encodeURIComponent(message)}`;

      window.open(`https://wa.me/27760268206?text=${text}`, '_blank');
    });
  }
});
