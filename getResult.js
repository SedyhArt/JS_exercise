/** @format */

///////
/**
  Есть массив операций.
  Необходимо операции отсортировать по дате и сгруппировать их по году, а в качестве 
  значений представить массивы c датами в формате MM-DD.
  Пример результата:
  result = {
    "2017": [
      "07-31",
      "08-22"
    ],
    "2018": [
      "01-01"
      "02-22"
    ]
  }
*/

// const operations = [
//     { date: "2018-07-31", amount: "5422" },
//     { date: "2017-06-30", amount: "5220" },
//     { date: "2017-05-31", amount: "5365" },
//     { date: "2017-08-31", amount: "5451" },
//     { date: "2017-09-30", amount: "5303" },
//     { date: "2018-03-31", amount: "5654" },
//     { date: "2017-10-31", amount: "5509" },
//     { date: "2017-12-31", amount: "5567" },
//     { date: "2018-01-31", amount: "5597" },
//     { date: "2017-11-30", amount: "5359" },
//     { date: "2018-02-28", amount: "5082" },
//     { date: "2018-04-14", amount: "2567" },
//     { date: "2019-04-14", amount: "2567" }
// ];

// function sortOperations(operations) {
//     const result = {};
//     for (let i = 0; i < operations.length; i++) {
//         let [year, MM, DD] = operations[i].date.split("-");
//         let date = [MM, DD].join("-");

//         if (!result[year]) {
//             result[year] = [date];
//         } else {
//             result[year].push(date);
//         }
//     }
//     // console.log(result);
//     Object.values(result).map((year) => year.sort());
//     console.log(result);
//     return result;
// }

// sortOperations(operations);

///////////
// var value = 2;

// function showValue() {
//     console.log(`showValue ${value}`);
// }

// function wrapper() {
//     var value = 3;
//     console.log(`wrapper ${value}`);
//     showValue();
// }

// wrapper();

// //////////
// var foo = 1;

// (function f() {

//     if (foo) {
//         let foo = 2
//     }

//     console.log(foo)
// })();

// /////////

// console.log(this);

// function foo() {
//      console.log(this);
// }

// function foo2() {
//     'use strict'
//      console.log(this);
// };

// foo();

// foo2();

// //////////

// const square = {
//     side: 5,
//     area() {
//         return this.side * this.side;
//     },
//     perimeter: () => 4 * this.side
// };

// console.log(square.area()); //25
// console.log(square.perimeter()) //nan;

// //////////

// function foo() {
//      console.log(this);
// }

// function doFo(fn) {
//      fn.();
// }

// var a = {foo: foo};

// doFo(a.foo.bind(a));

// //////////
// //////////
// //////////

// class Customer {
//     constructor(name) {
//         this.name = name;
//     }
// }

// Customer.prototype.pay = function () {
//     console.log(`Чек от месье ${this.name}`);
// };

// const Ivan = new Customer("Ivan");

// Ivan.pay(); //Ivan

// delete Customer.prototype.pay;

// Ivan.pay(); //

// /////////
// setTimeout(() => console.log(2), 0);

// console.log(1);

// new Promise(res => {
//     res();
// }).then(() => console.log(4));

// console.log(3);

// // 1 3 4 2

// //////////
// Promise.resolve(1)
//      .then(x => x + 1)
//      .then(x => { throw x })
//      .then(x => console.log(x))
//      .catch(err => console.log(err)) // 2
//      .then(() => Promise.resolve(1))
//      .catch(err => console.log(err))
//      .then(x => console.log(x));

// //

// const game = new Set("Free fire");
// console.log([...game]);

// 000010000101110011000010101000001

// const countZeros = (entry) => {
//     let [
//         currentCountZero,
//         currentCountOne,
//         countZeroBeforeOne,
//         biggestCountZero
//     ] = [0, 0, 0, 0];

//     for (let i = 0; i < entry.length; i++) {
//         const curDigit = entry[i];
//         if (curDigit === "0") {
//             currentCountZero++;
//         } else if (curDigit === "1") {
//             countZeroBeforeOne = currentCountZero;
//             if (currentCountOne > 0) {
//                 biggestCountZero =
//                     currentCountZero + countZeroBeforeOne > biggestCountZero
//                         ? currentCountZero + countZeroBeforeOne
//                         : biggestCountZero;

//                 currentCountZero = 0;
//                 currentCountOne = 0;
//                 countZeroBeforeOne = 0;
//             } else {
//                 currentCountOne++;
//             }
//         }
//     }
//     console.log(currentCountZero, biggestCountZero);
//     return currentCountZero > biggestCountZero
//         ? currentCountZero
//         : biggestCountZero;
// };

// console.log(countZeros("1010000"));

/*
  Какой-то из бэкендов присылает нам данные в JSON в snake_case, мы на своем проекте
  везде используем camelCase. Нужна функция, которая на вход будет принимать данные,
  полученные через JSON.parse, там не может быть функций, циклических зависимостей и т.д.,
  все объекты имеют ключи в snake_case. Функция должна вернуть новый анаглогичный объект
  со всей вложенной структурой, в котором ключи объектов заменены на camelCase.
*/
// {foo_bar: {bar_baz: 2}, a: [{foo_bar: 4}, {}, 1, 2, 3]} -> {fooBar: {barBaz: 2}, a: [{fooBar: 4}, {}, 1, 2, 3]}
//

// const changeToCamelCase = (response) => {
//     let result;

//     if (Array.isArray(response)) {
//         result = response.map((item) => changeToCamelCase(item));
//     } else if (typeof response === "object") {
//         let obj = {};
//         let keys = Object.keys(response);
//         keys.forEach((key) => {
//             let newKey = key
//                 .split("_")
//                 .slice(1)
//                 .reduce((acc, cur) => {
//                     return acc + cur[0].toUpperCase() + cur.slice(1);
//                 }, key.split("_")[0]);
//             obj[newKey] = changeToCamelCase(response[key]);
//         });
//         result = obj;
//     } else {
//         return response;
//     }

//     // const keys = Object.keys(obj);

//     // for (let i = 0; i < keys.length; i++) {
//     //     const key = keys[i];

//     // }

//     return result;
// };

// console.log(
//     changeToCamelCase({
//         foo_bar: { bar_baz: 2 },
//         a: [{ foo_bar: 4 }, {}, 1, 2, 3]
//     })
// );

// const response = [
//     "index.page.xml",
//     "person/person.page.xml",
//     "person/person.query.xml",
//     "firstFolder/secondFolder/thirdFolder/index.js"
// ];

// const buildTree = (data) => {
//   const tree = {};
//   data.forEach(el => {
//     el.split('/').forEach(part => )
//   });
// }
