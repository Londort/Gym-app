import muscleGroup from "../components/muscle-group.min.js";


export default function newGroupHandler() {
    const main = document.querySelector('main');
    const btn = document.querySelector('.add-section');
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        main.prepend(muscleGroup());
    });
}
// export default newGroupHandler;
