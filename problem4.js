class CustomWeakMap extends WeakMap {
   get size() {
     let count = 0;
     for (let el of obj) {
       count=+el;
     }
     return count;
   }
 }
 
 let obj = new CustomWeakMap([
   [{id: 1}, 'John'],
   [{id: 2}, 'Jane'],
   [{id: 3}, 'Alice']
 ]);
 
 console.log(obj.size);