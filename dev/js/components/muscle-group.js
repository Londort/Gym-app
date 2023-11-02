import popUp from "./pop-up.min.js";

function muscleGroup() {
    const day = document.querySelector('main');
    const section = document.createElement('section');
    section.innerHTML = `
        <div class="muscle-group">
            <div class="muscle-group__header">
                <input class="muscle-group__title" type="text" value="Exercise group">
            </div>
            <div class="muscle-group__body">
            </div>
            <div class="muscle-group__footer">
                <button class="add-exercise">
                    <span>+Add Exercise</span>
                </button>
            </div>
        </div>
    `;
    return section;
}
export default muscleGroup;