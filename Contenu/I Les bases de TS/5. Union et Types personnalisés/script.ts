// Unions

let code : string | number | boolean | object | Function;
code = 5

let arr : (boolean|number)[]
arr = [true, false, 999]

const foo = (param: number|string) => {
    console.log(param);
}
foo('Test')

// Types Perso

type mixedNumStr = number | string;
type booleanOrObject = boolean | object;

const baz = (param: mixedNumStr | booleanOrObject) => {
    console.log(param);
}
baz(true)

type element = {
    x: number;
    y: number;
    id: number | string;
    visible: boolean;
}

const button : element = {
    x: 99,
    y: 50,
    id: 999,
    visible: true
}