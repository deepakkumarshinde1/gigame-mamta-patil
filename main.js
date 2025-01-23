String.prototype.getMore = function () {
  return {
    text: this.toString(),
    type: typeof this.toString(),
    uc: this.toString().toUpperCase(),
    array: this.toString().split(""),
  };
};

let text = "deepak";
console.log(text.getMore());

// constructor function
function MyClass(name) {
  this.name = name;
}

MyClass.prototype.printName = function () {
  return this.name;
};

function MyClass2() {
  this.name = "hello";
}

MyClass2.prototype = Object.create(MyClass.prototype);

let myClass2 = new MyClass2("deepakkumar");
console.log(myClass2.printName());

console.log(myClass2);

class Human {
  text = "deepak";
  printDataTwo() {
    console.log(this.text);
  }
}

class Human2 extends Human {
  constructor() {
    super();
  }
}

let human2 = new Human2();

console.log(human2);

console.log(Object.getPrototypeOf(human2));

console.clear();

// setTimeout setInterval Promises Async Await Fetch DOM
let id1 = setTimeout(function () {
  clearTimeout(id1);
}, 1000);

let id = setInterval(function () {
  clearInterval(id);
}, 1000);

clearInterval(id);

// Promises
// Async
// Error handling

// Miro Task

// function Abc(){
//   return new Promise(function(resolve,reject){
//     resolve('message');
//   })
// }

async function Abc() {
  // return Promise.resolve("message");
  return "message";
  // return Promise.reject('message')
}

Abc()
  .then(() => {})
  .catch(() => {});

// They are depend on each other
async function Pall() {
  try {
    let resolveP1 = await p1();
    await p2();
    await p3();
    await p4();
  } catch (error) {}
}

// All at a time not dependent on each other
// if all are resolve the only we result
// we get array
async function Pall() {
  try {
    let resolveP1 = await Promise.all([p1, p2, p3, p4]);
  } catch (error) {}
}

// only one value of winner
async function Pall() {
  try {
    let resolve = await Promise.race([p1, p2, p3, p4]);
  } catch (error) {}
}

// [rs,rj]
async function Pall() {
  try {
    let resolve = await Promise.allSettled([p1, p2, p3, p4]);
    throw new Error();
  } catch (error) {}
}
