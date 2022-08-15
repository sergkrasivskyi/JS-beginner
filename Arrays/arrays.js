// Робота з масивами
// 1 Масив випадкових чисел у заданому діапазоні вказаної довжини
// 1.1 За допомогою циклу
// function randomArr(min, max, length) {
//   let newArr = [];
//   let item = 0;
//   for (let i = 0; i < length; i++) {
//     item = Math.round(Math.random() * (max - min) + min);
//     newArr.push(item);
//   }
//   return newArr;
// }

// console.log(randomArr(0, 10, 10));
// 1.2 За допомогою рекурсії
// function recursionRandomArr(min, max, length) {
//   if (length < 1) {
//     return [];
//   } else {
//     const newArr = recursionRandomArr(min, max, length - 1);
//     newArr.push(Math.round(Math.random() * (max - min) + min));
//     return newArr;
//   }
// }
// console.log(recursionRandomArr(-2, 5, 10));

// const exampleArray = recursionRandomArr(0, 105, 10);
// console.log(exampleArray);
// exampleArray.reduce((product, e) => product * e, 1);
// import {lastName} from './../Objects/users.js'
// console.log(lastName);
// console.log("Result Array:");
// let result = [];
// let i = 0;
// users.reduce((accum, item) => {
// 	item.lastName = lastNames[i];
//   for (const key in item) {
//     if (key === id) {
//       accum.push(item[key]);
//     }
//   }
//   i++;
//   return accum;
// }, []);
// console.log(
//   users.reduce((accum, item) => {
//     for (const key in item) {
//       if (key == "company") {
//         accum.push(item[key].name);
//       }
//     }
//     return accum;
//   }, {})
// );

// function zeroArray(m, n) {
// Creates a 2-D array with m rows and n columns of zeroes
// let newArray = [];
// for (let i = 0; i < m; i++) {
// Adds the m-th row into newArray

// let row = [];
// for (let j = 0; j < n; j++) {
// Pushes n zeroes into the current row to create the columns
//   row.push(0);
// }
// Pushes the current row, which now has n zeroes in it, to the array
//     newArray.push(row);
//   }
//   return newArray;
// }

// let matrix = zeroArray(3, 2);
// console.log(matrix);

// let res = "4" + "8" - "6" + "2" - "2";
// console.log(res);

// Глобальна змінна
// const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Змініть код під цим рядком
// function add(bookName) {

//   bookList.push(bookName);

//   return bookList;

// Змініть код над цим рядком
// }

// Змініть код під цим рядком
// function remove(bookName) {
//   const book_index = bookList.indexOf(bookName);
//   if (book_index >= 0) {

//     bookList.splice(book_index, 1);
//     return bookList;

//     // Змініть код над цим рядком
//     }
// }

// const newBookList = add(bookList, 'A Brief History of Time');
// const newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
// const newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

// console.log(bookList);

// Глобальна змінна
// const s = [23, 65, 98, 5];

// Array.prototype.myMap = function(callback) {
//   const newArray = [];
//   // Змініть код лише під цим рядком
// for (let i = 0; i < this.length; i++) {
// 	 newArray.push(callback(this[i]));
// 	}
//   // Змініть код лише над цим рядком
//   return newArray;
// };

// const new_s = s.myMap(function(item) {
//   return item * 2;
// });

// Глобальна змінна
const watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    Metascore: "82",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    Metascore: "70",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    Metascore: "83",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie",
    Response: "True",
  },
];

// Змініть код лише під цим рядком

const filteredList = watchList
  .map((el) => {
    const result = [];
    result.push({ title: el["Title"], rating: el["imdbRating"] });
    return result;
  })

// Змініть код лише над цим рядком

console.log(filteredList);
