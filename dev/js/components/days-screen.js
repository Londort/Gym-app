export default function daysScreen() {
    const main = document.querySelector('main');
    const daysScreen = document.createElement('div');
    const gymApp = JSON.parse(localStorage.getItem('GymApp'));

    daysScreen.classList.add('days-screen');
    daysScreen.innerHTML = `
        <button class="days-screen__button">+ New Day</button>
        <div class="days-screen__body">
            <ul class="days-screen__list">
            ${gymApp ? gymApp.map((day, index) => `
                    <li class="day-item">Day ${index + 1}</li>
                `).join('') : ''
            }
            </ul>
        </div>
    `;
    main.appendChild(daysScreen);

    // // Получаем данные из localStorage
    // const gymApp = JSON.parse(localStorage.getItem('GymApp'));

    // // Получаем контейнер для дней
    // const dayslist = document.querySelector('.days-screen__list');

    // // Проверяем, есть ли данные в GymApp
    // if (gymApp && gymApp.length > 0) {
    //     // Для каждого дня создаем элемент и добавляем его в контейнер
    //     gymApp.forEach((day, index) => {
    //         const dayElement = document.createElement('li');
    //         dayElement.classList.add('day-item');
    //         dayElement.textContent = `Day ${index + 1}`;
    //         dayslist.appendChild(dayElement);
    //     });
    // }
}