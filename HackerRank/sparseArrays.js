// strings = ['ab', 'ac', 'ab']
// queries = ['ab', 'ac']

// put the strings array into a map
// O(n)
let sparseArrays = function (strings, queries) {
  let map = {};
  let results = [];

  for (let i = 0; i < strings.length; i++) {
    let elem = strings[i];
    if (map[elem]) {
      map = {
        ...map,
        [elem]: map[elem] + 1,
      };
    } else {
      map = {
        ...map,
        [elem]: 1,
      };
    }
  }

  for (let i = 0; i < queries.length; i++) {
    let elem = queries[i];
    if (map[elem]) {
      results.push(map[elem]);
    } else {
      results.push(0);
    }
  }
  return results;
};
console.log(sparseArrays(["ab", "abc", "ab", "adc"], ["ab", "a"]));
