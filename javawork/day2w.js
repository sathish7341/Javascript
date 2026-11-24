const shelf=['Wings of Fire','The Alchemist','Let us C'];
console.log(shelf);
console.log(shelf.length);
console.log(shelf[0]);
console.log(shelf[2]);
shelf.push('Clean Code');
shelf.unshift('Godan');
console.log(shelf);
let last=shelf.pop();
let first=shelf.shift();
console.log(last);
console.log(first);
console.log(shelf);
shelf.splice(1,1,'Malgudi Days');
console.log(shelf);
console.log(shelf.indexOf('Let us C'));
console.log(shelf.includes('Godan'));
a=shelf.slice(0,2);
console.log(a);
console.log(shelf);
const sortedshelf=[...shelf].sort();
console.log(sortedshelf);
console.log(Array.isArray(shelf));
shelf.forEach((title)=>
{
    console.log(title);
}
)

const book = {
    id: 101,
    title: "Wings of Fire",
    author: "APJ Abdul Kalam",
    price: 350,
    copies: 4,

    publisher: {
        name: "Universities Press",
        city: "Hyderabad"
    },
    tags:["Biography","Autobiography","Internatinal"],
    describe:function(){
        return`${this.title} is written by ${this.author}`;
    }

};
console.log(book.title);
console.log(book['author']);
console.log(book.publisher.city);
console.log(book.tags[1]);
console.log(book.describe());

book.price=380;
book.isbn='85920283'
console.log(book.price);
console.log(book.isbn);
delete(book.isbn);
console.log('isbn' in book);
console.log('price' in book);

console.log(Object.keys(book));
console.log(Object.values(book.publisher));
console.log(Object.entries(book.publisher));

function formatprice(amount){
    return "Rs"+amount;

}
console.log(formatprice(350));

function calcuLateFee(daysLate,ratePerday=2)
{
    return daysLate*ratePerday;
}
console.log(calcuLateFee(5));
console.log(calcuLateFee(5,3));

function createBook(id, title, author, category, price, copies, rating){
    return{
        id,
        title,
        author,
        category,
        price,
        copies,
        rating
    };

}
console.log(createBook(107, "Ikigai", "Hector Garcia", "Self-help", 399, 6, 4.3));

const library = [
    createBook(101, "Wings of Fire", "A. P. J. Abdul Kalam", "Autobiography", 350, 4, 4.8),
    createBook(102, "The Alchemist", "Paulo Coelho", "Fiction", 299, 2, 4.5),
    createBook(103, "Let Us C", "Yashavant Kanetkar", "Programming", 450, 5, 4.2),
    createBook(104, "Clean Code", "Robert C. Martin", "Programming", 899, 0, 4.7),
    createBook(105, "Godan", "Munshi Premchand", "Fiction", 220, 3, 4.6),
    createBook(106, "Malgudi Days", "R. K. Narayan", "Fiction", 275, 1, 4.4)
];
let titles=library.map((items)=>{
    return items.title;
});
console.log(titles);

let prices=library.filter((items)=>{
    return items.price<300;

}).map((book)=>{
    return book.title;
});
console.log(prices);
 let books=library.find((items)=>{
    return items.id==104;
 })
console.log(books.title);

let bookind=library.findIndex((items)=>{
    return items.id==105;
});
console.log(bookind);
 let OutofStock=library.some((items)=>
{
    return items.copies==0;
})
console.log(OutofStock);
 let Highrating=library.every((items)=>{
    return items.rating>4
 }
);

console.log(Highrating);

function addBokk(lib,newBook){
    return[...lib,newBook]
};
let updated=addBokk(library,createBook(107, "Ikigai", "Hector Garcia", "Self-help", 399, 6, 4.3));
console.log("Original length : " +library.length);
console.log("Updated Length : " +updated.length);

function removeBook(lib,id){
    return lib.filter((books)=>{
          return  books.id!==id;
    });
}
 let trimmed=removeBook(updated,102);
 console.log("Updated Length " +trimmed.length);

 function borrowBook(lib,id){
    let book=lib.find((books)=>{
        return books.id==id

    })

    if (!book){
        return "Book Not Found"
    }
    else if(book.copies==0){
        return`Sorry,${book.title} has 0 copies`
    }
    else{
        book.copies--;
        return`The ${book.title} only has ${book.copies} copies left`;
    }
 }
 console.log(borrowBook(library,105));

 


