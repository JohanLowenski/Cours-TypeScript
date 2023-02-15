"use strict";
// 1. Classe de base
class Book {
    constructor(title, price, dateOfParution, author, theme) {
        this.title = title;
        this.price = price;
        this.dateOfParution = dateOfParution;
        this.author = author;
        this.theme = theme;
    }
    promo() {
        this.price = this.price * 0.9;
    }
}
const book1 = new Book("Le petit prince", 10, "1943", "Antoine de Saint-Exupéry", ["philosophie", "enfance"]);
// console.log(book1);
// console.log(book1.price);
const addToShelter = (obj) => {
    console.log("ADDED TO SHELTER3", obj);
};
// addToShelter(new Book("Nana", 10, "1880", "Emile Zola", ["roman", "enfance"]));
let onlyBook = [];
onlyBook.push(new Book("Père Goriot", 10, "1835", "Honoré de Balzac", ["roman", "enfance"]));
console.log(onlyBook);
