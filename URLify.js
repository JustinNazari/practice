function URLify(str, trueLength) {
  const arr = str.split('');
  let result = [];
  for (let i = 0; i < trueLength; i++) {
    if (arr[i] === ' ') {
      result.push('%20')
    }
    else {
      result.push(arr[i])
    }
  }
  return result.join('');
}

console.log(URLify('Mr John Smith     ', 13));
