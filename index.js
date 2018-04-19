var mockData = require('./data.json');
// var currentDate = new Date();
// var currentYear = currentDate.getFullYear();

// var start = new Date(`${currentYear} 08:05`);
// var end = new Date(`${currentYear} 08:15`);

// async function calTimeline(start, end) {
//   var diffHours = end.getHours() - start.getHours();
//   var diffMins = end.getMinutes() - start.getMinutes();
//   var totalDiffTime = (diffHours * 60) + diffMins;
//   var timelines = [];

//   for (var i = 0; i < totalDiffTime; i++) {
//     var sHour = start.setMinutes(start.getMinutes() + 1);
//     timelines.push(sHour);
//   }

//   var insertStart = new Date(`${currentYear} 08:05`);
//   timelines.splice(0, 0, insertStart.getTime());
//   // timelines.pop();

//   return timelines;
// }

// calTimeline(start, end).then(startToEnd => {
//   console.log(startToEnd);
//   startToEnd.forEach(element => {
//     console.log(new Date(element).toString());
//   });
// });


async function getTimeline() {
  var timelines = [];
  mockData.forEach(element => {
    var diffHours = element.endtime - element.starttime;
    var timelineObjs = {
      userid: element.userid,
      starttime: element.starttime,
      endtime: element.endtime,
      difftime: diffHours
    }
    timelines.push(timelineObjs);
  });
  return timelines;
}

getTimeline().then(res => {
  var allTimelines = [];
  var duplicateTime = [];

  // Split time and + 1 min
  for (var i = 0; i < res.length; i++) {
    var diff = new Date(res[i].difftime).getMinutes();
    allTimelines.push(`endRange`);
    for (var j = 0; j < diff; j++) {
      var start = new Date(res[i].starttime);
      var sHour = start.setMinutes(start.getMinutes() + j);
      allTimelines.push(sHour);
    }
  }
  allTimelines.splice(0,1);
  console.log('All Timeline: ',allTimelines);
  
  // Get duplicate time
  allTimelines.forEach(function (element, index) {
    if (allTimelines.indexOf(element, index + 1) > -1) {
      if (duplicateTime.indexOf(element) === -1) {
        duplicateTime.push(element);
      }
    }
  });
  console.log('Duplicate Time: ',duplicateTime);

  // duplicateTime.forEach(element => {
  //   console.log(new Date(element).toString())
  // });
});

