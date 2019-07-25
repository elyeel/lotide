const letterPositions = function(sentence) {
  const results = {};
  let i = 0;
  for (let chr in sentence) {// logic to update results here
    if (chr !== ' ') {
      if (results[chr]) {
        results[chr].push(i);
      } else {
        results[chr].push(i);
      }
    } i++;
  } 
  return results;
};
console.log(letterPositions('hello'));
