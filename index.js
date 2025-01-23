// source & target // having a loop logic

// 10 & want add till one

function add(n, result = 1) {
  if (n === 1) {
    return result;
  } else {
    n -= 1;
    result *= n;
    return add(n, result);
  }
}

let result = add(10);
console.log(result);

function sub(a, b) {
  return a - b;
}

function multi(a, b) {
  return a * b;
}

let composite = (fun1, fun2, a, b) => {
  return fun1(fun2(a, b), b);
};

console.log(composite(sub, multi, 10, 20));
console.log(composite(sub, sub, 10, 20));
console.log(composite(multi, multi, 10, 20));
console.log(composite(multi, sub, 10, 20));

function funA(callback) {
  callback();
}
funA(function () {});

const addition = (a) => (b) => a + b;

console.log(addition(10)(20));
