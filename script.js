let newGameBtn = document.getElementById("newGameBtn");
let number = document.querySelector(".number");
let guessNumber = document.getElementById("guessNumber");
let checkBtn = document.querySelector(".checkBtn");
let hintText = document.getElementById("hintText");
let leftTime = document.getElementById("leftTime");
let hScore = document.getElementById("hScore");

let secretNumber = Math.floor(Math.random() * 10 + 11);
let totalScore = hScore.innerText;

number.value = secretNumber;

console.log(number.value, hScore.innerHTML);

hintText.innerText = "Guess Number";

newGameBtn.addEventListener("click", () => {
  number.innerText = "?";
  hintText.innerText = "Guess Number";
  leftTime.innerHTML = 20;
  guessNumber.value = "";
  number.value = Math.floor(Math.random() * 10 + 11);
  console.log(hScore.innerText, number.value, leftTime.innerText);
  checkBtn.style.display = "block";
});

checkBtn.addEventListener("click", () => {
  if (guessNumber.value == "") {
    hintText.innerText = "Please fill a number";
  } else {
    if (number.value == guessNumber.value) {
      number.innerText = number.value;
      if (Number(leftTime.innerText) > Number(hScore.innerText)) {
        hScore.innerText = leftTime.innerText;
      }
      hintText.innerText = "Congratulation Winner";
      checkBtn.style.display = "none";
    } else {
      leftTime.innerText--;
      if (guessNumber.value > number.value) {
        hintText.innerText = "higher than a number";
      } else {
        hintText.innerText = "lower than a number";
      }
      if (leftTime.innerText == 0) {
        hintText.innerText = "Game Over";
        guessNumber.value = "";
        checkBtn.style.display = "none";
      }
    }
  }
});
