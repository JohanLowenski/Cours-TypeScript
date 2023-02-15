// const multiply = (num1 : number, num2 = 10, action?: string)=>{
//     if(action)console.log(action);
    
//     return num1 * num2;
// }
// //(action?:...) signifie que le paramètre est optionnel
// console.log(multiply(6,10,"Multiplication"));


// let foo: Function;
// foo = () =>{}

// //Function signature
// let baz: (a: number, b: number) => number;
// baz = (a,b) => a + b;


// //Callback
// const greetings = (fn: (a: string) => void)=>{
//     fn("Hello World");
// }
// const printToConsole = (msg: string) =>{
//     console.log(msg);
// } 
// greetings(printToConsole);