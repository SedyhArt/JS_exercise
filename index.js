/** @format */

// 'use strict';
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const lydia = new Person('Lydia', 'Hallie');
// const sarah = new Person('Sarah', 'Smith');

// console.log(lydia, 'console1');
// console.log(firstName, 'console2');
// console.log(lastName, 'console2');
// console.log(sarah, 'console3');

// Задача 1
// Написать функцию, которая будет работать:

// foo('{}') -> true
// foo('}{') -> false
// foo('{{}{}}') -> true
// foo('{{{{}}}}') -> true
// foo('{}}}{{') -> false
// true - когда правильная скобочная последовательность

// const validBrackets = (brackets) => {
//   const brakcetsType = {
//     '(': ')',
//     '{': '}',
//     '[': ']',
//     '<': '>',
//   };
//   let stack = [];

//   for (let i = 0; i < brackets.length; i++) {
//     let bracket = brackets[i];

//     // if (Object.keys(brakcetsType).includes(bracket)) {
//     if (brakcetsType.hasOwnProperty(bracket)) {
//       stack.push(bracket);
//     } else if (brakcetsType[stack[stack.length - 1]] === bracket) {
//       stack.pop();
//     } else {
//       return false;
//     }
//   }

//   if (stack.length == 0) return true;
// };

// console.log(validBrackets('{[[{]{{}}}]}'));
// console.log(validBrackets('{([()])}'));

// Задача 2
// Какой будет порядок выода чисел в консоль?

// setTimeout(() => console.log(1), 0); // 4
// Promise.resolve().then(() => console.log(2)); //2
// Promise.resolve().then(() => setTimeout(() => console.log(3), 0)); //6
// Promise.resolve().then(() => console.log(4)); // 3
// setTimeout(() => console.log(5), 0); // 5
// console.log(6); //1

// Задача 3
// Приходит массив цифр (arr) и число (total)
// Написать функцию, которая вернет массив с первой парой чисел, сумма которых равна total:

// let arr = [1, 2, 3, 6, 2, 8, 13, 5, 6, 7, 9];
// let total = 3;
// // result = [1, 3];

// function getTota(nums, total) {
//   for (let i = 0; i < nums.length; i++) {
//     let res = nums.findIndex((num) => {
//       return num + nums[i] == total;
//     });

//     if (res >= 0) return [nums[i], nums[res]];
//   }
//   return ['empty'];
// }

// console.log(getTota(arr, total));
// console.log(count);

// Задача 4
// Что выведется с экземпляра класса Bar?

// class Foo {
//   constructor() {
//     this.id = 'foo';
//     console.log(this, 'Это зис');
//     this.print();
//   }

//   print() {
//     console.log(this);
//     console.log('foo' + this.id, '0');
//   }
// }

// class Bar extends Foo {
//   constructor() {
//     super();
//     this.id = 'bar';
//     this.print();
//     super.print();
//   }

//   print() {
//     console.log('bar' + this.id, '1');
//   }
// }

// new Bar();

// Задача 5
// const name = 'Татьяна Валерьевна';

// const obj = {
//   name: 'Иванова Наталья',
//   prop: {
//     name: 'Петрова Василиса',
//     getName() {
//       console.log(this.name);
//     },
//   },
// };
// obj.prop.getName(); // PW
// const text = obj.prop.getName;
// text(); //
// console.log(this.name);

// Задача 6
// Promise.resolve(44)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .then((res) => console.log(res));

// Задача 7
// Написать функцию, которая выводит числа с интервалом в одну секунду
// Пример если вызов func(5) --> 5, 4, 3, 2, 1

// function interval(val) {
//   let int = setInterval(() => {
//     console.log(val);
//     --val < 1 ? clearInterval(int) : null;
//   }, 1000);
// }

// interval(5);

// function tO(val) {
//   setTimeout(function go() {
//     console.log(val);
//     val--;
//     if (val > 0) {
//       setTimeout(go, 1000);
//     }
//   }, 1000);
// }

// tO(5);
// function time(val) {
//   setTimeout(function go() {
//     console.log(val);
//     if (val > 1) {
//       setTimeout(go, 1000);
//     }
//     val--;
//   }, 1000);
// }
// time(5);

