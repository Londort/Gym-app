

export default function newExerciseHandler() {
    const btn = document.querySelector('.add-exercise');
    if(btn){
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            console.log('Hello from new-exercise-handler.js');
            // popUp();
        });
    }
}
