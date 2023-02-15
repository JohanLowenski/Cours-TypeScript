"use strict";
const shark1 = {
    fin: 2,
    element: "water",
    gills: true,
    weight: 100,
    length: 2
};
const RedRose = {
    pollen: true,
    type: "vegetal",
    color: "red",
    thorn: true
};
const automaticResponse = (country) => {
    if (country.lang === "JA") {
        console.log("Konnichiwa");
    }
    else if (country.lang === "FR") {
        console.log("Bonjour");
    }
};
const Japan = {
    lang: "JA",
    food: ["sushi", "ramen"]
};
automaticResponse(Japan);
const Martinique = {
    lang: "FR",
    food: ["Accras", "Blaff poisson"]
};
automaticResponse(Martinique);
const spainTrip = {
    "Paco": { id: 1, age: 20 },
    "Pepito": { id: 2 },
    "Pepita": { id: 3 }
};
