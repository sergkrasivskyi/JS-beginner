// console.log(users, posts, comments);
// console.log("address" in users[1]);
// let lastName;

// for (let i = 0; i < users.length; i++) {
//   // users[i][(lastName = lastNames[i])];
//   console.log(lastName);
//   console.log(users[i]);
//   console.log(`number#${i}`);
//   for (const key in users[i]) {
//     lastName = lastNames[i];
//     console.log(`key is: '${key}' with value '${users[i][key]}'`);
//   }
//   console.log("Details: ");
//   users[i].showDetails();
// }

// Напишите код, выполнив задание из каждого пункта отдельной строкой:
// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

// const user = {};
// user.name = "John";
// console.log(user);
// user.surname = 'Smith',
// console.log(user);
// user.name = 'Pete';
// console.log(user);
// delete user.name;
// // console.log(user);

// function isEmpty(obj) {
//   let result = true;
//   for (const key in obj) {
//     obj[key] ? (result = false) : (result = true);
//   }
//   return result;
// }
// console.log(isEmpty(user));
// console.log(isEmpty(users));

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// const premierEmployee = "premier employee";
// salaries[premierEmployee] = "somebody";
// console.log(salaries);
// let sum = 0;
// function sumProps(obj) {
//   for (const key in obj) {
//       sum += obj[key];
//   }
// 	return sum
// }

// console.log(sumProps(salaries));

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };
// let submenu = menu;
// function multiplyNumeric(obj) {
// for (const key in obj) {
// 	if (typeof obj[key] == "number") {
//     obj[key] *= 2;
//   } else if (typeof obj[key] == "string"){
// 		obj[key] = 'submenu'
// 	}

// }
// };
// multiplyNumeric(menu);
// console.log(menu);
// console.log(submenu);
// Object.assign(submenu, menu, users[0])
// console.log(submenu);
// submenu.showDetails();
// let user = users.find((item) => item.id == 1);
// alert(user.showDetails())

// console.log(users, posts, comments);
// Какие пользователи отдавали комменты и сколько постов сделали
// users.forEach(elem => {
// 	let userId = elem.id;

// });

// class Warrior {
//   constructor(name = "Man", work = "not deside") {
//     this.work = work;
//     this.name = name;
//     this.hands = 2;
//     this.legs = 2;
//     this.gun = "Uzi";
//   }
//   introduce() {
//     return console.log(
//       `Im ${this.name}, my profession ${this.work}, I have ${this.gun} `
//     );
//   }
//   fire() {
//     return console.log(`${this.gun} sounds Boom`);
//   }
// }
// function greeting() {
//   console.log(`Добрий день,  everybody! Im ${this.name}!`);
// }
// const man = new Warrior("Arny", "Soldier");
// man.gun = "Javeline";
// man.saiGreet = greeting;
// console.log(man.prototype);
//man.introduce(); // Im Arny, my profession Soldier, I have Javeline
//man.saiGreet(); // Добрий день,  everybody! Im Javeline!
//man.fire(); // Javeline sounds Boom
// const tankist = new Warrior("Joe", "Tankist");
// tankist.gun = "T-72";
// tankist.sayGreet = greeting;

// for (key in tankist) {
//   console.log(`${key} is: ${tankist[key]}`);
// }
// tankist.introduce();

// man.introduce() = function() {
// 	return console.log(`Now ${this.name} have a rest`)
// }
// console.log(man);

// class Human {
//   constructor(name = "noname", age) {
//     this.name = name;
//     this.legs = 2;
//     this.age = age;
//   }
//   laugh() {
//     console.log(`Ha-ha-ha Im ${this.name}`);
//   }
// }
// const student = new Human();
// student.sayHi = greeting;
// student.name = "Petro";

// console.log(student.sayHi());
// console.log(Warrior.prototype.fire);
// console.log(Object.getOwnPropertyNames(Warrior.prototype));

// class Pupil extends Human {
//   constructor() {
//     super("Vasia", 15);
//     this.school = 82;
//   }
// }
// const pupil = new Pupil();
// console.log(pupil);
// tankist.name = "Vova";
// pupil.name = "Nils";
// pupil.sayGreet = greeting;
// for (key in pupil) {
//   console.log(`${key} is: ${pupil[key]}`);
// console.log(pupil[key]);
// }
// pupil.laugh();
// pupil.sayGreet();
// let terminator = {};
// Object.assign(terminator, pupil, tankist);
// console.log(terminator);
// terminator.introduce()
// console.log(terminator.laugh())
// console.log(Object.getOwnPropertyNames(Pupil.prototype));

// let calculator = {
// a: 0,
// b: 0,
// 	read(a,b) {
//     this.a = a,
// 		this.b = b;
//   },
//   sum() {
// 		return this.a + this.b;
//   },
//   mul() {
// 		return this.a * this.b;
// 	},
// };

// calculator.read(4, 4);
// console.log(calculator.mul());
// console.log(calculator.sum());

// function Gadget(name, display) {
// this.name = name
// this.display = display
// }
// let phone = new Gadget('S10+', 5.4)
// phone.call = function() {
// 	console.log('Bell-bell');
// }
// console.log(phone);
// phone.call()
// function Calculator() {
//   this.read = function (a, b) {
//     this.a = +prompt("Input a:", 0);
//     this.b = +prompt("Input b:", 0);
//   };
//   this.sum = function () {
//     return this.a + this.b;
//   };
//   this.mult = function () {
//     return this.a * this.b;
//   };
// }
// let calculator = new Calculator();
// console.log(calculator);
// calculator.read();

// alert("Sum=" + calculator.sum());
// alert("Mult=" + calculator.mult());
// function Accumulator(startingValue) {
// 	this.value = startingValue;
// 	this.read = function () {
// 		this.value += +prompt("Input value:", 0);
// 	}
// };
// let accumulator = new Accumulator(10); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению
//accumulator.read(); // прибавит ввод prompt к текущему значению

//alert(accumulator.value); // выведет сумму этих значений
let id = Symbol('myId') // Здесь не нужен 'new', так как Symbol is not a constructor
console.log(id);
let id2 = Symbol('myId')
console.log(id == id2);// false
// Символ также можно создать по-другому
let id3 = Symbol.for('myId')
let id4 = Symbol.for('myId')
console.log(id3);
 