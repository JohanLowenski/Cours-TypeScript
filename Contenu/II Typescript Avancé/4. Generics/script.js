"use strict";
//Generics
const London = {
    name: "London",
    population: 10000000,
    additionalData: { area: 1572 },
};
const Paris = {
    name: "Paris",
    population: 20000000,
    additionalData: [
        { underground: true, lines: 14 },
        { restaurant: true, number: 18000 },
    ],
};
//Generic with function
const addRepairDate = (obj) => {
    const lastRepairDate = new Date();
    return Object.assign(Object.assign({}, obj), { lastRepairDate });
};
const auto1 = addRepairDate({ model: "Series 4", price: 50000, year: 2005 });
const auto2 = addRepairDate({ model: "Series 4", price: 50000, year: 2005, color: "Gray" });
console.log(auto1.model);
