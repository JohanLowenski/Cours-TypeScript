"use strict";
//L'opérateur !
const container = document.querySelector(".container");
console.log(container.children);
const user1 = {
    title: "Développeur front-end",
    description: "Développeur web",
    salary: 30000,
};
console.log(user1 === null || user1 === void 0 ? void 0 : user1.description);
//Optional Parameters
function message(message) {
    if (message) {
        console.log(message);
    }
    else {
        console.log("No message");
    }
}
message("Hello");
const house1 = {
    rooms: 3,
    price: 200000,
};
// ?? Operator
const data = "";
const display = data !== null && data !== void 0 ? data : "No data";
console.log(display);
//Never
function alertUser(message) {
    //   throw new Error(message);
    throw message;
}
alertUser("Alerte ! Comportement dangereux !");
