//Intersection
type Fish ={
    fin: number;
    element: "water";
    gills: true;
}
type Shark ={
    weight: number;
    length: number;
}
type HammerheadShark= Fish & Shark;

const shark1: HammerheadShark = {
    fin: 2,
    element: "water",
    gills: true,
    weight: 100,
    length: 2
}

//Lier des interfaces

interface Flower {
    pollen: true;
    type: "vegetal";
}
interface Rose extends Flower {
    color: string;
    thorn: boolean;
}
const RedRose: Rose = {
    pollen: true,
    type: "vegetal",
    color: "red",
    thorn: true
}


//Union discriminante

type Japan = {
    lang: "JA";
    food: string[];
}
type Martinique = {
    lang: "FR";
    food: string[];
}
type Country = Japan | Martinique;

const automaticResponse = (country: Country) => {
    if(country.lang === "JA") {
        console.log("Konnichiwa");
    } else if(country.lang === "FR") {
        console.log("Bonjour");
    }
}
const Japan: Country = {
    lang: "JA",
    food: ["sushi", "ramen"]
}
automaticResponse(Japan);
const Martinique: Country = {
    lang: "FR",
    food: ["Accras", "Blaff poisson"]
}
automaticResponse(Martinique);


// UNknown number of props

interface Group{
[name: string]: object;
}

const spainTrip: Group = {
    "Paco": {id: 1, age: 20},
    "Pepito": {id: 2},
    "Pepita": {id: 3}
}

