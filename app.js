"use strict";
console.log(document);

// console.log(document)  ///// file html
// console.log(document.querySelector(".btn-again"))
// console.log(document.querySelector("#start-guess"))
// console.log(document.querySelector("header"))

//  document.querySelector("#start-guess").textContent = "hello" ;

//  document.querySelector(".title").textContent = "title"

// console.log(document.querySelector("input").value)

// document.querySelector(".btn-again").addEventListener("click" , function(){
//     console.log("work !! ")
// })

//// 1 ===> 20
//// no number ; correct number ; wrong number (akther wela akal)

///// initial values :
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);

const displayMessage = function (message) {
  document.querySelector("#start-guess").textContent = message;
};

document.querySelector(".btn-check").addEventListener("click", function () {
  const guess = Number(document.querySelector("input").value);
  if (!guess) {
    displayMessage("🚫 No Number !!!");
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number !!!");
    score++; ///// increment ...
    document.querySelector(".score").textContent = score; //// update ui (user interface)
    document.querySelector("body").style.backgroundColor = "greenyellow";
    document.querySelector(".logo").textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highScore").textContent = highScore;
    }
    document.querySelector("input").value = "";
    secretNumber = Math.trunc(Math.random() * 20 + 1);
  } else if (score > 0) {
    if (guess > secretNumber) {
      displayMessage("📈 too high !!");
      document.querySelector("body").style.backgroundColor = "#222";
      document.querySelector(".logo").textContent = "?";

      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector("input").value = "";
    } else if (guess < secretNumber) {
      displayMessage("📉 too low !! ");
      document.querySelector("body").style.backgroundColor = "#222";
      document.querySelector(".logo").textContent = "?";

      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector("input").value = "";
    }
  } else {
    displayMessage("💥 you loose !! ");
  }
});

//// again

document.querySelector(".btn-again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score; //// update (ui)
  document.querySelector(".logo").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector("input").value = "";
  document.querySelector(".highScore").textContent = "0";
  displayMessage("Start guessing ...");
});
