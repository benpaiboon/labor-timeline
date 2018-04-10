var currentDate = new Date();
var currentYear = currentDate.getFullYear();

var start = new Date(`${currentYear} 09:00`);
var end = new Date(`${currentYear} 11:00`);
// var oneMin = new Date(`${currentYear} 00:01`);

var total = new Date(end - start);
var minLoop = total.getMinutes();


if (minLoop == 0) {
 minLoop = 60;
}
else {
 minLoop = total.getMinutes();
}


var timeLine = [];

for (var i = 0; i < minLoop; i++) {
 var timeRange = `${start.getHours()}:${start.getMinutes() + i}`;
 // console.log(`${start.getHours()}:${start.getMinutes() + i}`);
 timeLine.push(timeRange);
}

console.log(timeLine);

