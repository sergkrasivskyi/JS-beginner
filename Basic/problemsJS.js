// Задачка поиска минимального и максимального числа в массиве
// const numberArray = [5, 1, 6, 2, 3, 8, 7, 55 ,9, 10, 11, -105, 12, 137, 14, 15, 16, 17, 18]
// let minNumber = numberArray[0]
// let maxNumber = numberArray[0]
// for (let i = 0; i < numberArray.length; i++) {
//     if (minNumber >= numberArray[i]) {
//         minNumber = numberArray[i]
//     }
//     if (maxNumber <= numberArray[i]) {
//         maxNumber = numberArray[i]
//     }
// }
// console.log('Минимальное число массива: ', minNumber)
// console.log('Максимальное число массива:', maxNumber)

// Задачка сортировки массива
// const numberArray = [5, 1, 6, -2, -10, 8, 7, 13, 50]
// let indexChange = false
// do {
//      indexChange = false
//      for (let i = 0; i < numberArray.length; i++){
//         if (numberArray[i] > numberArray[i+1]) {
//             let bufferVar = numberArray[i+1]
//               numberArray[i+1] = numberArray[i]
//               numberArray[i] = bufferVar
//               indexChange = true
//         }
//     }
// } while (indexChange)
// console.log('Отсортированный массив :', numberArray)

// Задачка полиндром
// Слово которое читается одинаково
// К примеру слово
// Дед
// Так вот
// Нужно написать функцию
// IsPolindrom
// В которую передается один парамер
//  А функция возвращает True или false
//
// function isPolindrom(checkWord) {
//     let counter = checkWord.length
//     let checkWordLC = checkWord.toLowerCase() // convert to lower case
//         let falsePolindrom = false // индикатор НЕполиндромности
//             for (let j = 0; j < Math.round(counter/2); j++) {
//                 if (checkWordLC[j] === checkWordLC[counter - j -1]) {
//                        } else falsePolindrom = true
//             } return !falsePolindrom
//  }

// console.log(isPolindrom('AпилиПa'))
// Еще одно решение с переворотом строки и последующим сравнением
// var isPolindrom = (str) => str == str.split('').reverse().join('')
// console.log('Полиндром', isPolindrom("Пилип"));

// Задачка сгенерить случайное число 0-9
// Вапиант 1 старый
//  function getRandomNumber () {
//     // let randomValue =10 * Math.random()
//     //  console.log(randomValue)
//     return Math.round(10 * Math.random())
//   }
//   // END

//   // export default
//   console.log(getRandomNumber());
// вариант 2 новый
// var getRandomNumber = () => Math.round(10 * Math.random())
// console.log(getRandomNumber());
//
// Функция - текст с большой буквы
// var capitalize = (text) => text[0].toUpperCase() + text.slice(1)
// capitalize('текст с большой буквы')

// Перемножаем числа в заданном диапазоне

// const multiplyNumbersFromRange = (start, finish) => {
//     let produkt = start
//     let i = start + 1
//        while (i <=finish) {
//       produkt = produkt * i
//       i++
//      console.log('Произведение равно  ' + produkt,'i = ' + i)
//     } return produkt
//   }
// multiplyNumbersFromRange (2, 5)

//  Реализуйте функцию joinNumbersFromRange(), которая объединяет все числа из диапазона в строку:

// const joinNumbersFromRange = (first, finish) => {
//     let result = ''
//     let i = first
//     while (i <= finish) {
//       result = `${result}${i}`
//       i = i + 1
//     } return result
//   }
//  joinNumbersFromRange(2,9)

// Считаем повторение символа в строке, не учитівая регистр
// другой вариант решения  - сравнивать приведенные к toLowerCase символы, а не влоб как я сделал.
// const countChars = (str, char) => {
//     let i = 0
//     let count = 0
//     while (i < str.length){
//       if ((char === str[i]) || (char === str[i].toUpperCase()) || (char === str[i].toLowerCase())) {
//         count = count + 1
//       }
//       i++
//     }
//     return console.log(count)
//   }
//   countChars ('HexlEt eE', 'e')

