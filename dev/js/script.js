import localStorageHandler from "./handlers/localStorage-handler.min.js";
import day from "./components/day.min.js";
import menuHandler from "./handlers/menu-handler.min.js";

// day();

// Handlers ---------------------------
menuHandler();
localStorageHandler();

// LocalStorage -----------------------
// let storage = JSON.parse(localStorage.getItem('GymApp'));
// console.group('storage');
//     console.log(storage);
//     console.log(`Длина массива - ${storage.length}`);
//     console.log(`Тип данных - ${typeof(storage)}`);
//     storage.forEach((element, index) => {
//         console.log(index, element);
//     });
// console.groupEnd();
// !!! LocalStorage -----------------------
