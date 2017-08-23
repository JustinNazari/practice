function rotateMatrix(matrix) {
  const newArr = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (newArr[j] === undefined) {
        newArr[j] = [];
      }
      newArr[j].unshift(matrix[i][j])
    }
  }
  return newArr;
}

const m1 = [
['red', 'blue', 'green', 'white'],
['red', 'blue', 'green', 'white'],
['red', 'blue', 'green', 'white'],
['red', 'blue', 'green', 'white']
]

const m2 = rotateMatrix(m1);
const m3 = rotateMatrix(m2);
const m4 = rotateMatrix(m3);
const m5 = rotateMatrix(m4);

console.log(m1);
console.log(m2);
console.log(m3);
console.log(m4);
console.log(m5);
