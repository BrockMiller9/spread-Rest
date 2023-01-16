// Arrow Function Exercise

function double(arr) {
  return arr.map(function (val) {
    return val * 2;
  });
}

const double = (arr) => arr.map((val) => val * 2);

function squareAndFindEvens(numbers) {
  var squares = numbers.map(function (num) {
    return num ** 2;
  });
  var evens = squares.filter(function (square) {
    return square % 2 === 0;
  });
  return evens;
}

const squareAndFindEvens = (numbers) =>
  numbers.map((num) => num ** 2).filter((square) => square % 2 === 0);

// const Pi = 3.14;

// 1. Var you can both reassign and redclare where as let you can only reassign. Var is also function scoped compared to let which is block scoped
// 2. Same differences as let except with const you can neither reassign or redeclare.
// 3. let you can reassign, const you cannot reassign.
// hoisting is when javaScript reads the var declartion before anything else.

// arrow functions------------------

// const add = function(x,y){
//     return x +y;
// }

// const add = (x, y) => {
//   return x + y;
// };

// [2, 3, 6, 78, 99, 104, 23].reduce((max, nextValue) => {
//   return Math.max(max, nextValue);
// });

// [1, 2, 3, 4, 5].forEach((n) => {
//   console.log(n * 10);
// });

// const greet = () => {
//   console.log("hello");
// };

// [1, 2, 3, 4, 5, 6].filter((num) => num % 2 === 0);

// const double = (n) => n * 2;

// [1, 2, 3, 4, 5, 6, 7, 8].map((num) => {
//   if (num % 2 === 0) {
//     return "even";
//   }
//   return "odd";
// });

// [1, 2, 3, 4, 5, 6, 7, 8].map((num) => (num % 2 === 0 ? "even" : "odd"));

// const dailyRainTotals = [
//   [1.2, 0.35, 2.2],
//   [1.7, 0.6, 0.1],
//   [2.5, 0.9, 1.5],
// ];

// dailyRainTotals.map((hourlyRainTotals) => {
//   return hourlyRainTotals.reduce((accumulator, inchesOfRain) => {
//     return accumulator + inchesOfRain;
//   });
// });

// // gotcha moments
// // const makeMath = (num) => {
// //   return {
// //     square: num * num,
// //     double: num * 2,
// //   };
// // };

// const makeMath = (num) => ({
//   square: num * num,
//   double: num * 2,
// });
