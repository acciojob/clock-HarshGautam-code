
function updateTimer() {
    const timer = document.getElementById("timer");
    const now = new Date();

    timer.textContent = now.toLocaleString();
}

updateTimer();
setInterval(updateTimer, 1000);