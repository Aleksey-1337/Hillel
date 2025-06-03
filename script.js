let timeLeft = 90;

const timerElement = document.getElementById('timer');

function updateTimerDisplay(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const formatted = `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  timerElement.textContent = formatted;
}

updateTimerDisplay(timeLeft);

const interval = setInterval(() => {
  timeLeft--;
  updateTimerDisplay(timeLeft);

  if (timeLeft <= 0) {
    clearInterval(interval);
  }
}, 1000);
