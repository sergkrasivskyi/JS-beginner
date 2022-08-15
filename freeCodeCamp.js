// Objects
// const someObj = {
//   propName: "John",
//   propSurname: "McCay",
//   age: 45,
// };

// function propPrefix(str) {
//   const s = "prop";
//   return s + str;
// }

// const someProp = propPrefix("Name");
// let anotherProp = propPrefix("Surname");
// someObj.kindProp = "ho-ho";
// console.log(someObj);
// console.log(someObj[someProp]);
// console.log(someObj[anotherProp]);
// console.log(someObj["age"]);
// delete someObj.age;
// console.log(someObj.hasOwnProperty("propSurname"));

// function phoneticLookup(val) {
//   let result = "";

// Only change code below this line
// const lookup = {
//   alpha: "Adams",
//   bravo: "Boston",
//   charlie: "Chicago",
//   delta: "Denver",
//   echo: "Easy",
//   foxtrot: "Frank",
// };
// result = lookup[val];
// Only change code above this line
//   return result;
// }
// console.log(phoneticLookup("charlie"));

//  Testing Objects for Properties

// function checkObj(obj, checkProp) {
//   obj.hasOwnProperty(checkProp);
//   if (obj.hasOwnProperty(checkProp)) {
//     return obj.checkProp;
//   } else return "Not Found";
// }
// console.log(checkObj(someObj, someProp));

// Manipulating Complex Objects

// const myMusic = [
//   {
//     artist: "Billy Joel",
//     title: "Piano Man",
//     release_year: 1973,
//     formats: ["CD", "8T", "LP"],
//     gold: true,
//   },
// ];
// myMusic.push({
//   artist: "Oleh Vinnik",
//   title: "Volf  Man",
//   release_year: 2005,
//   formats: ["mp3", "ogg", "arc"],
//   gold: true,
// });
// console.log(myMusic[1]);

// Accessing Nested Objects

// const myStorage = {
//   car: {
//     inside: {
//       "glove box": "maps",
//       "passenger seat": "crumbs",
//     },
//     outside: {
//       trunk: "jack",
//     },
//   },
// };

// const gloveBoxContents = myStorage["car"]["inside"]["passenger seat"];
// console.log(gloveBoxContents);

// Accessing Nested Arrays
// Using dot and bracket notation, set the variable secondTree
// to the second item in the trees list from the myPlants object.
// const myPlants = [
//   {
//     type: "flowers",
//     list: ["rose", "tulip", "dandelion"],
//   },
//   {
//     type: "trees",
//     list: ["fir", "pine", "birch"],
//   },
// ];
// const secondTree = myPlants[1].list[1];

// Record Collection

// Setup
// const recordCollection = {
//   2548: {
//     albumTitle: "Slippery When Wet",
//     artist: "Bon Jovi",
//     tracks: ["Let It Rock", "You Give Love a Bad Name"],
//     year: 1990,
//   },
//   2468: {
//     albumTitle: "1999",
//     artist: "Prince",
//     tracks: ["1999", "Little Red Corvette"],
//   },
//   1245: {
//     artist: "Robert Palmer",
//     tracks: [],
//   },
//   5439: {
//     albumTitle: "ABBA Gold",
//   },
// };

// Only change code below this line
// function updateRecords(records, id, prop, value) {
//   if (prop != "tracks" && value != "") {
//     records[id][prop] = value;
//   } else if (prop == "tracks" && !records[id].hasOwnProperty("tracks")) {
//     records[id]["tracks"] = [];
//     records[id].tracks.push(value);
//   } else if (prop == "tracks" && value != "") {
//     records[id].tracks.push(value);
//   } else if (value == "") {
//     delete records[id][prop];
//   }
//   return records;
// }

// updateRecords(recordCollection, 1245, "artist", "ABBA");
// updateRecords(recordCollection, 1245, "tracks", "Take a Chance on Me");
// updateRecords(recordCollection, 1245, "tracks", "Chance on Me");
// updateRecords(recordCollection, 2468, "tracks", "Chance on Me");
// console.log(recordCollection[2468]["tracks"]);
// updateRecords(recordCollection, 2468, "tracks", "");
// console.log(recordCollection[2468]["tracks"]);
// console.log(recordCollection);
// console.log(recordCollection[1245]);

// Write a recursive function, sum(arr, n), that returns
//  the sum of the first n elements of an array arr.

// function sum(arr, n) {
//   if (n <= 0) {
//     return 0;
//   } else return sum(arr, n - 1) + arr[n - 1];
// }

// let s = sum([2, 3, 4], 2);
// s = sum([2, 3, 4, 5], 4);
// s = sum([11], 4);
// console.log(s);

