import popUpHandler from "../handlers/pop-up-handler.min.js";


function popUp(){
    const popUp = document.createElement('div');
    popUp.classList.add('pop-up');
    popUp.innerHTML = `
        <div class="pop-up__content">
            <div class="pop-up__btns">
                <button class="pop-up__btn cardio">Cardio</button>
                <button class="pop-up__btn weight">Weight</button>
            </div>
        </div>
        <button class="pop-up__btn cancel">Cancel</button>
    `;
    document.querySelector('body').appendChild(popUp);
    document.body.style.overflow = 'hidden';
    popUpHandler();

    // const cancelBtn = document.querySelector('.cancel'),
    //       cardioBtn = document.querySelector('.cardio'),
    //       weightBtn = document.querySelector('.weight');

    // cancelBtn.addEventListener('click', function () {
    //     popUp.remove();
    //     document.body.style.overflow = 'auto';
    // });

    // window.addEventListener('click', function (e) {
    //     if (e.target === popUp) {
    //         popUp.remove();
    //         document.body.style.overflow = 'auto';
    //     }
    // });

    // cardioBtn.addEventListener('click', function () {
    //     popUp.remove();
    //     document.body.style.overflow = 'auto';
    //     cardio();
    // });

    // weightBtn.addEventListener('click', function () {
    //     popUp.remove();
    //     document.body.style.overflow = 'auto';
    //     weight();
    // });
}
export default popUp;