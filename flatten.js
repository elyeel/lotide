const assertArraysEqual = function(arrOne, arrTwo) {
  let resultOne = '', resultTwo = '';
  if (arrOne.length === arrTwo.length) {
    for (let i = 0; i < arrOne.length; i++) {
      resultOne += arrOne[i];
      resultTwo += arrTwo[i];
    }
  } else {
    return (console.log('❌❌❌ ' + arrOne + ' !== ' + arrTwo));
    
  }
  if (resultOne === resultTwo) {
    console.log('✔️ ✔️ ✔️  ' + arrOne + ' === ' + arrTwo);
  } else {
    console.log('❌❌❌ ' + arrOne + ' !== ' + arrTwo);
  }
};

const flatten = function(arr) {
  let result = [];
  for (let index in arr) {
    if (Array.isArray(arr[index])) {
      for (let jndex in arr[index]) {
        result.push(arr[index][jndex]);
      }
    } else {
      result.push(arr[index]);
    }
  } return result;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
