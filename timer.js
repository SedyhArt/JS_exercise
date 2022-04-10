// function timer(number) {
//   let interval = setInterval(() => {
//     if (number === 0) {
//       clearInterval(interval);
//       return;
//     }
//     console.log(number);
//     number--;
//   }, 1000);
// }

// function timer2(num) {
//   console.log(num);
//   if (num > 0) {
//     setTimeout(() => {
//       timer2(--num);
//     }, 1000);
//   }
// }

// timer(6);

let closure = (a = 0) => {
  return () => a++;
};

let one = closure();
console.log(one());
console.log(one());
console.log(one());
console.log(one());
