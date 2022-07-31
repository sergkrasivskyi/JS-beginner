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

function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray

    let row = [];
    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

let res = "4" + "8" - "6" + "2" - "2";
console.log(res);