// function t(val) {
//   let cur = val;
//   let timerId = setInterval(() => {
//     console.log(cur);
//     cur--;
//     if (cur < 1) clearInterval(timerId);
//   }, 1000);
// }

// t(5);

// Задача 8
// Дана строка. Нужно вернуть число уникальных букв в строке.

// function unicSymbolsCount(str) {
//   let unique = [];

//   for (let i = 0; i < str.length; i++) {
//     unique.includes(str[i]) ? null : unique.push(str[i]);
//   }
//   return unique.length;
//   // return new Set(str).size;
// }

// function uniq(str) {
//   const obj = {};

//   for (let letter of str) {
//     if (!obj.hasOwnProperty(letter)) {
//       obj[letter] = letter;
//     }
//   }
//   return Object.keys(obj).length;
// }

// console.log(uniq('adadddddDDDaaaaaAAAB')); // 4
// console.log(unicSymbolsCount('cabca')); // 3
// console.log(unicSymbolsCount('tralalo')); // 5

// Задача 9  Что будет при сравнении ?
// '2' > 1; // true
// '01' == 1; // true
// true == 1; // true
// false == 0; // true

// console.log(Number(' 123 ')); // ?
// console.log(Number('123z')); // ?
// console.log(Number('true')); // ?
// console.log(Number('false')); // ?

// / Задача 10 Что будет в консоле ?

// let i = 10,
//   arr = [];
// while (i--) {
//   arr.push(() => i + i);
// }

// console.log(arr[0](), arr[0]());

// const arr = [10, 12, 15, 21];

// for (var i = 0; i < arr.length; i++) {
//   setTimeout(
//     (function (iLocal) {
//       return function () {
//         console.log('Index ' + iLocal + ', element ' + arr[iLocal]);
//       };
//     })(i),
//     3000
//   );
// }

// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//     // передадим функции переменную i, в результате
//     // у каждой функции будет доступ к правильному значению индекса
//     setTimeout(
//         (function (i_local) {
//             return function () {
//                 console.log("The index of this number is: " + arr[i_local]);
//             };
//         })(i),
//         3000
//     );
// }

// Задача 11 В каком продке вызовутся console.log ?
// setTimeout(function timeout() {
//   console.log('Таймаут');
// }, 0);

// let p = new Promise(function (resolve, reject) {
//   console.log('Создание промиса ');
//   resolve();
// });

// p.then(function () {
//   console.log('Обработка промиса');
// });

// console.log('Конец скрипта');

//Задача 12 Даны 3 асинхронные функции со случайным setTimeout ????????????
// Нужно написать код, который выведет в консоль последовательность:
// A
// B
// C
// !!! Изменять функции нельзя(можно писать обертки и др., но сами функции изменять нельзя)

// function foo(callback) {
//   setTimeout(function () {
//     callback('A');
//   }, Math.random() * 100);
// }
// function bar(callback) {
//   setTimeout(function () {
//     callback('B');
//   }, Math.random() * 100);
// }
// function baz(callback) {
//   setTimeout(function () {
//     callback('C');
//   }, Math.random() * 100);
// }

// new Promise(() => {});

// function foo(callback) {
//   setTimeout(function () {
//     callback('A');
//   }, Math.random() * 100);
// }
// function bar(callback) {
//   setTimeout(function () {
//     callback('B');
//   }, Math.random() * 100);
// }
// function baz(callback) {
//   setTimeout(function () {
//     callback('C');
//   }, Math.random() * 100);
// }

// const x = new Promise((res) => {
//   foo((arg) => {
//     console.log(arg);
//     res();
//   });
// })
//   .then(() => {
//     return new Promise((res) => {
//       bar((arg) => {
//         console.log(arg);
//         res();
//       });
//     });
//   })
//   .then(() => {
//     return new Promise((res) => {
//       baz((arg) => {
//         console.log(arg);
//         res();
//       });
//     });
//   });

// Задача 12

// Какого цвета будет текст внутри блоков?

// {
//  <style>
//   .red:

