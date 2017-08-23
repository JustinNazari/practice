function palindromePermutation(str) {
  let lookup = {};
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (letter !== ' ') {
      if (lookup[letter] === undefined) {
        lookup[letter] = 1
      }
      else {
        lookup[letter] = lookup[letter] + 1;
      }
    }
  }
  const keys = Object.keys(lookup);
  let flag = false;
  for (j = 0; j < keys.length; j++) {
    const letter = keys[j]
    const remainder = lookup[letter] % 2;
    if (remainder === 1) {
      if (flag === true) {
        return false;
      }
      flag = true;
    }
  }
  return true;
}

const tacocat = 'taco cat';
const returnFalse = 'notapalindrome'

console.log(palindromePermutation(tacocat))
console.log(palindromePermutation(returnFalse))
