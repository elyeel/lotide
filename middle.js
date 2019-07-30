// const assertArraysEqual = function(arrOne, arrTwo) {
//   let resultOne = '', resultTwo = '';
//   if (arrOne.length === arrTwo.length) {
//     for (let i = 0; i < arrOne.length; i++) {
//       resultOne += arrOne[i];
//       resultTwo += arrTwo[i];
//     }
//   } else {
//     return (console.log('❌❌❌ ' + arrOne + ' !== ' + arrTwo));
    
//   }
//   if (resultOne === resultTwo) {
//     console.log('✔️ ✔️ ✔️  ' + arrOne + ' === ' + arrTwo);
//   } else {
//     console.log('❌❌❌ ' + arrOne + ' !== ' + arrTwo);
//   }
// };

const assertArraysEqual = require('./assertArraysEqual');

const middle = function(arr) {
  let arrResult = [];
  if (arr.length >= 2) {//only if array length > 2
    if (arr.length % 2 === 0) {//for even array length
      arrResult.push(arr[((arr.length) / 2) - 1]);
      arrResult.push(arr[(arr.length) / 2]);
    } else {//for odd array length
      arrResult.push(arr[Math.floor(0.5 * arr.length)]);
    }
  } return arrResult;
};
module.exports = middle;

