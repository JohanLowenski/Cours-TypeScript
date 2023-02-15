"use strict";
class Norway {
    constructor(name, population, lang) {
        this.name = name;
        this.population = population;
        this.lang = lang;
    }
}
const NorwayData = new Norway("Norway", 5.3, ["Norwegian"]);
console.log(NorwayData);
class France {
    constructor(name, population, lang) {
        this.name = name;
        this.population = population;
        this.lang = lang;
    }
}
const FranceData = new France("France", 67, ["French"]);
console.log(FranceData);
class Aquitaine extends France {
}
const AquitaineData = new Aquitaine("Aquitaine", 5.3, ["French"]);
