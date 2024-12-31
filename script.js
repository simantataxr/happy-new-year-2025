// Countdown Timer
const countdownDate = new Date("January 1, 2025 00:00:00").getTime();

const timerElement = document.getElementById("timer");

const updateTimer = setInterval(function() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(updateTimer);
    timerElement.innerHTML = "Happy New Year 2025!";
  }
}, 1000);
