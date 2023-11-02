export default function localStorageDaysHandler () {
    console.log(localStorage);

    const addDayBtn = document.querySelector('.days-screen__button');
    console.log(addDayBtn);

    addDayBtn.addEventListener('click', () => {
        let gymApp = JSON.parse(localStorage.getItem('GymApp'));
        if(!gymApp) {
            gymApp = [];
        };
        console.log(gymApp);
        
        const day = {
            name:'day',
            index: gymApp.length+1,
        };
        gymApp.push(day);
        console.log(day);
        
        localStorage.setItem('GymApp', JSON.stringify(gymApp));
        location.reload();
    });
    if (localStorage.getItem('GymApp') === null) {
        localStorage.setItem('GymApp', JSON.stringify([]));
    }


    // if(localStorage.getItem('days') === null) {
    //     localStorage.setItem('days', JSON.stringify([]));
    // }
}