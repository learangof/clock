const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");
const DIGITALTIME = document.querySelector("#digital .digital-text");
const DIGITALDAY = document.querySelector("#date #day");
const DIGITALMONTH = document.querySelector("#date #month");
const DIGITALYEAR = document.querySelector("#date #year");


function runTheClock() {
    var date =  new Date();
    //console.log(date.toTimeString());
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    //console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);
    
    let hrPosition = (hr*360/12)+(min*(360/60)/12);
    let minPosition = (min*360/60)+(sec*(360/60)/60);
    let secPosition = sec*360/60;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)"
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)"
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)"

    DIGITALTIME.innerHTML = checkNumber(hr) + ":" + checkNumber(min) + ":" + checkNumber(sec);
    DIGITALDAY.innerHTML = checkNumber(date.getDay());
    DIGITALMONTH.innerHTML = checkNumber(date.getMonth()+1);
    DIGITALYEAR.innerHTML = date.getFullYear().toString().slice(2);
}

var interval = setInterval(runTheClock, 1000);

function checkNumber(number) {
    return number.toString().replace(/\b\d{1}$/g, '0$&');;
}
