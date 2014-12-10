// Background
var totalCount = 7;
var num = Math.ceil( Math.random() * totalCount );
document.body.background = 'src/override/images/background-'+num+'.jpg';

// Date
var moment = moment().format('MMMM Do YYYY');
var weekDay = moment[mDate.getDay()];
document.getElementById("day").innerHTML = weekDay;

// Days
/* var dayOfWeek = new Array();
dayOfWeek[0] = "Today is Sunday";
dayOfWeek[1] = "Today is Monday";
dayOfWeek[2] = "Today is Tuesday";
dayOfWeek[3] = "Today is Wednesday";
dayOfWeek[4] = "Today is Thursday";
dayOfWeek[5] = "Happy Friday!";
dayOfWeek[6] = "Today is Saturday";
var myDate = new Date();

var weekDay = dayOfWeek[myDate.getDay()];
document.getElementById("day").innerHTML = weekDay; */


// Time
function startTime() {
    var date = new Date();
    var hours = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    if (hours > 12) {
    	var hour = hours - 12;
    } else {
    	var hour = date.getHours();
    }
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


