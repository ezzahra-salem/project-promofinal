const workTime = 25 * 60; // in seconds
const breakTime = 5 * 60; // in seconds

let timeLeft = workTime;
let timerInterval;

const timerDisplay = document.querySelector(".timer-display");
const timerLabel = document.querySelector(".timer-label");
const startButton = document.querySelector(".start-button");
const resetButton = document.querySelector(".reset-button");
const stopbutton = document.querySelector(".stop-button");

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      const audio = new Audio("Alarme Magique.mp3");
      audio.play();
      if (timerLabel.textContent === "Work") {
        timerLabel.textContent = "Break";
        timeLeft = breakTime;
      } else {
        timerLabel.textContent = "Work";
        timeLeft = workTime;
      }
      setTimeout(() => {
        startTimer();
      }, 1000);
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  timeLeft = workTime;
  timerLabel.textContent = "Work";
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);
