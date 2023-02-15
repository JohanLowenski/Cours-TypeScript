interface Rocket {
    reactors: number;
    vMax: number;
    takeOff: (action:string) => void;
}

//merging
interface Rocket {
    price: number;
    carburant:number;
}
//Ou
// type Rocket2 = {
//     reactors: number;
//     vMax: number;
//     takeOff: (action:string) => void;
// }
//(type) peut être de type string|number alors que (interface) sera tout le temps des objets et la possibilité de faire un merging
//   class Falcon9 implements Rocket {
//     price: number;
//     carburant:number;
//     reactors: number;
//     vMax: number;
//     takeOff: (action:string) => void;
//     constructor(reactors: number, vMax: number, takeOff: (action:string) => void, price: number, carburant:number) {
//         this.reactors = reactors;
//         this.vMax = vMax;
//         this.takeOff = takeOff;
//         this.price = price;
//         this.carburant = carburant;
//     }   
// }
// const falcon9 = new Falcon9(9, 2500, (action:string) => console.log(action), 100000000, 100000000);
// console.log(falcon9);
// console.log(falcon9.takeOff("Lancement de Falcon9"));

//Ou
class RocketFactory implements Rocket {
    price: number;
    carburant:number;
    reactors: number;
    vMax: number;
    constructor(reactors: number, vMax: number,  price: number, carburant:number) {
        this.reactors = reactors;
        this.vMax = vMax;
        this.price = price;
        this.carburant = carburant;
    }
    takeOff(action:string) {
        console.log(action);
    }   
}
const Falcon9 = new RocketFactory(9, 2500, 100000000,450);
console.log(Falcon9);
Falcon9.takeOff("Lancement de la fusée Falcon9");