// {   color: red;   }

// .blue

// {     color: blue;  }
//  </style>
// }

// {
//   <div className="red blue">Text 1</div>
// <div className="blue red">Text 2</div>
// }

//  Задача 13 ???????????????????

// Какое значение выведется в консоли? Почему?

// let firstObj = { name: 'hey' };

// let secondObj = firstObj;

// firstObj = { name: 'ho' };

// console.log(secondObj);

// Задача 14

// // Какой будет порядок вывода в консоль? Почему?

// console.log('start');

// setTimeout(() => {
//   console.log('timeout ');
// });

// Promise.resolve().then(() => {
//   console.log('resolve');
// });

// console.log('end 2');

// Задача 15

// Что выведется с экземпляра класса Bar?

// class Foo {
//     constructor() {
//         this.id = "foo";
//         this.print();
//     }

//     print() {
//         console.log("foo" + this.id);
//     }
// }

// class Bar extends Foo {
//     constructor() {
//         super();
//         this.id = "bar";
//         this.print();
//         super.print();
//     }

//     print() {
//         console.log("bar" + this.id);
//     }
// }

// new Bar();

// Задача 16

// Напишите реализацию функции duplicate.

// const duplicate = (arr) => [...arr, ...arr];

// const duplicate = (arr) => {
//   let duplicateArr = [];

//   arr.forEach((elem, index) => {
//     duplicateArr[index] = elem;
//     duplicateArr[arr.length + index] = elem;
//   });
//   return duplicateArr;
// };
// console.log(duplicate([1, 2, 3, 4])); // [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]

// console.log(duplicate([1, 2, 3, 4, 5]));

// Задача 17

// Написать функцию, которая выводит числа с интервалом в одну секунду
// Пример если вызов func(5) --> 5, 4, 3, 2, 1

// function time(val)

// {    ваш код ... }

// time(5);

// Задача 18

// Приходит массив цифр (arr) и число (total)
// Написать функцию, которая вернет массив с первой парой чисел, сумма которых равна total:

// arr = [1, 2, 3]
// total = 4
// result = [1, 3]

// function firstTotal(arr, total) {
//   arr.forEach(item)
// }

// Задача 19

// // Найти ТОП самых дорогих товаров
// function biggerPrice(count, products) {
//   const sortArr = products.sort((a, b) => b.price - a.price).slice(0, count);

//   return sortArr;
// }

// console.log(
//   biggerPrice(5, [
//     { name: 'water', price: 1 },
//     { name: 'bread', price: 100 },
//     { name: 'wine', price: 138 },
//     { name: 'wine', price: 156 },
//     { name: 'wine', price: 0 },
//     { name: 'wine', price: 151 },
//     { name: 'meat', price: 15 },
//   ])
// );
// == [
//   {"name": "wine", "price": 138},
//   {"name": "bread", "price": 100},
// ];

// Задача 20.  Что выведет и как вывести Петрову Василису в тесте?

// const name = "Татьяна Валерьевна";

// const obj = {
//     name: "Иванова Наталья",
//     prop: {
//         name: "Петрова Василиса",
//         getName() {
//             console.log(this.name);
//         }
//     }
// };

// obj.prop.getName(); // ?
// const text = obj.prop.getName;
// text.call(obj.prop); // ?

//*

// Задача 21.  Что в алерте?

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('result');
//   }, 1000);
// });

// promise.then(
//   (result) => {
//     console.log('Fulfilled: ' + result);
//   },
//   (error) => {
//     console.log('Rejected: ' + error);
//   }
// );

//////

// Promise.resolve(11)

//   .then(
//     (val) => console.log('then', val),
//     (err) => console.log('catch', err)
//   )

//   .then(null, (err) => console.log('catch', err))

//   .catch((err) => console.log('catch', err))

//   .then(() => Promise.reject(22))

//   .catch(null)

//   .then((val) => console.log('then', val), null)

//   .finally((val) => console.log('finally', val))

//   .catch((val) => console.log('catch', val))

//   .finally(() => Promise.reject(33))

//   .then(
//     (val) => console.log('then', val),

