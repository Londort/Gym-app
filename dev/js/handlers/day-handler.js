export default function dayHandler() {
    const newSectionBtn = document.querySelector('.day__add-section');
    const deleteDayBtn = document.querySelector('.day__delete');

    newSectionBtn.addEventListener('click', () => {
        console.log('New section');
    });
}