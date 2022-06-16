// Costructor
function Book(title, author, year) {
    this.title = title;
     this.author = author;
     this.Year = year;
     this.getSummary= function () {
     return `${this.title} was written by ${this.author} in ${this.Year}`;
};
}
//Instatiate an Object
const Book1 = new Book ('Book One', 'John Doe', '2013');
const Book2 = new Book ('Book One', 'John Doe', '2016');
console.log(Book2);