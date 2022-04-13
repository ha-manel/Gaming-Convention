// create header
const header = document.querySelector('header');
// create the top part of the header
const topHeader = document.createElement('div');
topHeader.className = 'top-header';
topHeader.innerHTML = '<ul><li> <a class="top-link" href="#"><i class="fa-brands fa-facebook-f"></i></a></li><li><a class="top-link" href="#"><i class="fa-brands fa-twitter"></i></a></li><li><a class="top-link" href="#">English</a></li><li><a class="top-link" href="#">My Page</a></li><li><a class="top-link" href="#">Logout</a></li></ul> ';
header.appendChild(topHeader);

// create the navbar
const navBar = document.createElement('nav');
navBar.innerHTML = '<div class="nav-menu"><div class="hamburger"><span class="bar"></span><span class="bar"></span><span class="bar"></span></div><ul class="nav-links"><li><a href="about.html" class="link">About</a></li><li><a href="index.html#program" class="link">Program</a></li><li><a href="index.html#featured-speakers" class="link">Speakers</a></li><li><a href="#sponsors" class="link">Sponsors</a></li><li><a href="#" class="campaign">GC Campaign</a></li></ul></div><a href="index.html"><img src="./images/gc-logo.png" alt="" class="logo"></a>';
header.appendChild(navBar);

// mobile navbar
const hamburger = document.querySelector('.hamburger');
const body = document.querySelector('body');
const navMenu = document.querySelector('.nav-menu ul');
const navLinks = document.querySelectorAll('.link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  body.classList.toggle('active');
  navMenu.classList.toggle('active');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    link.classList.add('current');
    navLinks.forEach((unvisited) => {
      if (unvisited !== link) {
        unvisited.classList.remove('current');
      }
    });
    hamburger.classList.remove('active');
    body.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// fixed navbar
const topHeaderElement = document.querySelector('.top-header');
const nav = document.querySelector('nav');
const topHeaderHeight = topHeaderElement.style.height;
window.onscroll = function fixedNav() {
  if (window.pageYOffset > topHeaderHeight) {
    nav.classList.add('fixed');
  } else {
    nav.classList.remove('fixed');
  }
};
