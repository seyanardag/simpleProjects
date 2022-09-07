console.log("adsad");
let pcSelection = 0;
let playerSelection = 0;
let result = 0;
let pcScore =0;
let playerScore =0;

let pcScoreHTML = document.querySelector(".pcScore");
let playerScoreHTML = document.querySelector(".playerScore");
let pcHand = document.querySelector(".pcHand");
let playerHand = document.querySelector(".playerHand");
let resultHTML = document.querySelector(".result");
let scoreboard = document.querySelector(".scoreboard");

playerScore.innerHTML = 16;

function pcSelectFunc(min, max) {
  pcSelection = Math.floor(Math.random() * (max - min) + min);

  switch (pcSelection) {
    case 1:
      pcHand.src = "./img/rock.png";
      pcSelection = "rock"; //pc selection assignment
      break;
    case 2:
      pcHand.src = "./img/paper.png";
      pcSelection = "paper"; //pc selection assignment
      break;
    case 3:
      pcHand.src = "./img/scissors.png";
      pcSelection = "scissors"; //pc selection assignment
      break;

    default:
      break;
  }
}



function playerSelected(param) {
  // playerHand.style.transform = 2,5
  scoreboard.style.visibility = "visible"
  scoreboard.classList.add("scoreboard2")
  pcSelectFunc(1, 4);
  pcHand.classList.add("rotate180")
  playerSelection = param; //player selection assignment

  playerHand.src = `./img/${param}.png`;

  console.log("pcSelection:", pcSelection, "playerSelection:", playerSelection);

  switch (true) {
    case pcSelection == playerSelection:
      resultHTML.innerHTML = "Draw, Pick Again!";
      break;
          
      
    case pcSelection == "rock" && playerSelection == "paper":
      resultHTML.innerHTML = "Player Won!";
      playerScore++
      playerScoreHTML.innerHTML= playerScore
      console.log(pcScore,playerScore)
      break;
    case pcSelection == "rock" && playerSelection == "scissors":
      resultHTML.innerHTML = "PC WON";
      pcScore++
      pcScoreHTML.innerHTML= pcScore
      console.log(pcScore,playerScore)
      break;
    case pcSelection == "paper" && playerSelection == "rock":
      resultHTML.innerHTML = "PC WON";
      pcScore++
      pcScoreHTML.innerHTML= pcScore
      console.log(pcScore,playerScore)
      break;
    case pcSelection == "paper" && playerSelection == "scissors":
      resultHTML.innerHTML = "Player WON";
      playerScore++
      playerScoreHTML.innerHTML= playerScore
      console.log(pcScore,playerScore)
      break;
    case pcSelection == "scissors" && playerSelection == "rock":
      resultHTML.innerHTML = "Player WON";
      playerScore++
      playerScoreHTML.innerHTML= playerScore
      console.log(pcScore,playerScore)
      break;
    case pcSelection == "scissors" && playerSelection == "paper":
      resultHTML.innerHTML = "PC WON";
      pcScore++
      pcScoreHTML.innerHTML= pcScore
      console.log(pcScore,playerScore)
      break;
      
      default:
        resultHTML.innerHTML = "Something Went WRONG :( !!!";

      break;
  }
}
