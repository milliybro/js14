function mergeArr(arr1, arr2) {
   return [...arr1, ...arr2];
 }
 
 let arr1 = [1, 5, 8];
 let arr2 = [7, 9, 10];
 let mergedArray = mergeArr(arr1, arr2);
 console.log(mergedArray);