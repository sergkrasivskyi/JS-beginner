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