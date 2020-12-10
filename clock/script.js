window.onload = function() {
const showTime = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    switch (date.getMonth()){
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3: 
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
    }
     switch (date.getDay()) {
        case 0: 
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4: 
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            day = "GRAVE DANGER";
    }
    let dayOfMonth = date.getDate();
    let year = date.getFullYear(); 
    let session  ;
 
    if( hours < 12) {
        session = "AM";
    } else {
        session = "PM";
        hours = hours - 12;
    }


    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    const time = `${hours}:${minutes}:${seconds} ${session}`;
    const fullDate = `${day} ${month}/${dayOfMonth}/${year}`;

    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    document.getElementById("MyDateDisplay").innerText = fullDate;
    document.getElementById("MyDateDisplay").textContent = fullDate;

    setTimeout(showTime, 1000);
}
showTime();
}