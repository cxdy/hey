backgrounds =
[
  "https://cloud.githubusercontent.com/assets/6620597/7430193/016088ee-efdd-11e4-9e7b-c09d594bec25.jpg",
  "https://cloud.githubusercontent.com/assets/6620597/7430192/015f5b68-efdd-11e4-8d30-8bb872212d13.jpg",
  "https://cloud.githubusercontent.com/assets/6620597/7430191/015bc6c4-efdd-11e4-9c0e-eb004ba2c3ee.jpg",
  "https://cloud.githubusercontent.com/assets/6620597/7430190/015b21ba-efdd-11e4-990e-e6d507537427.jpg",
  "https://cloud.githubusercontent.com/assets/6620597/7430188/015a59a6-efdd-11e4-9e8a-793fb82600fd.jpg",
  "https://cloud.githubusercontent.com/assets/6620597/7430189/015a6342-efdd-11e4-8de5-ecf232a0bb92.jpg",
  "https://cloud.githubusercontent.com/assets/6620597/7430187/0158189e-efdd-11e4-9abe-df2c2da9e12c.jpg",
  "https://cloud.githubusercontent.com/assets/6620597/7430186/01574fe0-efdd-11e4-9425-e2aed996eda8.jpg",
  "https://cloud.githubusercontent.com/assets/6620597/7430180/01521f84-efdd-11e4-8179-395d9bd1c924.jpg",
  "https://cloud.githubusercontent.com/assets/6620597/7430185/015395e4-efdd-11e4-93f8-2d82eef404ef.jpg",
  "https://cloud.githubusercontent.com/assets/6620597/7430184/0152f1c0-efdd-11e4-992a-1579eb5e9ebf.jpg",
  "https://cloud.githubusercontent.com/assets/6620597/7430181/01529bf8-efdd-11e4-9a61-5249149c857c.jpg",
  "https://cloud.githubusercontent.com/assets/6620597/7430183/0152c452-efdd-11e4-8350-a92fa34f0554.jpg",
  "https://cloud.githubusercontent.com/assets/6620597/7430182/0152a044-efdd-11e4-9d2c-ec61902e529e.jpg",
  ]

var background = backgrounds[Math.floor(Math.random()*backgrounds.length)]
document.body.background = '+background+';

// Background
// function backgroundnumber(min, max) {
//  return Math.floor(Math.random() * (max - min + 1) + min);
//}

//var num = backgroundnumber(3, 6);
//document.body.background = 'src/override/images/background-'+num+'.jpg';

// Days
 var dayOfWeek = new Array();
dayOfWeek[0] = "Today is Sunday";
dayOfWeek[1] = "Today is Monday";
dayOfWeek[2] = "Today is Tuesday";
dayOfWeek[3] = "Today is Wednesday";
dayOfWeek[4] = "Today is Thursday";
dayOfWeek[5] = "Happy Friday!";
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


