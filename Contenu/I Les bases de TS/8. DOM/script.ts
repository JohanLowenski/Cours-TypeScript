//Type Assertion permet de forcer le type d'une variable
// let txt:string
// txt = "Bonjour";

//Assertion
// const form = <HTMLFormElement>document.querySelector('form');
//Ou
// const form = document.querySelector('form')!;
//Ou
// const form : HTMLFormElement = document.querySelector('form')!;

//Type casting
const form = document.querySelector('form') as HTMLFormElement;
console.log(form.children);
const input = document.querySelector('#input') as HTMLInputElement;


form.addEventListener('submit',handleSubmit);
function handleSubmit(e: Event){
    e.preventDefault();
    console.log("Submitted");
}
window.addEventListener('click',handleClick);
function handleClick(e: MouseEvent){
    console.log(e.clientX,e.clientY);
}

const paragraphsList = document.querySelectorAll('p');
// paragraphsList.forEach((p) => {
//     console.log(p);
// });