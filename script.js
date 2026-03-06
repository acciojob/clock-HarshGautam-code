
function updateTimer() {

    const timer = document.getElementById("timer");
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // add leading zero
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    const time = hours + ":" + minutes + ":" + seconds;

    const date = now.toDateString();

    timer.innerHTML = time + "<br>" + date;
}

updateTimer();
setInterval(updateTimer, 1000);