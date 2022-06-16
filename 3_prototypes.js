// Costructor
function Book(title, author, year) {
    this.title = title;
     this.author = author;
     this.Year = year;
}
     
//getSummary
Book.prototype.getSummary= function () {
     return `${this.title} was written by ${this.author} in ${this.Year}`;
};