// Реализуйте функцию переворота строки reverse(), выполняющую обход строки
// не с первого элемента по последний, а наоборот, от последнего к первому.
// const reverse = (str) => {
//     let i = str.length - 1
//     let result = ''
//     while (i >= 0){
//       result = `${result}${str[i]}`
//       i = i -1
//     }
//     return console.log(result)
//   }
// reverse('Hello World')

// Напишите функцию makeItFunny(), которая принимает на вход строку и возвращает
// её копию, у которой каждый n-ный элемент переведен в верхний регистр. n – задается на входе в функцию.
// const makeItFunny = (text, number) => {
//     let i = 1
//     let funText = ''
//     let checkSimbol = ''
//     while (i <= text.length) {
//         if (i % number === 0) {
//         checkSimbol = text [i-1].toUpperCase()
//         }
//         else checkSimbol = text[i-1]
//         funText += checkSimbol
//         i++
//     }
//     return funText
//     }
//    console.log(makeItFunny('I never look back', 5))
// Задание
// Сэмвелл обнаружил, что его сообщения перехватываются в замке «Близнецы» и там читаются.
//  Из-за этого их атаки перестали быть внезапными. Немного подумав, он разработал программу,
//  которая бы шифровала сообщения по следующему алгоритму. Она бы брала текст и переставляла
//  в нем каждые два подряд идущих символа.

// const encrypt = (message) => {
//     let result = ''
//       for (let i = 0; i < message.length; i+=2) {
//         if ( message[i + 1] === undefined) result = `${result}${message[i]}`
//         else result = `${result}${message[i + 1]}${message[i]}`
//       }
//     return result
//     }
// console.log(encrypt('look'))

// //Тернарний оператор
// const abs = (number) => {
// return number >= 0 ? number : -number
// }
//const abs = (number) => (number >= 0 ? number : -number) // тернарний оператор беруть у скобки!
// console.log(abs(-5));
// const convertText = (wrdToConvert) => {
//     let resultwrd
//     (wrdToConvert[0] === '' ? resultwrd = '' : resultwrd = wrdToConvert)
//     (wrdToConvert[0] === wrdToConvert[0].toUpperCase() ? resultwrd = wrdToConvert : resultwrd = reverse(wrdToConvert))
//     return resultwrd
//     }
//     convertText('olleH')

// Вы просите пользователя ввести сумму его зарплаты. Затем рассчитываете:
// Добавку в виде премии в сумме 15% от зарплаты.
// Налоги в сумме 10% от суммы всех начислений (зарплата + премия).
// Трату в магазине в сумме 190.
// Разделяете оставшуюся сумму между пользователем и его "женой"/"мужем".
// Вариант 1 , не очень
// let salary = prompt('Введите сумму', 0)
// let premia = salary * 1.15
// let withoutTax = 0.9 * premia
// let afterShop = withoutTax - 190
// let halfToWife = afterShop / 2
// alert(`Премия +15% =${premia}`)
// alert(`Вычтем налоги, на руки ${withoutTax}`)
// alert(`Потратились в магазине, осталось ${afterShop}`)
// alert(`Половину отдать жене, осталось ${halfToWife}`)
// Вариант2, получше
// let res = prompt('Введите сумму', 0)
// res *= 1.15
// alert(`Премия +15% =${res}`)
// res *=0.9
// alert(`Вычтем налоги, на руки ${res}`)
// res -=190
// alert(`Потратились в магазине, осталось ${res}`)
// res /=2
// alert(`Половину отдать жене, осталось ${res}`)

// const user = { name: "John Doe", age: 34 };
// const { age: name, name: age } = user;
// console.log(age);

// const user = {
//   johnDoe: {
//     age: 34,
//     email: "johnDoe@freeCodeCamp.com",
//   },
// };

// const {  johnDoe : { age, email} } = user;
// const { johnDoe : {age: userAge, email: userEmail}} = user
// console.log(userEmail);

// const [a, b] = [1, 2, 3, 4, 5, 6];
// console.log(a, b); => 1 2

