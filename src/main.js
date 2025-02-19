<script type="module">
      import Swiper from 'https://unpkg.com/swiper@11/swiper-bundle.esm.browser.min.js';
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

