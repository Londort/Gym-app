import ExerciseGroup from "./ExerciseGroup.min.js";

export default class DayScreen {
    constructor(index) {
        this.gymApp = JSON.parse(localStorage.getItem('GymApp'));
        this.index = index;
        this.element = document.createElement('div');
        this.element.classList.add('day-screen');
        
        this.renderDay();
        this.sections = this.element.querySelector('.day-screen__sections');
        // this.renderGroups();
    }


    renderDay() {
        this.element.innerHTML = `
        <div class="day-screen__wrap">
        <div class="day-screen__body">
        <div class="day-screen__header">
        <span>Day ${this.index + 1}</span>
        <button class="day-screen__new-group">+New Group</button>
        </div>
        <div class="day-screen__sections"></div>
        <div class="day-screen__footer">
        <button class="day-screen__delete">Delete Day</button>
        </div>
        </div>
        </div>
        `;
        document.querySelector('main').append(this.element);
        this.delete();
        this.newGroupBtn();
        this.renderGroups();
    }

    renderGroups() {
        if (this.gymApp[this.index].length > 0) {
            const currentDay = this.gymApp[this.index];
            currentDay.forEach((groupData) => {
                const el = new ExerciseGroup(groupData);
            });
        }
    }

    delete() {
        this.element.querySelector('.day-screen__delete').addEventListener('click', (e) => {
            e.preventDefault();
            if (this.gymApp[this.index]) {
                this.gymApp.splice(this.index, 1);
                localStorage.setItem('GymApp', JSON.stringify(this.gymApp));
            }
            this.element.remove();
        });
    }

    newGroupBtn() {
        // const newGroupBtn = this.element.querySelector('.day-screen__new-group');
        const newGroupBtn = document.body.querySelector('.day-screen__new-group');
        newGroupBtn.addEventListener('click', () => {
            console.log('new group');
            this.gymApp[this.index].push({
                title: 'Exercise group',
                exercises: []
            });
            localStorage.setItem('GymApp', JSON.stringify(this.gymApp));
            // location.reload();
            // this.element.render();

            // this.exerciseGroupRender();
        });
    }


    // exerciseGroupRender(){
    //     if(this.gymApp[this.index]){
    //         console.log(`rendering exercise groups from day ${this.index}`);
    //         const groups = this.gymApp[this.index];
    //         groups.forEach((groupData) => {
    //             const el = new ExerciseGroup(groupData);
    //             this.element.querySelector('.day-screen__sections').append(el.render());
    //         });
    //     }
    // }
}