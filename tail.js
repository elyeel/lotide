// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log('✔️ ✔️ ✔️  Assertion Passed: ' + actual + ' === ' + expected);
//   } else {
//     console.log('❌❌❌ Assertion Failed: ' + actual + ' !== ' + expected);
//   }
// };
const assertEqual = require('./assertEqual');

const tail = function(arr) {
  let arrReturn = [];
  if (arr.length <= 1) {
    return arrReturn;
  } else {
    arrReturn = arr.slice(1);
  } return arrReturn;
};
module.exports = tail;

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

