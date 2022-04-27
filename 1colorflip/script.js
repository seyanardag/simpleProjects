let bgcolor = "red";
let bodyClass = document.querySelector(".bodyClass");
let parag = document.getElementsByTagName("p");
let stopButton =document.getElementById("stopButton")
stopButton.style.display="none"

function btnClick() {
  let rnd1 = Math.floor(Math.random() * 255);
  let rnd2 = Math.floor(Math.random() * 255);
  let rnd3 = Math.floor(Math.random() * 255);
  bgcolor = `rgb(${rnd1}, ${rnd2}, ${rnd3})`;
  console.log(bgcolor);
  bodyClass.style.backgroundColor = bgcolor;
  parag[0].innerText = "Background Color:" + bgcolor;
}

var discoInterval=null
function btnDiscoClick() {
  stopButton.style.display="initial"
  discoInterval = setInterval(btnClick, 150);
  
}

function btnDiscoStopClick() {
  clearInterval(discoInterval);
}
