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

const without = function(arr,excArr) {
  let resultArr = [];
  for (let index in arr) {
    if (arr[index] !== excArr[0]) {
      resultArr.push(arr[index]);
    }
  } return resultArr;
};

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);