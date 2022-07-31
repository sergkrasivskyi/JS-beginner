// 7 Массивы
// const cars = ["Mazda", "Ford", "Toyota", "Huyndai"];
// const people = [
//   { name: "Sergii", budget: 4200 },
//   { name: "Elena", budget: 3500 },
//   { name: "Victoria", budget: 1700 },
// ];
// const fib = [1, 1, 2, 3, 5, 8, 13];
// console.log(cars); // так можна пересвідчитись, що масив є об'єктом та має багато методів, також видно прототипи масиву
// додати елемент у кінець масиву:
//Function
// function addItemToEnd(){
//     // так оформлюється Функція
// }
// А це - Метод
// cars.push('Renault')  // додає елемент у кінець масиву
// console.log(cars);
// // додати елемент у початок масиву:
// cars.unshift('KIA')
// // console.log(cars);
// // cars.shift() // видаляє перший елемент масиву і повертає значення елементу, масив меншає
// // console.log(cars);
// const firstCar = cars.shift()
// const lastCar = cars.pop() // видаляє останній елемент масиву і повертає значення елементу, масив меншає
// console.log(firstCar);
// console.log(lastCar);
// console.log(cars);

// console.log(cars.reverse()); // Масив мутує після цього методу - зворотній напрямок елементів
// console.log(cars);

// console.log(cars.indexOf('Toyota')); // 2
// const index = cars.indexOf('Toyota')
// console.log(cars[index]); // 'Toyota'
// cars[index] = 'Porsche' // змінюємо значення елемента масиву за індексом index
// console.log(cars); // ['Mazda', 'Ford', 'Porsche', 'Huyndai']
// const index = cars.indexOf('!Toyota!') // якщо такого елементу немає у масиві, то зачення змінної буде -1
// cars[index] = 'Porsche'
// console.log(cars)   // -1:'Porsche'
//                     // 0:'Mazda'
//                     // 1:'Ford'
//                     // 2:'Toyota'
//                     // 3:'Huyndai'
// indexOf підходить для роботи з простими типами даних

// Для роботи з масивами ОБ'ЄКТІВ краще використовувати:
// const index1 = people.findIndex(function(person) {
//     console.log(person) // {name: 'Sergii', budget: 4200}
//                         // {name: 'Elena', budget: 3500}
//                         // {name: 'Victoria', budget: 1700}
// })

// const index2 = people.findIndex(function(person) {
//    return person.budget === 3500
// })
// console.log(index2) // 1
// console.log(people[index2]) // Знайшли person у якого поле budget дорівнює 3500
// якщо такого (person.budget === 3500) нет, то повернеться undefined

// const person = people.find(function(person) {
//     return person.budget === 3500
//  })
// console.log(person)

// Щоб зрозуміти, як це працює, зробимо теж саме через цикл
// let findedPerson
// for (const person of people) {
//     if (person.budget === 3500) {
//       findedPerson = person;
//   }
// }
// console.log(findedPerson);
// Ще один варіант за допомогюю стрілочної функції
// const person = people.find((person) => {
//     return person.budget === 3500
// } )
// console.log(person)
// А тепер ще спрощуємо забираючи зайві скобки(бо один параметр) та 'return', бо дія одна
// const person = people.find(person => person.budget === 3500)
// console.log(person)

// console.log(cars.includes('Ford')) // true - цей елемент входить до масиву
// console.log(cars.includes('Ford111')) // false цей елемент НЕ входить до масиву

// Методи високого порядку (тут метод наприклад map () )
// const upperCaseCars = cars.map(car => car.toUpperCase()) // кожен елемент приводимо у верхній регістр
// console.log(upperCaseCars); // ['MAZDA', 'FORD', 'TOYOTA', 'HUYNDAI']
// console.log(cars); //['Mazda', 'Ford', 'Toyota', 'Huyndai'] початковий масив без змін

