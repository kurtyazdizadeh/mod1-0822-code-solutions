var one = 1;
var two = 2;
var three = 3;

var maximumValue = Math.max(one, two, three);
console.log('maximumValue: ', maximumValue);

var heroes = ['Spiderman', 'Thor', 'Ironman', 'Black Panther'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('randomIndex: ', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero: ', randomHero);

var library = [
  {
    title: 'The Cat in the Hat',
    author: 'Dr. Suess'
  },
  {
    title: 'The Lion, the Witch, and the Wardrobe',
    author: 'C.S. Lewis'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien'
  }
];

var lastBook = library.pop();
console.log('lastBook: ', lastBook);

var firstBook = library.shift();
console.log('firstBook: ', firstBook);

var js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library: ', library);

var fullName = 'Kurt Yazdizadeh';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName: ', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName: ', sayMyName);
