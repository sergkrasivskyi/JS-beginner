// 1 block переменные
// var variable
// var name = 'Sergii' // устаревшая методика для опрееления переменных
// const lastName = 'Krasivskyi' // обычно надо так
 // let age = 43 // или так
// const firstName = 'Sergii'
// name = 'Serg' //string
 // age = 44 // number
// age = 'some string'
// const isProgrammer = true // boolean
// console.log(lastName)
// 2 Типы данных в  JS мутирование
// console.log('Имя человека: ' + firstName + ', а возраст: ' + age)
// alert('Имя человека: ' + firstName + ', а возраст: ' + age)
// const lastName = prompt('Введите фамилию')
// alert(firstName + ' ' + lastName)

// 3 Опраторы
// let currentYear = 2022
// const birthYear = 1978
// const age = currentYear + birthYear
// console.log(age)
// const a = 10
// const b = 5
// let c = 32 
// c = c + a
// c = c - a
// c = c * a
// c = c / a
//c -= a
// c *= a
// c /= a
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(++currentYear)
// console.log(--currentYear)
// console.log(c) 
// Типы данных
// const isProgrammer = true
// const name = 'Sergii'
// const age = 43
// let x

// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// 5 Приоритете операторов
// const fullAge = 43
// const birthYear = 1978
// const currentYear = 2022

// // < > <= >=
// const isFullAge = (currentYear - birthYear) >= fullAge // 44>= 32
// console.log(isFullAge)
// 6 условные операторы
// const courseStatus = 'fail' // ready, fail, pending
// if (courseStatus === 'ready') {
// console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//     console.log('Курс находится в процессе разработки');
// } else { 
//     console.log('Курс не получилсяа');
// }

//  const isReady = true 
// if (isReady) {
//     console.log('Все готово');
// } else {
//     console.log('Все не готово');
// }
// Тернарное выражение
// isReady ? console.log('Все готово') : console.log('Все не готово')

// const num1 = 42 // number
// const num2 = '42' // string
// console.log(num1 === num2);

// Булевая логика
// const animalC = 'a'
// const animalD = 'b'
// const isAnimal = animalC || animalD
// console.log(animalC)

// 8 Функции
// function calculateAge(year) {
//     return 2022 - year
// }
// const myAge = calculateAge(1978)
// console.log(calculateAge(1978));
// console.log(calculateAge(2009));
// console.log(calculateAge(2014));
// function logInfoAbout(name, year) {
// const age = calculateAge(year)
// console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age);
// }
// logInfoAbout('Sergii', 1978)
// logInfoAbout('Masha', 2014)
// logInfoAbout('Ivan', 2009)

//Задачка

// const dadYearsOld = 43
// const sonYearsOld = 13
// function twiceAsOld(dadYearsOld, sonYearsOld){
//     return (dadYearsOld - 2 * sonYearsOld)
// }
// twiceAsOld(dadYearsOld, sonYearsOld) > 0 ? console.log('Через ' + twiceAsOld(dadYearsOld, sonYearsOld) + ' лет')  : console.log(Math.abs(twiceAsOld(dadYearsOld, sonYearsOld)) + ' лет назад')

// 9 Массивы
// const cars = ['Mazda', 'Mersedes', 'Ford'] // более правильно создавать массивы через квадр скобки
// const cars = new Array('Mazda', 'Mersedes', 'Ford')
// console.log(cars.length)
// console.log(cars[1])
// console.log(cars[0])
// console.log(cars[3])
// cars[0] = 'Porsche'
// cars[cars.length] = 'Mazda'
// console.log(cars);
// 10 Циклы
// const cars = ['Mazda', 'Mersedes', 'Ford', 'Porsche']
// for (let i = 0; i < cars.length; i++) {
// const car = cars[i]
// console.log(car);
// }

// for (let car of cars) {
//     console.log(car)
// }

// 11 Объекты

// const person = {
//     firstName: 'Sergii',
//     lastName: 'Krasivskyi',
//     year: 1978,
//     languages: ['Ru', 'En', 'UA'],
//     hasWife : true,
//     greet : function () {
//         console.log('greet from person')
//     }
// }
// console.log(person.firstName);
// console.log(person.lastName);
// const key = 'year'
// console.log(person[key]);
// person.hasWife = false
// person.isProgrammer = true
// console.log(person);
// person.greet()