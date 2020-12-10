window.onload = function() {
    
    let minutes = 00;
    let seconds = 00;
    let tens = 00;
    let appendMinutes = document.getElementById("minutes");
    let appendSeconds = document.getElementById("seconds");
    let appendTens = document.getElementById("tens");
    const buttonStart = document.getElementById("button-start");
    const buttonStop = document.getElementById("button-stop");
    const buttonReset = document.getElementById("button-reset");
    let timer;

    buttonStart.onclick = () => {
        clearInterval(timer);
        timer = setInterval(startTimer, 10);
    };
    buttonStop.onclick = () => {
        clearInterval(timer);
    };
    buttonReset.onclick = () => {
        clearInterval(timer);
        tens= 00;
        seconds= 00;
        minutes = 00;
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
    };

    const startTimer = () => {
        tens++
        if( tens < 9) {
            appendTens.innerHTML = "0" + tens;
        } 
        if( tens > 9) {
            appendTens.innerHTML = tens;
         }
        if( tens > 100) {
            seconds++
            appendSeconds.innerHTML = seconds;
            tens = 0;
            appendTens.innerHTML = tens;
        } if (seconds < 9) {
            appendSeconds.innerHTML = "0" + seconds;
        }
        if ( seconds > 9) {
            
            appendSeconds.innerHTML =seconds;
        }
        if ( seconds > 20) {
            minutes++;
            seconds = 00;
            appendSeconds.innerHTML = seconds;
        }
        if(minutes < 9) {
            appendMinutes.innerHTML = "0" + minutes;
        }
    };
   
};