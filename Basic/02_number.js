// 1 Number
// const num = 44 // integer
// const float = 42.42 // float
// const pow = 10e3
// console.log(pow);
// console.log('MAX_SAFE_INTEGER ', Number.MAX_SAFE_INTEGER)
// console.log('Math.pow 53 ', Math.pow(2, 53) -1);
// console.log('MIN_SAFE_INTEGER ', Number.MIN_SAFE_INTEGER);
// console.log('MAX_VALUE ', Number.MAX_VALUE);
// console.log('MIN_VALUE ', Number.MIN_VALUE);
// console.log('POSITIVE_INFINITY ', Number.POSITIVE_INFINITY);
// console.log('NEGATIVE_INFINITY ', Number.NEGATIVE_INFINITY);
// console.log(1/0) // Infinity
// console.log(Number.NaN) // Nan = Not a Number BUT:
// console.log(typeof NaN) // => number
// console.log(2/undefined) //; => NaN

// const stringInt = '42'
// const stringFloat = '42.42'
// console.log(stringInt +2); // '422'
// console.log(Number.parseInt(stringInt) + 2)// 44
// console.log(parseInt(stringInt) + 2) //44
// console.log(Number(stringInt) + 2) // 44
// console.log(+stringInt + 2) //44
// console.log(parseFloat(stringFloat) + 2);
// console.log(+stringFloat + 2);
// console.log(0.4 + 0.2) // 0.6000000000001
// console.log((0.4 + 0.2).toFixed(4)) // 0.6000 - string
// console.log((0.4 + 0.2).toFixed(1)) // 0.6 - string!
// console.log(parseFloat((0.4 + 0.2).toFixed(1))) // 0.6 - number!

// 2 BigInt // Integer!

// console.log(90071992547409919999999999n-9007199254740991999999999n);
// console.log(10n-4) // error не можна віднімати від БігІнт звичайні числа
// console.log(parseInt(10n)-4) // перетворили 10n у звичайне число
// console.log(10n - BigInt(4)) // => 6n
// console.log(5n / 2n) // 2n

// 3 Math - це об'єкт для математичних операцій

// console.log(Math.E);
// console.log(Math.PI)
// console.log(Math.sqrt(25));
// console.log(Math.pow(5, 3));
// console.log(Math.abs(-42));
// console.log(Math.max(42,12,23,11,156));
// console.log(Math.min(42,12,23,11,156));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.1))
// console.log(Math.random())

// Example
// const getRandomBetween = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }
// console.log(getRandomBetween(10, 42));