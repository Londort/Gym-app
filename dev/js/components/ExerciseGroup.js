export default class ExerciseGroup {
    constructor(groupData) {
        this.gymApp = JSON.parse(localStorage.getItem('GymApp'));
        this.group = document.createElement('div');
        this.sections = document.querySelector('.day-screen__sections');
        this.groupData = groupData;
        
        this.render();
    }
    
    render() {
        this.group.innerHTML = `
        <div class="exercise-group">
        <div class="exercise-group__wrap">
        <div class="exercise-group__header">
        <button class="exercise-group__delete">Delete Group</button>
        </div>
        <div class="exercise-group__body">
        <p>${this.groupData.title}</p>
        <div class="exercise-group__exercises">
        </div>
        </div>
        <div class="exercise-group__footer">
        <button class="exercise-group__new-exercise">+New Exercise</button>
        </div>
        </div>
        </div>
        `;
        document.querySelector('.day-screen__sections').append(this.group);
    }
}