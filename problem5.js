function setUnion(set1, set2) {
   const union = new Set([...set1, ...set2]);
   return union;
 }
 
 let set1 = new Set([1, 2, 3]);
 let set2 = new Set([2, 3, 4]);
 console.log(setUnion(set1, set2));