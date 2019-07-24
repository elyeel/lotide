const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✔️ ✔️ ✔️  Assertion Passed: ' + actual + ' === ' + expected);
  } else {
    console.log('❌❌❌ Assertion Failed: ' + actual + ' !== ' + expected);
  }
};

let countLetters = function(strArray){
  const results = {};
  for (let chr of strArray) {
    console.log(chr);
    if (results[chr] !== ' ') {
      if (results[chr]) {
        results[chr] += 1;
      } else {
        results[chr] = 1;
      }
    }
    
  } return results;
};
console.log(countLetters('lighthouse in the house'));