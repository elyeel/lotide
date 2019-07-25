const letterPositions = function(sentence) {
  const results = {};
  let i = 0;
  for (let chr of sentence) {// logic to update results here
    if (chr !== ' ') {
      if (results[chr]) {
        results[chr].push(i);
      } else {
        results[chr] = [i];
      }
    }
    i++;
  }
  return results;
};
console.log(letterPositions('hello'));
// pls modify manually index 'i' to utilize sentence.entries()