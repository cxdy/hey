// Background
var totalCount = 7;
var num = Math.ceil( Math.random() * totalCount );
document.body.background = 'src/override/images/background-'+num+'.jpg';

// Days
var dayOfWeek = new Array();
dayOfWeek[0] = "Today is Sunday";
dayOfWeek[1] = "Today is Monday";
dayOfWeek[2] = "Today is Tuesday";
dayOfWeek[3] = "Today is Wednesday";
dayOfWeek[4] = "Today is Thursday";
dayOfWeek[5] = "Today is Friday";
dayOfWeek[6] = "Today is Saturday";
var myDate = new Date();

var weekDay = dayOfWeek[myDate.getDay()];
document.getElementById("day").innerHTML = weekDay;

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

// Weather
var Geo={};
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(success,error);
}
else {
alert('Geolocation is not supported! You can continue to use the site without weather.');
}

function error() {
alert("That's weird! We couldn't find you!");
}

function success(position) {
      Geo.lat = position.coords.latitude;
      Geo.lng = position.coords.longitude;
var key = ‘a26f529a85202561’;
var Weather = "http://api.wunderground.com/api/”+ key +”/forecast/geolookup/conditions/q/" + Geo.lat + "," + Geo.lng + ".json";

$.ajax({
url : Weather,
dataType : "jsonp",
success : function(data) {
// get all the information
}
});

var location =data['location']['city'];
var temp = data['current_observation']['temp_f'];

//setting the spans to the correct parameters
$('#location').html(location);
$('#temp').html(temp);
}
