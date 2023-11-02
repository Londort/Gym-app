import DayScreen from './DayClass.min.js';

export default function menu (){
    
    // create menu popup
    const menuPopup = document.createElement('div');
    menuPopup.classList.add('menu-popup');
    menuPopup.innerHTML = `
        <div class="menu-popup__wrap">
            <div class="menu-popup__body">
                <button class="menu-popup__btn">+New Day</button>
                <ul class="menu-popup__days"></ul>
            </div>
        </div>
    `;
    document.body.appendChild(menuPopup);

    // output days from localStorage
    const gymApp = JSON.parse(localStorage.getItem('GymApp'));
    const list = document.querySelector('.menu-popup__days');

    if (gymApp) {
        gymApp.forEach((day, index) => {
            day = document.createElement('li');
            day.classList.add('menu-popup__day');
            day.textContent = `Day ${index + 1}`;
            list.appendChild(day);
        });
    } else {
        return;
    };

    // input new day to localStorage
    const newDayBtn = document.querySelector('.menu-popup__btn');
    newDayBtn.addEventListener('click', function () {
        console.log(gymApp);
        gymApp.push( [] );
        localStorage.setItem('GymApp', JSON.stringify(gymApp));
        location.reload();
    });

    const dayElements = document.querySelectorAll('.menu-popup__day');
    dayElements.forEach((el, index) => {
        el.addEventListener('click', () => {
            const dayIndex = index; // Получите информацию о дне из localStorage
            const dayScreen = new DayScreen(dayIndex); // Создайте экран дня
            // if(document.querySelector(".day-screen")){
            //     document.querySelector(".day-screen").remove();
            // }
            document.querySelector('.day-screen')?.remove();
            
            dayScreen.renderDay(); // Отобразите экран дня
            menuPopup.remove(); // Удалите меню
            document.body.style.overflow = 'auto'; // Верните прокрутку
        });
    });
}