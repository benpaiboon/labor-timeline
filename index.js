var currentDate = new Date();
var currentYear = currentDate.getFullYear();

var start = new Date(`${currentYear} 08:00`);
var end = new Date(`${currentYear} 08:10`);

// var diffHours = end.getHours() - start.getHours();
// var diffMins = end.getMinutes() - start.getMinutes();

// var totalDiffTime = (diffHours * 60) + diffMins;
// var timelines = [];

// for (var i = 0; i < totalDiffTime; i++) {
//   var sHour = start.setMinutes(start.getMinutes() + 1);
//   console.log(new Date(sHour).toString());
//   timelines.push(sHour);
// }

// var insertStart = new Date(`${currentYear} 08:00`);
// timelines.splice(0, 0, insertStart.getTime());
// timelines.pop();
// console.log(timelines);

// timelines.forEach(element => {
//   console.log(new Date(element).toString());
// });

async function calTimeline(start, end) {
  var diffHours = end.getHours() - start.getHours();
  var diffMins = end.getMinutes() - start.getMinutes();
  var totalDiffTime = (diffHours * 60) + diffMins;
  var timelines = [];

  for (var i = 0; i < totalDiffTime; i++) {
    var sHour = start.setMinutes(start.getMinutes() + 1);
    timelines.push(sHour);
  }

  var insertStart = new Date(`${currentYear} 08:00`);
  timelines.splice(0, 0, insertStart.getTime());
  timelines.pop();

  return timelines;
}

calTimeline(start, end).then(startToEnd => {
  console.log(startToEnd);
  startToEnd.forEach(element => {
    console.log(new Date(element).toString());
  });
});

// Example remove []
var list = [[1, 2, 3], [2, 3, 4], [1, 2, 3]];

var result = [].concat.apply([], list);
console.log(result); // [ 1, 2, 3, 4 ]


