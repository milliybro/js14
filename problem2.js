function mapSum(obj) {
  let sum = 0;
  for (let value of obj.values()) {
    sum += value;
  }
  return sum;
}

const obj = new Map([
  ["a", 2],
  ["b", 5],
  ["c", 3],
  ["d", 2],
]);
console.log(mapSum(obj));
