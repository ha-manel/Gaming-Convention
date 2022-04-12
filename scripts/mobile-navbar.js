const hamburger = document.querySelector('#hamburger');
const body = document.querySelector('body');
const navMenu = document.querySelector('#nav-menu ul');
const navLinks = document.querySelectorAll('#nav-menu ul li');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  body.classList.toggle('active');
  navMenu.classList.toggle('active');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    body.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// fixed navbar
const topHeader = document.querySelector('#top-header');
const nav = document.querySelector('nav');
const topHeaderHeight = topHeader.style.height;
window.onscroll = function fixedNav() {
  if (window.pageYOffset > topHeaderHeight) {
    nav.classList.add('fixed');
  } else {
    nav.classList.remove('fixed');
  }
};