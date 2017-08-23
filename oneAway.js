function oneAway (str1, str2) {

  if (str1 === str2) {
    return true;
  }

  if ((str1.length - str2.length > 1) || (str2.length - str1.length > 1)) {
    return false;
  }

  if (str1.length === str2.length) {
    let flag = false;
    for (let i = 0; i < str1.length; i++) {
      const letter1 = str1[i];
      const letter2 = str2[i];
      if (letter1 !== letter2) {
        if (flag === true) {
          return false
        }
        else {
          flag = true;
        }
      }
    }
    return true;
  }

  else {
    let sortedArr = [];
    if (str1.length > str2.length) {
      sortedArr = [str2, str1];
    }
    else {
      sortedArr = [str1, str2];
    }
    let flag = false;
    let shorterStr = sortedArr[0].split('')
    let longerStr = sortedArr[1].split('')

    for (let i = 0; i < longerStr.length; i++) {
      let flag = false;
      const letter1 = longerStr[i];
      const letter2 = shorterStr[i];
      if (flag === true) {
        return false;
      }
      if (letter1 !== letter2) {
        shorterStr = shorterStr.splice(i, 0, letter1)
        flag = true;
      }
    }
    return true;
  }
}

console.log(oneAway('pale', 'ple'))
console.log(oneAway('pales', 'pale'))
console.log(oneAway('pale', 'bale'))
console.log(oneAway('pale', 'bake'))
