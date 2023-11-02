function cardio () {
    const exerciseGroup = document.querySelector('.caption');
    const exercise = document.createElement('div');
    exercise.classList.add('exercise');
    exercise.innerHTML = `
        <input class="title" type="text" value="Exercise Name">
        <div class="data">
            <div>
                <input type="number" name="set" id="" value="">
                <label for="set">min</label>
            </div>
            <div>
                <input type="number" name="lvl" id="" value="">
                <label for="lvl">level</label>
            </div>
        </div>
    `;
    return exerciseGroup.appendChild(exercise);
}
export default cardio;