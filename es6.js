function* createId(max) {
  let idCount = 0;
  while (max > idCount) {
    let id = Math.floor(Math.random() * 10000);
    idCount++;
    yield id;
  }
}

let ids = createId(5);
console.log(ids.next());
console.log(ids.next());
console.log(ids.next());
console.log(ids.next());
console.log(ids.next());
console.log(ids.next());

let mySyb = Symbol("Deepak");
let mySyb1 = Symbol("Deepak");

console.log(mySyb === mySyb1);
let obj = {
  [mySyb]: "Hello",
};

console.log(Object.getOwnPropertySymbols(obj));

// array
let array = [1, 2, 3, 4, 5, 6, 7];
let iterator = array[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
