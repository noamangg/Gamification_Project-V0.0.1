let a = function (TimeStart) {
  let TimeNow = new Date();
  console.log(TimeNow.getTime());

  console.log(TimeStart.getTime());

  let TimeDiv = TimeNow - TimeStart;
  TimeDiv /= 1000;
  console.log(TimeDiv);

  
  let oneMin = 60 * 1000;
  let oneHr = oneMin * 60;
  let oneDay = oneHr * 24;

};
let TimeStart = new Date(2023, 1, 13, 15);
a(TimeStart);
