let h1Id = document.querySelector("#h1");
let span = document.querySelector("#h1 > span");
let btn = document.querySelector("#btn");

// h1Id.innerHTML = "Gigame";
// h1Id.style.color = "red";
// h1Id.classList.toggle("text-success");

span.style.color = "white";
span.style.backgroundColor = "black";

// span.addEventListener(
//   "click",
//   function () {
//     alert("Span clicked");
//   },
//   true
// );

// h1Id.addEventListener(
//   "click",
//   function () {
//     alert("H1 clicked");
//   },
//   true
// );

span.addEventListener("click", function (event) {
  event.stopPropagation();
  alert("Span clicked");
});

h1Id.addEventListener("click", function () {
  alert("H1 clicked");
});

btn.addEventListener("click", function (event) {
  event.preventDefault();
  //alert("Button clicked");
  let isConfirm = confirm("Are you sure remove ?");
  if (isConfirm === true) {
    alert("yes");
  } else {
    alert("No");
    return false;
  }

  console.log("send data to server");
});
