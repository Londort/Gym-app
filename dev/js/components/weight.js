function weight () {
    const exerciseGroup = document.querySelector('.caption');
    const exercise = document.createElement('div');
    exercise.classList.add('exercise');
    exercise.innerHTML = `
        <input class="title" type="text" value="Exercise Name">
        <div class="data">
            <div>
                <input type="number" name="set" id="" value="">
                <label for="set">sets</label>
            </div>
            <div>
                <input type="number" name="rep" id="" value="">
                <label for="rep">reps</label>
            </div>
            <div>
                <input type="number" name="weight" id="" value="">
                <label for="weight">kg</label>
            </div>
        </div>
    `;
    return exerciseGroup.appendChild(exercise);
}
export default weight;