// const pow2Fib = fib.map(num => num ** 2) // кожен елемент масиву Fib возводимо у квадрат
// console.log(pow2Fib); // [1, 1, 4, 9, 25, 64, 169]
// інший спосіб:
// const pow2 = num => num ** 2
// const pow2Fib = fib.map(pow2) // у скобках передаємо функцію (не визиваємо), такий код виглядаює максимально декларативно і зрозуміло
// console.log(pow2Fib) // [1, 1, 4, 9, 25, 64, 169]  отримуємо масив, до якого можемо застосовувати різні методи
// const sqrt = num => Math.sqrt(num)
// const pow2Fib_1 = fib.map(pow2).map(sqrt)
// console.log(pow2Fib_1) // [1, 1, 2, 3, 5, 8, 13]  отримуємо масив, кожний елемент  це квадр корінь вихідного елементу масиву
// // такой можна прято передати Math.sqrt, це буде так:
// const pow2Fib_2 = fib.map(pow2).map(Math.sqrt) // прямо передаємо, немає скобок
// console.log(pow2Fib_2) // [1, 1, 2, 3, 5, 8, 13]  отримуємо масив, кожний елемент  це квадр корінь вихідного елементу масиву
// const pow2 = num => num ** 2
// const pow2Fib = fib.map(pow2)
// const filteredNumbers = pow2Fib.filter(num => num > 20) // этот метод возвращает отфильтрованный по опреленному условию массив
// console.log(pow2Fib);
// console.log(filteredNumbers);

// Задача 1
// const text = 'Привіт, ми вивчаємо JavaScript' // Перевернути строку
// const reverseText = text.split(',') // розділяє  масив на частиндо цього елементу і після, виходить дві частини
// consol e.log(reverseText); //  ['Привіт', ' ми вивчаємо JavaScript']
// const reverseText = text.split('') // розіб'є масив посимвольно
// console.log(reverseText) // ['П', 'р', 'и', 'в', 'і', 'т', ',', ' ', 'м', 'и', ' ', 'в', 'и', 'в', 'ч', 'а', 'є', 'м', 'о', ' ', '', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
// const reverseText = text.split('').reverse() // це вже масив і можна визвати метод reverse()
// console.log(reverseText) // ['t', 'p', 'i', 'r', 'c', 'S', 'a', 'v', 'a', 'J', ' ', 'о', 'м', 'є', 'а', 'ч', 'в', 'и', 'в', ' ', 'и', 'м', ' ', ',', 'т', 'і', 'в', 'и', 'р', 'П']
// const reverseText = text.split('').reverse().join() // перетворюємо масив у строку, але поки що тут будуть ',' після кожного елементу
// console.log(reverseText) // t,p,i,r,c,S,a,v,a,J, ,о,м,є,а,ч,в,и,в, ,и,м, ,,,т,і,в,и,р,П
// const reverseText = text.split('').reverse().join(' ') // з'єднуємо масив через символ ' ' між елементами
// console.log(reverseText) // t p i r c S a v a J   о м є а ч в и в   и м   , т і в и р П
// const reverseText = text.split('').reverse().join('') // з'єднує масив у строку без жодних символів між елементами
// console.log(reverseText) // tpircSavaJ омєачвив им ,тівирП

// function caseInSwitch(val) {
//   let answer = "";
//   // Порівнюємо за допомогою ===
//   switch (val) {
//     case 1:
//       answer = "alpha";
//       break;
//     case 2:
//       answer = "beta";
//       break;
//     case 3:
//       answer = "gamma";
//       break;
//     case 4:
//       answer = "delta";
//       break;
//   }
//   // Only change code above this line
//   return answer;
// }
// caseInSwitch(1);
// function sequentialSizes(val) {
//   let answer = "";
//   switch (val) {
//     case 1:
//     case 2:
//     case 3:
//       answer = "Low";
//       break;

//     case 4:
//     case 5:
//     case 6:
//       answer = "Mid";
//       break;
//     case 7:
//     case 8:
//     case 9:
//       answer = "High";
//       break;
//   }
//   return answer;
// }

// sequentialSizes(1);

let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;

    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count -= 1;
      break;
  }
  if (count > 0) {
    return count + "Bet";
  }
  return count + "Hold";
  // Only change code above this line
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");