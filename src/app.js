/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { left } from "@popperjs/core";

window.onload = function() {
  //write your code here
  let suits = ["♦", "♥", "♠", "♣"];
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let card = document.getElementById("card");
  let suitTop = document.getElementById("suit-top");
  let numberCard = document.getElementById("number");
  let suitBot = document.getElementById("suit-bot");
  let btnShuffle = document.getElementById("button-shuffle");

  btnShuffle.addEventListener("click", onload);

  setTimeout(onload, 10000);

  suitTop.style.textAlign = "left";
  suitTop.style.fontSize = "90px";

  suitBot.style.textAlign = "left";
  suitBot.style.rotate = "180deg";
  suitBot.style.fontSize = "90px";

  numberCard.style.fontSize = "126px";

  let randomSuit = Math.floor(Math.random() * 4);
  let randomNumber = Math.floor(Math.random() * 13);

  numberCard.innerHTML = numbers[randomNumber];

  suitTop.innerHTML = suits[randomSuit];
  suitBot.innerHTML = suits[randomSuit];
  if (suits[randomSuit] == "♥" || suits[randomSuit] == "♦") {
    suitTop.style.color = "red";
    suitBot.style.color = "red";
  }
};
