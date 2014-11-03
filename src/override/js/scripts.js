// Background Refresh (Images by unsplash.com)
var totalCount = 8;
var num = Math.ceil( Math.random() * totalCount );
document.body.background = 'images/background-'+num+'.jpg';


var dayOfWeek = new Array();
dayOfWeek[0] = "Sunday";
dayOfWeek[1] = "Monday";
dayOfWeek[2] = "Tuesday";
dayOfWeek[3] = "Wednesday";
dayOfWeek[4] = "Thursday";
dayOfWeek[5] = "Friday";
dayOfWeek[6] = "Saturday";
var myDate = new Date();

var weekDay = dayOfWeek[myDate.getDay()];
document.getElementById("day").innerHTML = weekDay;

function startTime() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = checkTime(minute);
    second = checkTime(second);
    document.getElementById('time').innerHTML = hour+":"+minute;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};
    return i;
}

window.onload = startTime;