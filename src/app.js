/* eslint-disable */
import "./style.css";

window.onload = () => {
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".card").innerHTML = generateRandomNumber();
};
function generateRandomNumber() {
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
  let randonNumber = Math.floor(Math.random() * numbers.length);
  return numbers[randonNumber];
}

function generateRandomSuit() {
  let suit = ["spade", "club", "heart", "diamond"];
  let randonSuit = Math.floor(Math.random() * suit.length);
  return suit[randonSuit];
}
