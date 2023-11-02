

export default function localStorageHandler() {
    let gymApp = [
        // {
        //     day: 1,
        // },
    ];

    if (localStorage.getItem('GymApp') === null) {
        localStorage.setItem('GymApp', JSON.stringify(gymApp));
    };
}
