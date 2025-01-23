let element = document.querySelector("#input");

// debouncing
function debouncing(limit = 0, callback = function () {}) {
  let timeOut = null;
  return function (event) {
    if (timeOut !== null) clearTimeout(timeOut);

    timeOut = setTimeout(function () {
      callback(event);
    }, limit);
  };
}

element.addEventListener(
  "keyup",
  debouncing(1000, function (event) {
    console.log(element.value);
  })
);

// Throttling
function throttling(limit = 0, callback = function () {}) {
  let timeOut = true;
  return function (event) {
    if (timeOut === true) {
      timeOut = false;
      setTimeout(function () {
        callback(event);
        timeOut = true;
      }, limit);
    }
  };
}

window.addEventListener(
  "scroll",
  throttling(1000, function (event) {
    console.log("scroll");
  })
);

// rest api
async function getUser(URL, option) {
  try {
    let response = await fetch(URL, option);
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }finally{
    
  }
}

getUser("https://jsonplaceholder.typicode.com/users", {
  method: "GET",
});

function div(a, b) {
  try {
    if (isNaN(b)) {
      throw new RangeError("Invalid number is passed");
    }
    if (b === 0) {
      //throw new Error("Cant divide by zero");
      // throw new ReferenceError('2nd must not be zero');
      throw new TypeError("2nd para is zero");
      // throw new SyntaxError()
    }
  } catch (error) {
    console.log(error);
  }
}

async function fun(a) {
  if (a === true) {
    return Promise.resolve("a was valid");
  } else {
    return Promise.reject("a was invalid");
  }
}

fun(true)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

//  
window.onerror = function(message,source, lineno, colNo,error ){
  console.error(message)
}

window.addEventListener('unhandledrejection', function(event){
  console.log(event.reason);
})