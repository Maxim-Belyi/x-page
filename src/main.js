
      import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
// import Swiper from "swiper";



const swiper = new Swiper('.swiper', {
  simulateTouch: false,
  speed: 5, 
  loop: true, 
});

const buttons = document.querySelectorAll('.swiper__button');
let timeout;

buttons.forEach((button) => {
  button.addEventListener('mouseenter', () => {
    const slideIndex = parseInt(button.getAttribute('data-slide'));
    timeout = setTimeout(() => {
      swiper.slideTo(slideIndex);
    }, 50); 
  });

  button.addEventListener('mouseleave', () => {
    clearTimeout(timeout);
  });
});

