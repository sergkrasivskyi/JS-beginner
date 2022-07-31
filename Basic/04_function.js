// 1 Функции
// Function declarations Независимо от того в какой части кода мы задекларировали функцию таким способом, вызвать ее можно и раньше и будет работать.
// function greet (name) {
//     console.log('Привет ' + name);
// }
// Function expressions , если вызвать фугкцию раньше, чем она определена в коде, то она не будет работать
// const greet2 = function greet2 (name) {
//     console.log('Привет 2' + name);
// }
// greet('Serg')
// greet2('Serg')
// console.log(typeof greet);
// console.dir(greet) // мы видим, что функциив javascript являются объектами

// 2 Анонимные функции

// let counter = 0
// const interval = setInterval(function() {
//     if (counter === 15) {
//     clearInterval(interval); 
//     }
//     else  console.log(++counter);
// }, 1000)
// 3 Стрелочные функции
// const name = 'Sergii'
// function greet (name) {
//         console.log('Привет ' + name);
//     }
// const arrow = (name) => {
//     console.log('Привет ' + name);
// }    
// arrow(name)
// const arrow2 = name => console.log('Привет ' + name); // другой вариант написания стрелочной функции
// arrow2(name)
// const pow2 = number => number ** 2 // возводит во вторую степень
// console.log(pow2(5));

// 4 Параметры по умолчанию
// const sum = (a, b) => a + b
// console.log(sum(41, 1)); // 42 
// console.log(sum(41)); // NaN - не передан второй параметр
// const sum2 = (a, b = 1) => a + b // зададим втрой параметр по умочнанию равным 1
// console.log(sum2(41)) // будет 42
// console.log(sum2(41, 4)) // будет 45, параметр принимает значение, которое передали, а не по умолчанию
// const sum3 = (a = 40, b = a * 2) => a + b // последующие параметры могут зависеть от предыдущих  
// console.log(sum3()) // теперь можно вызвать функцию без параметров, тк есть заданные по умолчанию
// function sumAll(...all) {
//     console.log(all);
// }
// sumAll(1,2,3,4,5,6,7) // передаем любое количество параметров, они будут запихнуты в all в виде массива данных
// function summAll (...all){
//     let result = 0
//     for (let num of all) {
//         result += num
//     }
//     return result
// } // это функция, которая суммирует все параметры, причем их количество заранее не известно
// const res = summAll (1,2,3,4,5,6,7,8,9,10)
// console.log(res)

// 5 Замыкания
// function createMember (name) {
//     return function (lastName) {
//         console.log (name + ' ' + lastName)
//     }
// }
// const logWithLastName = createMember ('Sergii')
// // console.log(logWithLastName) // покажет, что logWithLastName - это функция
// console.log(logWithLastName('Krasivskyi')) // Sergii Krasivskyi
// console.log(logWithLastName('Ivanov')) // Sergii Ivanov