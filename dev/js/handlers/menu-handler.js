import menu from '../components/menu.min.js';

export default function menuHandler () {
    const menuBtn = document.querySelector('.menu-btn');
    menuBtn.addEventListener('click', function () {
    //    console.log('Hello from menuHandler');
       if (document.querySelector('.menu-popup')) {
           document.querySelector('.menu-popup').remove();
           document.body.style.overflow = 'auto';
       } else {
           menu();
           document.body.style.overflow = 'hidden';
       };
    });
}