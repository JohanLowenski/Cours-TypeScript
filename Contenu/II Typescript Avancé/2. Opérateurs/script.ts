//L'opérateur !

const container = document.querySelector(".container")!;
console.log(container.children);

//L'opérateur ?

type Job = {
  title: string;
  description?: string;
  salary: number;
};

const user1: Job = {
  title: "Développeur front-end",
  description: "Développeur web",
  salary: 37000,
};
console.log(user1?.description);

//Optional Parameters
function message(message?: string) {
  if (message) {
    console.log(message);
  } else {
    console.log("No message");
  }
}
message("Hello");

//Optional interface property
interface House {
  rooms: number;
  garage?: number;
  price: number;
}
const house1: House = {
  rooms: 3,
  price: 200000,
};

// ?? Operator
const data = "";
const display = data ?? "No data";
console.log(display);

//Never
function alertUser(message: string): never {
  //   throw new Error(message);
  throw message;
}
alertUser("Alerte ! Comportement dangereux !");
