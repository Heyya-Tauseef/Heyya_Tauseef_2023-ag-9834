const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

btn.addEventListener('click', () => {
  btn.classList.toggle('open');     // toggle cross
  menu.classList.toggle('hidden');  // toggle mobile menu
  menu.classList.toggle('flex');    // show/hide menu for mobile
});

// Reset menu when resizing to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    // Close mobile menu if it was open
    btn.classList.remove('open');   // remove cross
    menu.classList.remove('flex');  // remove mobile flex
    menu.classList.add('hidden');   // hide mobile menu
  }
});

// Optional: also reset on page load if desktop
if (window.innerWidth >= 768) {
  btn.classList.remove('open');
  menu.classList.remove('flex');
  menu.classList.add('hidden');
}
