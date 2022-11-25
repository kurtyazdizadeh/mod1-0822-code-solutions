var books = [
  {
    isbn: '978-3-16-148410-0',
    title: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling'
  },
  {
    isbn: '978-3-16-148410-1',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien'
  },
  {
    isbn: '978-3-16-148410-2',
    title: 'The Lion, the Witch, and the Wardrobe',
    author: 'C.S. Lewis'
  }
];

console.log('books: ', books);
console.log('type of books: ', typeof books);

var jsonBooks = JSON.stringify(books);
console.log('JSON books: ', jsonBooks);
console.log('typeof JSON books: ', typeof jsonBooks);

var parsedBooks = JSON.parse(jsonBooks);
console.log('parsed books: ', parsedBooks);
console.log('typeof parsed books: ', typeof parsedBooks);
