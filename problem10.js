function concatArrays(...arrays) {
   return [].concat(...arrays);
 }
 
 let result = concatArrays([1, 2], [3, 4], [5, 6]);
 console.log(result);