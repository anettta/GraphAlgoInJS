let removeDuplicates = function (array) {
  let uniques = [];
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (!uniques.includes(element)) {
      uniques.push(element);
    }
  }

  return uniques;
};

console.log(removeDuplicates(["x", "y", "y", "x", "z"]));