//     (err) => console.log('catch, in then', err)
//   )

//   .catch(
//     (val) => console.log('then', val),

//     (err) => console.log('catch', err)
// );

////////////

// const p = Promise.resolve()

//   .then(() => {
//     console.log(1);
//   })
//   .then(() => {
//     console.log(2);
//   });

// const p1 = Promise.resolve()

//   .then(() => {
//     console.log(3);
//   })
//   .then(() => {
//     console.log(4);
//   });

////////////

// const foo = {
//   name: 'foo',

//   func: (function () {
//     console.log(this);
//     return function () {
//       console.log(this);
//     };
//   })(),
// };

// foo.func(); //foo
// const bar = foo.func;
// bar(); //

//*
// const foo = {
//   name: 'foo',

//   func: (function () {
//     return () => {
//       console.log(this);
//     };
//   })(),
// };

// foo.func(); //global
// const bar = foo.func;
// bar(); //

// function one(action) {
//   if (!action) {
//     return 1;
//   }
//   return action(1);
// }

// function two(action) {
//   if (!action) {
//     return 2;
//   }
//   return action(2);
// }

// function plus(x) {
//   return function (y) {
//     console.log(y, 'это y');
//     return y + x;
//   };
// }

// console.log(one(plus(two())))

////////////////

// Считает колличество элементов внутри массива (даже вложеннные)
// function getLength(arr) {
//   return arr.reduce((acc, cur) => {
//     if (Array.isArray(cur)) {
//       return (acc += getLength(cur));
//     } else {
//       return ++acc;
//     }
//   }, 0);
// }

// console.log(getLength([1, [2, 3]]));

// console.log(getLength([1, [2, [3, 4]]]));

// console.log(getLength([1, [2, [3, [4, [5, 6]]]]]));

// console.log(getLength([1, [2], 1, [2], 1]));

/////////////////////

// Функция принимает шаги робота по направления N, E, S, W, N...

// function trackRobot(...args) {
//   let coords = [0, 0];
//   let x = true;
//   let y = true;
//   args.forEach((step, index) => {
//     if (index % 2 === 0) {
//       y ? (coords[1] += step) : (coords[1] -= step);
//       y = !y;
//     } else {
//       x ? (coords[0] += step) : (coords[0] -= step);
//       x = !x;
//     }
//   });
//   return coords;
// }

// console.log(trackRobot(20, 30, 10, 40));

// trackRobot();

// console.log(trackRobot(-10, 20, 10));

//////////////////

// function distanceToNearestVowel(string) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let arrFromStr = string.split('');
//   let res = [];
//   let count = 0;
//   let operation = 0;

//   arrFromStr.forEach((elem, index, array) => {
//     operation++;
//     if (vowels.includes(elem)) {
//       count = 0;
//       res.push(0);
//     } else {
//       if (index === 0) {
//         count = array.length;
//         res.push(array.length);
//       } else if (!res[res.length - 1]) {
//         res.push(1);
//         count++;
//       } else {
//         count++;
//         res.push(count);
//       }
//     }
//   });

//   for (let i = res.length - 1; i > 0; i--) {
//     operation++;
//     let curElem = res[i];
//     let nextElem = res[i - 1];
//     if (curElem === 0 && nextElem !== 0 && nextElem !== undefined) res[i - 1] = 1;
//     if (nextElem - curElem > 0) {
//       res[i - 1] = curElem + 1;
//     }
//   }

//   console.log(operation, 'Количество операций');
//   return res.length;
// }

// console.log(distanceToNearestVowel('beautttttgttttyyrfrttthtrgeedwdwiful'), 'длина строки');
// // console.log(distanceToNearestVowel('aaaaa'));
// distanceToNearestVowel('babbb');
// distanceToNearestVowel('shopper');

/////////////////

// function isExactlyThree(n) {
//   let i = 2;
//   let countDivisors = 2;
//   while (i < n - 1) {
//     n % i === 0 ? countDivisors++ : null;
//     if (countDivisors > 3) return false;
//     i++;
//   }
//   return countDivisors === 3;
// }

// console.log(isExactlyThree(4));