// const [a, ,,, b] = [1, 2, 3, 4, 5, 6];
// console.log(a, b); => 1 5

// let a = 8,  b = 6;
// Only change code below this line
// [a, b] = [b, a];
// console.log(a);

// const quarterOf = (month) => {
// Your code here
//   return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4;
// };
// console.log(quarterOf(11));

// function maps(x) {
//   let y = arr.map(x);
//   return y;
// }
// console.log(maps([1, 1, 1, 2, 3]));

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
function recursionRandomArr(min, max, length) {
  if (length < 1) {
    return [];
  } else {
    const newArr = recursionRandomArr(min, max, length - 1);
    newArr.push(Math.round(Math.random() * (max - min) + min));
    return newArr;
  }
}
// const testArray = recursionRandomArr(0, 10, 5);
// console.log(testArray);

const str =
  `. 9Lorem Ї і і ї   ... ip 990 sum ! $$ dolor sit, amet 8consectetur adipisicing elit. Itaque placeat" +
  "omnis aspernatur aliquid nobis magnam recusandae laboriosam iure, quasi" +
  "hic fugiat sapiente ? dolorum, voluptatibus quibusdam laborum natus sint" +
  "numquam. Animi. ."`;

let y = [];
// y = str
//   .split(" ")
//   .join()
//   .split(".")
//   .join()
//   .split("!")
//   .join()
//   .split("?")
//   .join()
//   .split(",");
// фільтрує зі строки у масив елементи, використовуючи у якості розділення для
//  елементів вказане у regular expression
// у даному випадку це всі NOT"латинські букви та символи"&цифри
let reExp = /[\W0-9]/;
// let reExp = /[ .,!?0-9]/;

console.log(`Until Filter:`);
y = str.split(reExp);
// console.log(`Starting Array:`);
// .filter((e) => e != "")
console.log(y);
const newArr = [...y]
console.log('NewArr:');
console.log(newArr);

function deleteUnnecessary(arr) {
  let result = arr.filter((e) => e != '');
  result.sort((a, b) => a.length - b.length);
  return result;
}

// result.map((a, b) => {
//   a.length - b.length;
// });

const z = deleteUnnecessary(y);
console.log(`Filtered Array:`);
console.log(z);

// function sortingArr(arr) {
//   return arr.sort((a) => {
// 		if (a.length % 3 == 0) {
//       return -1;
// } else if (a.length % 3 === 0 && b.length % 3 === 0) {
// return 0;
//     } else return 1;
// 		// console.log(arr);
// 	});
// }

// console.log(`Sorting Array by element:`);

// for (let i = 0; i < sortingArr(z).length; i++) {
// 	console.log(sortingArr(z)[i]);
// }

// console.log(`Sorting Array:`);
// console.log(sortingArr(z));
console.log(`Mapped Array:`);
console.log(
  z
    .map((e, index, array) => {
      if (e.length % 2 === 0) {
        return e + " doubled";
      } else if (e.length % 3 === 0) {
        return e + " tripled";
      } else return "";
    })
    .filter((e) => e != "")
);
// console.log(str);
// console.log(z.join(" "));

// testArray.forEach((index) => {
// console.log(e, index, self);
//   y.unshift(index);
// });
// let x = testArray.map((e) => e * 2 );
// let x = testArray.filter((e) => e < 0);
// let x = testArray.sort((a, b) => a - b);
// let x = testArray.join('$');
// let x = testArray.reverse();
// let x = testArray.slice(1, 10);
// let x = testArray.pop(); видаляє кінцевий елемент
// let x = testArray.shift(); видаляє початковий елемент
// testArray.push(100); додає у кінець
// testArray.unshift(200); додає у початок

// console.log(y);
// console.log(testArray);

// Знайдемо середнє значеня масиву
// const exampleArray = recursionRandomArr(0, 5, 4);
// let average = exampleArray.reduce((x, y) => x + y, 0) / exampleArray.length;
// console.log(exampleArray);
// console.log(average);
