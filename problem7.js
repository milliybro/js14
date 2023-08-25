function checkSetSubset(set1, set2) {
   for (let value of set1) {
     if (!set2.has(value)) {
       return false;
     }
   }
   return true;
 }
 
 let set1 = new Set([1, 2]);
 let set2 = new Set([1, 2, 3, 4]);
 console.log(checkSetSubset(set1, set2));