// Profile Lookup
// We have an array of objects representing different people in our contacts lists.
// A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.
// The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
// If both are true, then return the "value" of that property.
// If name does not correspond to any contacts then return the string No such contact.
// If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.
// Setup
// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   let hasName = false;
//   for (let i = 0; i < contacts.length; i++) {
//     const element = contacts[i];
//     if (element.firstName == name) {
//       hasName = true;
//       if (element.hasOwnProperty(prop)) {
//         return element[prop];
//       } else return "No such property";
//     }
//   }
//   if (!hasName) {
//     return "No such contact";
//   }
// }
// looking = lookUpProfile("Kristian", "lastName");
// console.log(looking);
// looking = lookUpProfile("Sherlock", "likes");
// console.log(looking);
// looking = lookUpProfile("Harry", "likes");
// console.log(looking);
// looking = lookUpProfile("Bob", "number");
// console.log(looking);
// looking = lookUpProfile("Bob", "potato");
// console.log(looking);
// looking = lookUpProfile("Akira", "address");
// console.log(looking);

// Create a function called randomRange that takes a range
//  myMin and myMax and returns a random whole number that's
//  greater than or equal to myMin, and is less than or equal
//  to myMax, inclusive.

// function randomRange(myMin, myMax) {
//   // Only change code below this line
//   return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
//   // Only change code above this line
// }
// console.log(randomRange(2, 10));

// We have defined a function called countdown with one parameter (n).
// The function should use recursion to return an array containing
// the integers n through 1 based on the n parameter. If the function
// is called with a number less than 1, the function should return an
// empty array. For example, calling this function with n = 5 should
// return the array [5, 4, 3, 2, 1]. Your function must use recursion
// by calling itself and must not use loops of any kind.

// function countdown(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countdown(n - 1);
//     countArray.unshift(n);
//     return countArray;
//   }
// }
// console.log(countdown(5));

// Функція повертає масив чисел у діапазоні :

// function rangeOfNumbers(startNum, endNum) {
//   if (endNum < startNum) {
//     return [];
//   } else {
//     const countArray = rangeOfNumbers(startNum, endNum - 1);
//     countArray.push(endNum);
//     return countArray;
//   }
// }

// console.log(rangeOfNumbers(6, 9));

// 1 Масив випадкових чисел у заданому діапазоні вказаної довжини
// 1.1 За допомогою циклу
// function randomArr(min, max, length) {
//   let newArr = [];
//   let item = 0;
//   for (let i = 0; i < length; i++) {
//     item = Math.round(Math.random() * (max - min) + min);
//     newArr.push(item);
//   }
// return newArr
// }

// console.log(randomArr(0, 10, 10));
// 1.2 За допомогою рекурсії
// function recursionRandomArr(min, max, length) {
// 	if (length < 1) {
// 		return []
// 	} else {
// 		const newArr = recursionRandomArr(min, max, length - 1);
// 		newArr.push(Math.round(Math.random() * (max - min) + min));
// 		return newArr
// 	}
// }
// console.log(recursionRandomArr(-2, 5, 10));

// 5 level nested Array:
// let myNestedArray = [

//   [
//     "loop",
//     "shift",
//     6,
//     7,
//     1000,
//     "method",
//     [
//       1,
//       2,
//       "deep",
//       [
//         "concat",
//         false,
//         true,
//         "spread",
//         "deeper",
//         ["unshift", false, 1, 2, 3, "complex", "deepest"],
//       ],
//     ],
//   ],
//   ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth"],
//   ["mutate", 1327.98, "splice", "slice", "push"],

// ];
// console.log(myNestedArray);

// let nestedObject = {
//   id: 28802695164,
//   date: "December 31, 2016",
//   data: {
//     totalUsers: 99,
//     online: 80,
//     onlineStatus: {
//       active: 67,
//       away: 13,
//       busy: 8,
//     },
//   },
// };

// let userActivity = {
//   id: 23894201352,
//   date: "January 1, 2017",
//   data: {
//     totalUsers: 51,
//     online: 42,
//   },
// };

// Only change code below this line
// userActivity.data.online = 45;
// Only change code above this line

// console.log(userActivity);

// const usersO = {
//   Alan: {
//     online: false,
//   },
//   Jeff: {
//     online: true,
//   },
//   Sarah: {
//     online: false,
//   },
// };

// function countOnline(usersObj) {
// Only change code below this line
//   let result = 0;
//   for (let user in usersObj) {
//     (usersObj[user]['online'] == true) ? result +=1 : result
//   }
//   return result;
// }
// Only change code above this line

// console.log(usersO);
// console.log(countOnline(usersO));

// let user = {
//   name: "Kenneth",
//   age: 28,
//   data: {
//     username: "kennethCodesAllDay",
//     joinDate: "March 26, 2016",
//     organization: "freeCodeCamp",
//     friends: ["Sam", "Kira", "Tomo"],
//     location: {
//       city: "San Francisco",
//       state: "CA",
//       country: "USA",
//     },
//   },
// };

// function addFriend(userObj, friend) {
//   // Only change code below this line
//   let result = [];
//   for (let key in userObj) {
//     if (key == "data") {
//     userObj[key]['friends'].push(friend)
// 		result = [...userObj[key]["friends"]];
// 		}

//   }
//   return result;
// Only change code above this line
// }
// addFriend(user, 'Vasia');
// console.log(user);

