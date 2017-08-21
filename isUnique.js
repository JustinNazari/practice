function isUniqueBasic(str) {
  const lookup = {};
  for (let x = 0; x < str.length; x++) {
      const letter = str[x]
      if (lookup[letter] !== undefined) {
        return false;
      }
      else {
        lookup[letter] = true;
      }
  };
  return true;
}

console.log(isUniqueBasic('hello'));
console.log(isUniqueBasic('abc'));

function isUniqueAdvanced(str) {
  for (let x = 0; x < str.length; x++) {
    const letter = str[x];
    for (let y = x + 1; y < str.length; y++) {
      const nextLetter = str[y];
      if (letter === nextLetter) {
        return false;
      }
    }
  }
  return true;
}

console.log(isUniqueBasic('hello'));
console.log(isUniqueBasic('abc'));
