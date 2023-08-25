function getMapIntersection(map1, map2) {
   const intersection = new Map();
   for (let [key, value] of map1) {
     if (map2.has(key)) {
       intersection.set(key, map2.get(key));
     }
   }
   return intersection;
 }
 
 let map1 = new Map([['apple', 1], ['banana', 2], ['orange', 3]]);
 let map2 = new Map([['apple', 4], ['orange', 5], ['grape', 6]]);
 console.log(getMapIntersection(map1, map2));