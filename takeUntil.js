const takeUntil = function(array, callback) {
  let result = []; // ...
  let flag = false;
  array.forEach(function(arr) {
    if (callback(arr)) {
      flag = true; //console.log(result);
    } else if (!flag) {
      result.push(arr);
    }
  });
  return result;
//console.log(result);
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);