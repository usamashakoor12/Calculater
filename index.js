function display(num) {
  document.getElementById("output").value += num;
}

function solve() {
  let result = document.getElementById("output").value;
  let result2 = eval(result);
  document.getElementById("output").value = result2;
}

function cls() {
  document.getElementById("output").value = "";
}

function dlt() {
  document.getElementById("output").value = document
    .getElementById("output")
    .value.slice(0, -1);
}

// function dlt() {
//   document.cookie = document.getElementById("output").value;
//   console.log(document.cookie);
// }

// function point(val) {
//   document.getElementById("output").value = val;
//   if (!val.includes(".")) {
//     display.value += ".";
//   }
// }

// document.onkeypress = (e) => {
//   document.getElementById("demo").innerHTML = e.key;
// };
