let time = 3600;

// setInterval(timer, 1000);

function timer() {
    let seconds = time % 60
    seconds = seconds < 10 ? "0" + seconds : seconds
    let minutes = Math.floor(time / 60)
    minutes = minutes < 10 ? "0" + minutes : minutes
    let hours = Math.floor(time / 3600)
    hours = hours < 10 ? "0" + hours : hours
    time--
    console.log(minutes, seconds);
    document.getElementById('timer').innerHTML = `${hours}:${minutes}:${seconds}`

    if (seconds < 0) clearInterval(timer);
}
