const hamburger = document.querySelector('#hamburger');
const body = document.querySelector('body');
const navMenu = document.querySelector('#nav-menu ul');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  body.classList.toggle('active');
  navMenu.classList.toggle('active');
});
