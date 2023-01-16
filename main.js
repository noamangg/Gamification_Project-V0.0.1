// Some Functions
function checkItems() {
  if (hoursEnd >= 12 || daysEnd >= 1) {
    timeChecked[0].checked = true;
    if (daysEnd >= 1) timeChecked[1].checked = true;
    if (daysEnd >= 2) timeChecked[2].checked = true;
    if (daysEnd >= 7) timeChecked[3].checked = true;
    if (daysEnd >= 14) timeChecked[4].checked = true;
    if (daysEnd >= 15) timeChecked[5].checked = true;
    if (daysEnd >= 20) timeChecked[6].checked = true;
    if (daysEnd >= 30) timeChecked[7].checked = true;
    if (daysEnd >= 60) timeChecked[8].checked = true;
    if (daysEnd >= 90) timeChecked[9].checked = true;
  }
}
function fillBG() {
  for (let i = 0; i < timeChecked.length; i++)
    if (timeChecked[i].checked) timeChecked[i].className = "checked";
}
function countUp() {
  let todayDate = new Date();
  let todayTime = todayDate.getTime();

  let remainingTime = todayTime - startTime;
  let oneMin = 60 * 1000;
  let oneHr = oneMin * 60;
  let oneDay = oneHr * 24;
  daysEnd = Math.floor(remainingTime / oneDay);
  hoursEnd = Math.floor((remainingTime % oneDay) / oneHr);
  minutesEnd = Math.floor((remainingTime % oneHr) / oneMin);
  secondsEnd = Math.floor((remainingTime % oneMin) / 1000);

  dayBox.textContent = addZeroes(daysEnd);
  hoursBox.textContent = addZeroes(hoursEnd);
  minutesBox.textContent = addZeroes(minutesEnd);
  secondsBox.textContent = addZeroes(secondsEnd);
}
function monthValue(month) {
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  for(let i = 0; i < months.length; i++)
  {
    if(month === i)
    return months[i][0] + months[i][1] + months[i][2];
  }
  return months[0][0] + months[0][1] + months[0][2];
}
let addZeroes = (num) => (num < 10 ? `0${num}` : num);


// Counter
let dayBox = document.getElementById("day-box");
let hoursBox = document.getElementById("hr-box");
let minutesBox = document.getElementById("mi-box");
let secondsBox = document.getElementById("se-box");


let startDate = new Date(2023, 0, 15, 5, 0);
let startTime = startDate.getTime();
let daysEnd, hoursEnd, minutesEnd, secondsEnd;

let i = setInterval(countUp, Number.MAX_VALUE);

countUp();

document.getElementById('year-screen').innerHTML = startDate.getFullYear();
document.getElementById('month-screen').innerHTML = monthValue(startDate.getMonth());
document.getElementById('day-screen').innerHTML = addZeroes(startDate.getDate());

// Checklist
let timeChecked = [
  document.getElementById("hours12"),
  document.getElementById("hours24"),
  document.getElementById("days2"),
  document.getElementById("week1"),
  document.getElementById("week2"),
  document.getElementById("days15"),
  document.getElementById("days20"),
  document.getElementById("month1"),
  document.getElementById("month2"),
  document.getElementById("month3"),
];
// Fill the circle if the item is checked
checkItems();
fillBG();

