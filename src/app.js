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

  let scaleValue = 1;
  let increaseButton = document.getElementById("increase-size");
  let decreaseButton = document.getElementById("decrease-size");

  // Generar valores de carta aleatoria
  let randomSuit = Math.floor(Math.random() * 4);
  let randomNumber = Math.floor(Math.random() * 13);

  numberCard.innerHTML = numbers[randomNumber];
  suitTop.innerHTML = suits[randomSuit];
  suitBot.innerHTML = suits[randomSuit];

  if (suits[randomSuit] == "♥" || suits[randomSuit] == "♦") {
    suitTop.style.color = "red";
    suitBot.style.color = "red";
  }

  // Escuchar el evento del botón de shuffle
  btnShuffle.addEventListener("click", () => {
    location.reload();
  });

  // Cambiar el tamaño de la carta
  increaseButton.addEventListener("click", () => {
    scaleValue += 0.1; // Aumenta el tamaño
    card.style.transform = `scale(${scaleValue})`;
  });

  decreaseButton.addEventListener("click", () => {
    scaleValue = Math.max(0, scaleValue - 0.1); // Disminuye el tamaño, max a 0
    card.style.transform = `scale(${scaleValue})`;
  });

  setTimeout(() => {
    location.reload();
  }, 15000);

  suitTop.style.textAlign = "left";
  suitTop.style.fontSize = "6em";

  suitBot.style.textAlign = "left";
  suitBot.style.rotate = "180deg";
  suitBot.style.fontSize = "6em";

  numberCard.style.fontSize = "8em";
};
