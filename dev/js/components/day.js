import dayHandler from "../handlers/day-handler.min.js";

export default function day() {
    const main = document.querySelector('main');
    const day = document.createElement('div');
    day.innerHTML = `
        <div class="day">
            <div class="day__wrap">
                <button class="day__add-section">
                    +New Exercise Gruop
                </button>

                <div class="day__sections">
                Smth
                </div>

                <button class="day__delete">
                Delete Day
                </button>
            </div>
        </div>
    `;
    main.appendChild(day);
    dayHandler();
}