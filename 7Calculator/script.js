let screenDigit = document.querySelector("#screen");
let number1 = "";

function printScrn(params) {
  params = params.toString();
  number1 += params;
  console.log(typeof number1);
  screenDigit.innerHTML = number1;
}

function CEclear() {
  number1 = "";
  screenDigit.innerHTML = 0;
}

function findResult() {
  console.log(eval(screenDigit.innerHTML));
  screenDigit.innerHTML = eval(screenDigit.innerHTML);
}
