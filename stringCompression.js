function stringCompression(str) {
  let prevLetter;
  let count = 0;
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (letter === prevLetter) {
      count = count + 1;
      prevLetter = letter;
    }
    else if (letter !== prevLetter) {
      if (prevLetter !== undefined) {
      newStr = newStr + `${prevLetter}` + `${count}`;
      }
      count = 1;
      prevLetter = letter;
    }

    if (i === str.length - 1) {
      newStr = newStr + `${prevLetter}` + `${count}`
    }
  }

  if (str.length < newStr.length) {
    return str;
  }
  else {
    return newStr;
  }
}

console.log(stringCompression('aabcccccaaa'));
