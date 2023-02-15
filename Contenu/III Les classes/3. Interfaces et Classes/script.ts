interface Country {
  name: string;
  population: number;
  lang: string[];
}
class Norway implements Country {
  constructor(public name: string, public population: number, public lang: string[]) {}
}
const NorwayData = new Norway("Norway", 5.3, ["Norwegian"]);
console.log(NorwayData);

class France implements Country {
  constructor(public name: string, public population: number, public lang: string[]) {}
}
const FranceData = new France("France", 67, ["French"]);
console.log(FranceData);

class Aquitaine extends France {}
const AquitaineData = new Aquitaine("Aquitaine", 5.3, ["French"]);