// console.log(isExactlyThree(999966000289));
// // 12 has 6 divisors: 1, 2, 3, 4, 6, 12

// isExactlyThree(25);
// // 25 has only 3 divisors: 1, 5, 25

////////////////////

// function balanced(arr) {
//   let arrHalf = arr.length / 2;

//   function calcSumArr(arr) {
//     return arr.reduce((acc, cur) => acc + cur);
//   }

//   let left = arr.slice(0, arrHalf);
//   let right = arr.slice(arrHalf);
//   let leftSum = calcSumArr(left);
//   let rightSum = calcSumArr(right);

//   if (leftSum === rightSum) {
//     return arr;
//   } else {
//     return leftSum > rightSum ? [...left, ...left] : [...right, ...right];
//   }
// }

// console.log(balanced([1, 2, 4, 6, 3, 1]));

// balanced([88, 3, 27, 5, 9, 0, 13, 10]);

// balanced([7, 5, 2, 6, 1, 0, 1, 5, 2, 7, 0, 6]);

/////////////////////

// const a = {};
// const b = { c: 123 };
// const c = { d: 456 };

// a[b] = b.c;
// a[c] = c.d;

// console.log(a[b]);
// console.log(a[c]);

// const a = {};
// const b = { c: 123 };
// const c = { d: 456 };

// a[b] = b.c;
// a[c] = c.d;

// console.log(a[b]);
// console.log(a[c]);

/////////////

// Function.prototype.defer = function (delay) {
//   let that = this;
//   return function (...args) {
//     setTimeout(function () {
//       return that(...args);
//     }, delay);
//   };
// };

// function f(a, b) {
//   console.log(a + b);
// }

// f.defer(5000)(1, 5);

////////////

// new Promise((reject, resolve) => {
//     setTimeout(resolve, 2000);
//     setTimeout(reject, 3000);
// })
//     .then(() => console.log(`1`))
//     .catch(() => {
//         console.log(`2`);
//         return new Promise.reject();
//     })
//     .then(() => console.log(`3`))
//     .catch(() => console.log(`4`));

// let nani = {
//     nina: true
// };

// let rabbit = Object.create(nani);

// console.log(rabbit.nina);

// console.log(Object.getPrototypeOf(rabbit) === nani);

// Object.setPrototypeOf(rabbit, {});
// console.log(Object.getPrototypeOf(rabbit));

// new Promise((reject, resolve) => {
//   setTimeout(resolve, 2000);
//   setTimeout(reject, 3000);
// })
//   .then(() => console.log(`1`))
//   .catch(() => console.log(`2`))
//   .then(() => 3)
//   .finally(() => console.log(`4`))
//   .then(5)
//   .then((res) => console.log(res))
//   .catch(() => console.log(`6`));

// const arr1 = [1, 5, 13, 16, 17, 23, 24, 28, 31, 32, 57];
// const arr2 = [-1, 2, 3, 11, 14, 17, 23, 24, 31, 33, 42];
// let count = 0;

// function compare(a1, a2) {
//   let index2 = 0;
//   let result = [];
//   for (let i = 0; i < a1.length; i++) {
//     for (let j = index2; j < a2.length; j++) {
//       count++;
//       if (a1[i] > a2[j]) {
//         index2 = j;
//         continue;
//       } else if (a1[i] === a2[j] && (a1[i - 1] === a2[j - 1] || a1[i + 1] === a2[j + 1])) {
//         result.push(a1[i]);
//       }
//     }
//   }
//   return result;
// }

// console.log(compare(arr1, arr2));
// console.log(count, 'count');
// console.log(arr1.length, arr2.length);

//// вернуть объект, { ceil: 1, floor: 1, both: 2 }
// const map = [
//   [1, 0, 1, 0, 1, 1, 0, 1, 1],
//   [1, 1, 1, 0, 0, 1, 0, 0, 0],
//   [0, 1, 1, 0, 1, 1, 0, 1, 1],
// ];

