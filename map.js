const words = ["ground", "control", "to", "major", "tom"];

const map = function(arr, callBack) {
  //console.log('array: ', arr);
  //console.log('callback: ', callBack);
  
  const results = [];
  for (let item of arr) {
    results.push(callBack(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

/*
Need to update assertArrayEqual before I can test this properly
*/