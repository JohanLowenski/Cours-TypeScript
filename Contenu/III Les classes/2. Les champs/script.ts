// 1. Classe de base méthode raccourcis
class Book {
  private BookID = 888;
  readonly libraryName = "Bibliothèque de la ville de Paris";

  constructor(  
    public title: string,
    public price: number,
    public dateOfParution: string,
    public author: string,
    public theme?: string[]    
) {}


  promo() {
    console.log("BookID", this.BookID);
    console.log("libraryName", this.libraryName);
    
    return this.price * 0.9;
  }
}
const book1 = new Book("Le petit prince", 10, "1943", "Antoine de Saint-Exupéry", ["philosophie", "enfance"]);
// console.log(book1);
console.log(book1.promo());
// console.log(book1.price);
// console.log(book1.libraryName);



const addToShelter = (obj: Book) => {
  console.log("ADDED TO SHELTER3", obj);
};
// addToShelter(new Book("Nana", 10, "1880", "Emile Zola", ["roman", "enfance"]));

let onlyBook: Book[] = [];
onlyBook.push(new Book("Père Goriot", 10, "1835", "Honoré de Balzac", ["roman", "enfance"]));
// console.log(onlyBook);
