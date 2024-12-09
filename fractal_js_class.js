


//write program to implement LRu cache

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
    }
    this.cache.set(key, value);
  }
}


let cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
//console.log(cache.get(2));       // returns -1 (not found)
cache.put(4, "adi");    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4


// console.log("start");
// setTimeout(() => {
//     console.log("0 sec timeout");
//   }, 0);
// let p = new Promise((resolve, reject) => {
//     console.log("Hello 1");
//     resolve("promise resolved");
// })
 

//   p.then((res) => {
//     console.log(res);
//   });
//   console.log("end");


//function returning promise
    function getPromise(str) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(str);
            }, 1000);
        });
    }


async function asyncCall() {
    console.log('calling');
    try{
        const result = await getPromise("hello error");
        console.log(result);
    }catch(err){
        console.log(err);
    }
   // console.log(result);
}

asyncCall();