// matrix.forEach((i, y) =>
//     i.forEach((j, x) => {
//       iterration++;
//       if (j === 1) {
//         arr.push([y, x]);
//         matrix[(y, x)] = count;
//         matrix[(y - 1, x)] !== undefined && matrix[(y - 1, x)] === 1
//           ? (matrix[(y - 1, x)] = count)
//           : null;
//         matrix[(y + 1, x)] !== undefined && matrix[(y + 1, x)] === 1
//           ? (matrix[(y + 1, x)] = count)
//           : null;
//         matrix[(y, x - 1)] !== undefined && matrix[(y, x - 1)] === 1
//           ? (matrix[(y, x - 1)] = count)
//           : null;
//         matrix[(y, x + 1)] !== undefined && matrix[(y, x + 1)] === 1
//           ? (matrix[(y, x + 1)] = count)
//           : null;
//       }
//     })
//   );
/*
1. Находим все единицы
2. Проверяем соседние и соединяем вместе, попутно вычеркивая единицы из нашего списка.
3. Проверяем потолок или пол, если оба, то кидаем в both.
*/

// function Fn(id) {
//     this.id = id;
//     console.log(this.id);
// }
// // Fn().then(() => console.log(2));

// console.log(new Fn("хуй").__proto__, "fn");
// console.log(Fn.prototype);

// console.log(fn.__proto__);

/////////
// const a = [
//   [11, 22, 3],
//   [434, 55, 6],
//   [7, 8, 899],
// ];

// let maxM = a
//   .reduce((acc, cur) => acc.concat(cur), [])
//   .reduce((acc, cur) => (acc < cur ? cur : acc), -Infinity);
// console.log(maxM);

// function maxA(matrix) {
//   return Math.max(...matrix.reduce((acc, item) => acc.concat(item), []));
// }

// function maxB(matrix) {
//   return matrix.reduce((acc, cur) => {
//     const max = Math.max(...cur);
//     if (acc < max) {
//       return max;
//     } else {
//       return acc;
//     }
//   }, 0);
// }

// function maxC(matrix) {
//   return Math.max(...matrix.map((item) => Math.max(...item)));
// }

// const maxD = (matrix) => Math.max(...matrix.flat());

// console.log(maxD(a));

////////////

// function twoSum(arr, total) {
//   let hashMap = new Map();
//   let result;
//   arr.forEach((item, index) => {
//     const dif = total - item;
//     console.log(hashMap);
//     if (hashMap.get(dif) === undefined) {
//       hashMap.set(item, index);
//     } else {
//       result = [hashMap.get(dif), index];
//     }
//   });
//   return result;
// }

// console.log(twoSum([3, 2, 4], 6));

////////
// const a = [
//   [1, 22, 4],
//   [434, 5, 6],
//   [7, 8, 3],
// ];

// const b = [
//   [7, 434, 1],
//   [8, 5, 22],
//   [3, 6, 4],
// ];

// function rotateA(matrix) {
//   const rotateMatrix = [];
//   for (let row = matrix.length - 1; row >= 0; row--) {
//     for (let cell = 0; cell < matrix[row].length; cell++) {
//       if (!Array.isArray(rotateMatrix[cell])) {
//         rotateMatrix.push([]);
//       }
//       rotateMatrix[cell].push(matrix[row][cell]);
//     }
//   }
//   return rotateMatrix;
// }
// console.log(rotateA(a));
// console.log(a);

// const findDiagonalSum = (matrix) => matrix.reduce((acc, cur, index) => acc + cur[index], 0);

// console.log(findDiagonalSum(a));

///////////
// AAAFDDCSSS -> 3AF2DC3S
// const transformStr = (str) => {
//     let result = "";
//     let currentCharcount = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== str[i + 1]) {
//             result += (currentCharcount ? currentCharcount + 1 : "") + str[i];
//             currentCharcount = 0;
//         } else currentCharcount++;
//     }
//     return result;
// };
// console.log(transformStr("AAAFDDCSSS"));

//////

// const element = [[1], [2, [[3], [4, [5]], 6], 7], [8], 101];
// console.log(String(element).split(",").map(Number));

/////
// let string = 'abcd';

