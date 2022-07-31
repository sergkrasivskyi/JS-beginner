// String
// const nameM = 'Serg'
// const age = 43
// function getAge() {
//     return age
// }
// console.log(typeof nameM);
// const output = 'Привет, меня зовут ' + nameM + ' и мой вораст ' + age + ' года.'
// const output = `Привет, меня зовут ${nameM} и мой возраст ${age < 20 ? 'A' : 'B'} года`  
// console.log(output)
// const output = `
// <div>This is div</div>
// <p>This is p</p>
// `
// console.log(output)
// const nameM = 'Sergii'
// console.log(nameM.length)
// console.log(nameM.toUpperCase())
// console.log(nameM.toLowerCase())
// console.log(nameM.charAt(2))
// console.log(nameM.indexOf('ii')) // вернет 4 - номер позиции с котоорй начинается подстрока в большой строке
// console.log(nameM.indexOf('t')) // вернет -1.т.е. такогй подстроки не т в искомой  
// console.log(nameM.startsWith('serg')) // вернет false
// console.log(nameM.startsWith('Serg')) // вернет true
// console.log(nameM.toLowerCase().startsWith('serg')) // вернет true - можно приенять несколько методов
// console.log(nameM.endsWith('ii')) // вернет true - заканчивается на '<какая-то строка>'
// console.log(nameM.endsWith('ii!')) // вернет false
// console.log(nameM.repeat(3)); // повторит строку укзанное количество раз
// const string = '      password      '
// console.log(string) // вернет "      password      " с пробелами
// console.log(string.trim()) // вернет "password" без пробелов
// console.log(string.trimStart()) // вернет "password" без пробелов слева
// console.log(string.trimEnd()) // вернет "password" без пробелов справа
// function logPerson (s, name, age) {
//   if (age < 0) {
//       age = 'Еще не родился'
//   }
//     return `${s[0]}${name}${s[1]}${age}${s[2]}`
// }
// const personName = 'Sergii'
// const personName2 = 'Максим'
// const personAge = 43
// const personAge2 = -10
// const output = logPerson `Имя: ${personName}, возраст: ${personAge}!`
// const output2 = logPerson `Имя: ${personName2}, возраст: ${personAge2}!`

// console.log(output); // Имя: Sergii, возраст: 43!
// console.log(output2); // Имя: Максим, возраст: Еще не родился!