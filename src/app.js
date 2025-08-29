import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  

  const suit = ["♠","♥","♣","♦"];
  const value = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

  let randomSuit = suit[Math.floor(Math.random() * suit.length)];
  let randomValue = value[Math.floor(Math.random() * value.length)];
  
  if (randomSuit === "♥" || randomSuit ==="♦") {
    document.querySelector(".top-suit").classList.add("text-danger");
    document.querySelector(".bottom-suit").classList.add("text-danger");
  }

  document.querySelector(".top-suit").innerHTML = [randomSuit];
  document.querySelector(".card-value").innerHTML = [randomValue];
  document.querySelector(".bottom-suit").innerHTML = [randomSuit];
  
  }
























