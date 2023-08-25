let deleteMany = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
  ["d", 4],
]);
deleteMany.delete("a");
deleteMany.delete("c");

console.log(deleteMany);