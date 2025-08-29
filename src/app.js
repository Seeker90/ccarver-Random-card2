import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

function getRandomCard() {
  let suits = ["Hearts","Spades","Clubs","Diamond"];
  let values = ["2", "3", "4", "5", "6", "7", "8" "9", "10", "J", "Q" "K", "A"];

  let suit = suits[Math.floor(Math.random() * suits.length)];
  let value = values[Math.floor(Math.random() * values.length)]
  
  return {suit, value };
  
  
  
  }

























};
