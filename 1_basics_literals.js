//const s1 = 'hello';
//console.log(typeof s1);

//const s2 = new String('Hello');
//console.log(typeof s2);

//console.log(window);
//window.alert(1);
//console.log(navigator.appVersion);

const book1 ={
    title: 'Book one',
    author: 'John Doe',
    Year: '2013',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.Year}`;
    }
};
const book2 ={
    title: 'Book Two',
    author: 'John',
    Year: '2016',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.Year}`;
    }
};
const book3 ={
    title: 'book Three',
    Author: 'Marry',
    Year: '2018',
    getSummary: function(){
        return `${this.title} was writtem by ${this.author} in ${this.Year}`;
    }
};
//console.log(book3.getSummary());
console.log(Object.values(book1));
//console.log(Object.keys(book2));