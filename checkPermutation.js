function checkPermutation(s1, s2) {
  if (s1.length !== s2.length) {
    return false
  }
  const s2_arr = s2.split('');
    for (let i = 0; i < s1.length; i++) {
      for (j = 0; j < s2.length; j++) {
        if (s1[i] === s2_arr[j]) {
          s2_arr.splice(j, 1)
        }
      }
  }
  if (s2_arr.length === 0) {
    return true;
  }
  return false;
}

s1 = 'hello'
s2 = 'goodbye'
console.log(checkPermutation(s1, s2));

s3 = 'olleh'
console.log(checkPermutation(s1, s3));