// function reverseString(str) {
//  let result;
//  result = str.split('').reverse().join('');
//   return result;
// }

// reverseString("hello");
// console.log(reverseString("hello"));
// Факториал
// function factorialize(num) {
//   if (num > 1) {
//     return factorialize(num - 1) * num;
//   } else return 1;
// }
// console.log(factorialize(5));
// Find the Longest Word in a String

// function findLongestWordLength(str) {
//   let result = str.split(/\s/).sort((a, b) => {
// 		return	b.length - a.length
// 	});
//   return result[0].length;
// }
// findLongestWordLength("The quick brown fox jumped over the lazy dog");

// function largestOfFour(arr) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr[i].sort((a, b) => b - a);
//     result.push(arr[i][0]);
//   }
//   return result;
// }

// largestOfFour([
//   [4, 5, 1, 3],
//   [13, 27, 18, 26],
//   [32, 35, 37, 39],
//   [1000, 1001, 857, 1],
// ]);

// function confirmEnding(str, target) {
// return str.slice(-target.length) == target;
// }
// confirmEnding("Bastian", "ian");

// Функція, повторює строку обрану кількість раз
// function repeatStringNumTimes(str, num) {
//   let result = ''
// 	for (let i = 0; i < num; i++) {
//     result += str;
//   }
//   return console.log(result);
// }

// repeatStringNumTimes("abc", 9);

// Finders Keepers
// Create a function that looks through an array arr and returns
// the first element in it that passes a 'truth test'. This means
// that given an element x, the 'truth test' is passed if func(x)
// is true. If no element passes the test, return undefined.

// function findElement(arr, func) {
//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     if (func(num)) {
//       return arr[i];
//     }
//   }
// }

// findElement([1, 2, 3, 4], (num) => num % 2 === 0);

// is Boolean ?
// function booWho(bool) {
//   typeOf(bool) == boolean ? true : false;
// }

// booWho(null);

// To Capitalize function
function titleCase(str) {
  return str
    .toLowerCase()
    .split(/\s/)
    .map((e) => {
      return e[0].toUpperCase() + e.slice(1);
    })
    .join(" ");
}
console.log(titleCase("I'm a little tea pot"));

// Зклеїти пеший масив у другий починаючи з індексу n другого масиву
// function frankenSplice(arr1, arr2, n) {
//   let result = [...arr2];
// 	// arr2.forEach(element => {
// 	// 	result.push(element)
// 	// });
// 	result.splice(n, 0, ...arr1);
//   return result;
// }

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
// Функція, видаяє з масиву елементи false, null, 0, "", undefined, NaN.
// function bouncer(arr) {
//   let result = arr.filter((e) => {
//     return (
//       (e != false) &&
//       (e != null) &&
//       (e != 0) &&
//       (e != "") &&
//       (e != undefined) &&
//       !Number.isNaN(e)
//     );

//   });
//   return result;
// }

// console.log(bouncer([7, "ate", "", false, 9]));
// console.log(bouncer([false, null, 0, 4, NaN, undefined, ""]));
// console.log(bouncer([null, 1, NaN, 2, undefined]));
// console.log(bouncer([false, null, 0, NaN, undefined, ""]));
// ---------
// Where do I Belong
// Return the lowest index at which a value (second argument) should be
// inserted into an array (first argument) once it has been sorted. The
// returned value should be a number.

// function getIndexToIns(arr, num) {
//   let position = 0;
//   let sortingArr = arr.sort((a, b) => a - b);
//   while (num > sortingArr[position]) {
// 		position++
// 	}
//   return position;
// }

// console.log(getIndexToIns([40, 10, 60], 50))
// console.log(getIndexToIns([10, 20, 30, 40, 50], 35))

// --------

// Mutations

// Return true if the string in the first element of the
//  array contains all of the letters of the string in the
//  second element of the array.
// function mutation(arr) {
//   let verify = arr[1].toLowerCase();
//   let checked = arr[0].toLowerCase();
//   let isInclude = true;
//   const letters = verify.split("");
//   let i = 0;
//   do {
//     isInclude = checked.includes(letters[i]);
//     i++;
//   } while (isInclude && i < verify.length);
//   return isInclude;
// }
// console.log(mutation(["Mary", "Aarmy"]))
// console.log(mutation(["Mary", "Army"]));
// console.log(mutation(["ate", "date"]));
// mutation(["helLo", "hEy"]);
// mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);

// Chunky Monkey

// Write a function that splits an array (first argument) into
//  groups the length of size (second argument) and returns
//  them as a two-dimensional array.

// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 4);
// chunkArrayInGroups(["a", "b", "c", "d"], 2);

// array.forEach(element => {

// });
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // показывает текущую ступеньку
    console.log(this.step);
    return this;
  },
};
console.log(ladder);
ladder.up().up().down().showStep();
// ladder.up();
// ladder.down();
//ladder.showStep(); // 1
// ladder.up().up().down().showStep(); // 1