// console.log([...string]);
// console.log(Array.from(string));
// console.log(Array.prototype.map.call(string, (item) => item));
// console.log(
//   [1, 2, 3, 4].map(function (item, index, arr) {
//     console.log(this, 'item');
//     return this[index];
//   }, string)
// );

// Array.prototype.myMap = function (callback, thisArg) {
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     result.push(callback.call(thisArg, this[i], i, this));
//   }
//   return result;
// };

// class Cash {
//   constructor(fnName) {
//     this._fnName = fnName;
//   }
// }

// function sum(a, b) {
//   let result;
//   console.log(sum.prevResult);
//   if (sum.prevResult !== undefined && param[0] === a && sum.param[1] === b) {
//     console.log('first run');
//     result = sum.prevResult;
//   } else {
//     console.log('another run');
//     sum.param = [a, b];
//     result = a + b;
//     sum.prevResult = result;
//   }
//   return result;
// }

// console.log(sum(2, 3));

// var a = {
//   b: 5,
//   getB: function () {
//     return this.b;
//   },
// };

// console.log(a.getB()); // ??
// var fn = a.getB;
// console.log(fn()); // ??

//----------

// var b = {
//     b: 5,
//     getB: () => this.b
// };

// console.log(b.getB()); // ??
// var fn = function () {
//     return b.getB;
// }.call(b);
// console.log(fn()); // ??

// // -------------

// // 6. Исправьте баг в методе getFilteredUsers

// var userService = {
//   currentFilter: 'active',
//   users: [
//     { name: 'Alex', status: 'active' },
//     { name: 'Nick', status: 'deleted' },
//   ],
//   getFilteredUsers: function () {
//     return this.users.filter((user) => {
//       return user.status === this.currentFilter;
//     });
//   },
// };

// console.log(userService.getFilteredUsers());

////////////////////////////////////////////////////////

// Promise.resolve()
//     .then()
//     .finally(() => console.log("P1"));
// setTimeout(() => console.log("S1"));
// Promise.resolve().then(() => setTimeout(() => console.log("S2")));
// setTimeout(console.log("S3"));
// Promise.resolve().then(() => console.log("P2"));
// console.log("final");

//final P2 P1 S1 S3 S2

// function foo() {
//     function a() {
//         return "I'm a function";
//     }
//     a = "I'm a variable";
//     return a();
// }
// foo();

// console.log(null == 0>);

// setTimeout(() => console.log(1), 0);

// const p = Promise.resolve()
//     .then(() => console.log(2))
//     .finally(() => console.log(3));

// console.log(4);

// p.then(() => console.log(5));

// const p2 = new Promise((resolve) => {
//     console.log(6);
//     resolve();
// }).then(() => console.log(7));

//////////

// function mostWordsFound(sentences) {
//     // const numberOfWordsArray = sentences.map((sent) => {
//     //     let numberOfSpace = sent.match(/\s/gm) || [];
//     //     return numberOfSpace.length + 1;
//     // });
//     // console.log(numberOfWordsArray);
//     return Math.max(
//         ...sentences.map((sent) => (sent.match(/\s/gm) || []).length + 1)
//     );
//     // return Math.max(...numberOfWordsArray);
// }

// console.log(
//     mostWordsFound([
//         "alice and b ob love leetcode",
//         "i think so too",
//         "this is gre at thanks very much"
//     ])
// );

// var a = 15;

// function foo() {
//     var a = 25;

//     var result = function () {
//         console.log(this.a);
//     };

//     this.a = 35;

//     return result;
// }

// var bar = foo();
// // console.log(bar);
// bar();

// sum(1)(2)(3);

// const sum = (number) => {
//     this.result = 0;
//     this.result += number;
//     console.log(this.result);
//     return ((a) => sum)(this.result);
// };

// const sum = (...args) => {
//     let lastArg = args[args.length - 1];

//     let res = args.reduce(
//         (acc, cur) => {
//             if (typeof cur !== "number") return acc;
//             return acc + cur;
//         },
//         Array.isArray(lastArg) ? lastArg[0] : 0
//     );

//     console.log(res);
//     return function (...b) {
//         return sum(...b, [res]);
//     };
// };

// sum(1, 3)(2)(3, 7, 1)()(23);
