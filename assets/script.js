AOS.init({
  duration: 2000,
  once: true,
});

let linkedin_logo_animation = bodymovin.loadAnimation({
  container: document.getElementById('linkedin-logo-animation-container'), 
  path: 'assets/content/animations/linkedin-logo.json',
  render: 'svg',
  loop: true,
  autoplay: true,
  name: 'Linkedin Logo Animation'
});
let github_logo_animation = bodymovin.loadAnimation({
  container: document.getElementById('github-logo-animation-container'), 
  path: 'assets/content/animations/github-logo.json',
  render: 'svg',
  loop: true,
  autoplay: true,
  name: 'Github Logo Animation'
});
let scroll_arrow_animation = bodymovin.loadAnimation({
  container: document.getElementById('scroll-arrow-animation-container'), 
  path: 'assets/content/animations/scroll-arrow.json',
  render: 'svg',
  loop: true,
  autoplay: true,
  name: 'Scroll Arrow Animation'
});

// function showMobileNavigation(){
//   const hamburger = document.querySelector('.hamburger').classList.toggle('open');
//   const mobileNav = document.querySelector('.mobile-navigation').classList.toggle('active');
// }

// function closeMobileNavigation() {
//   const hamburger = document.querySelector('.hamburger').classList.remove('open');
//   const mobileNav = document.querySelector('.mobile-navigation').classList.remove('active');
// }

// const navLinks = document.querySelectorAll('.mobile-navigation nav a');
  
// navLinks.forEach(link => {
//     link.addEventListener('click', closeMobileNavigation);
// });

function handleHoverAnimation(elementsSelector, delay) {
  const elements = document.querySelectorAll(elementsSelector);
  let hoverTimeout;

  elements.forEach((element) => {
    element.addEventListener('mouseenter', () => {
      hoverTimeout = setTimeout(() => {
        element.classList.add('hovered');
      }, delay);
    });

    element.addEventListener('mouseleave', () => {
      clearTimeout(hoverTimeout);
      element.classList.remove('hovered');
    });
  });
}

handleHoverAnimation('.element', 50);
handleHoverAnimation('.link-1', 50);
handleHoverAnimation('.link-1-a', 50);
