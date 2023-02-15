"use strict";
let str = 'str';
let num = 1;
let bool = true;
let obj = { a: 1 };
let arr = [1, 2, 3];
let nul = null;
let und = undefined;
let sym = Symbol('sym');
let anything;
let randomNumber;
const conversion = (celsius) => {
    return (celsius * 9 / 5) + 32;
};
console.log(conversion(10));
