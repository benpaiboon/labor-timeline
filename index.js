var currentDate = new Date();
var currentYear = currentDate.getFullYear();

var start = new Date(`${currentYear} 09:00`);
var end = new Date(`${currentYear} 09:10`);

var diffHours = end.getHours() - start.getHours();
var diffMins = end.getMinutes() - start.getMinutes();

var totalDiffTime = (diffHours * 60) + diffMins;
var timelines = [];

for (var i = 0; i < totalDiffTime; i++) {
  var sHour = start.setMinutes(start.getMinutes() + 1);
  console.log(new Date(sHour).toString());
  timelines.push(sHour);
}

console.log(timelines);


