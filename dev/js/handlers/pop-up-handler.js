import cardio from '../components/cardio.min.js';
import weight from '../components/weight.min.js';

export default function popUpHandler() {
    const cancelBtn = document.querySelector('.cancel'),
          cardioBtn = document.querySelector('.cardio'),
          weightBtn = document.querySelector('.weight'),
          popUp = document.querySelector('.pop-up');

    if(popUp) {
        cancelBtn.addEventListener('click', function () {
            popUp.remove();
            document.body.style.overflow = 'auto';
        });
    
        window.addEventListener('click', function (e) {
            if (e.target === popUp) {
                popUp.remove();
                document.body.style.overflow = 'auto';
            }
        });
    
        cardioBtn.addEventListener('click', function () {
            popUp.remove();
            document.body.style.overflow = 'auto';
            cardio();
        });
    
        weightBtn.addEventListener('click', function () {
            popUp.remove();
            document.body.style.overflow = 'auto';
            weight();
        });
    };
}