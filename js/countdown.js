// countdown!


var time = setInterval(function() {
    let now = new Date();
    let time_until = time_to_count - now;

    if (time_until < 0)
        document.getElementById('time-until').textContent = 'now!';
    else
        document.getElementById('time-until').textContent = countdown_time(time_until);
}, 1000);


// time
function countdown_time(time_until) {
    let days = Math.floor(time_until / (1000 * 60 * 60 * 24));
    let hours = Math.floor((time_until % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((time_until % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((time_until % (1000 * 60)) / 1000);

    if (days == 0)
        if (hours == 0)
            if (minutes == 0)
                return `${seconds} seconds`;
            else
                return `${minutes} minutes`;
        else
            return `${hours} hours`;
    else
        return `${days} days`;
}