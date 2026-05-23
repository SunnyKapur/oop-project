//Library project

class Library {
  constructor() {
    this.books = []; //saari books ka record yaha par hai
  }

  addBooks(books) {
    this.books.push(...books);
  }
  listAllBooks() {
    this.books.forEach(function (book,index) {
      console.log(`${index + 1}> ${book.name} by ${book.author}`);
    });
  }
}

class Book {
  constructor(name, isbn, price, author) {
    this.name = name;
    this.isbn = isbn;
    this.price = price;
    this.author = author;
    this.readStatus = false;
  }
  info() {
    console.log(
      `${this.readStatus ? "✅" : "❌"} ${this.name} is written by ${this.author} and you have ${this.readStatus ? "read it" : "not read this book"} and is available at amazon at a price range of ${this.price}`,
    );
  }

  changeReadStatus() {
    this.readStatus = !this.readStatus;
  }
}

// let kokar = new Library();
let kokarLibrary = new Library()
let book1 = new Book("Wealth is Life", "2fasdfasd3afdsa3", 120, "Harsh Sharma");
let book2 = new Book("Adventure", "asdfafsdfds322fas", 1200, "Saina");
let book3 = new Book("Rich dad poor dad", "2fasdfasd3afd3332sa3", 1004, "Rahul");


kokarLibrary.addBooks([book1,book2,book3])
