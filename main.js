let dayBox = document.getElementById("day-box");
let hoursBox = document.getElementById("hr-box");
let minutesBox = document.getElementById("mi-box");
let secondsBox = document.getElementById("se-box");

let startDate = new Date(2023, 0, 15, 5,0);
let startTime = startDate.getTime();

function countUp() {
  let todayDate = new Date();
  let todayTime = todayDate.getTime();
  
  let remainingTime = todayTime - startTime;
  let oneMin = 60 * 1000;
  let oneHr = oneMin * 60;
  let oneDay = oneHr * 24;
  
  let addZeroes = num => num < 10 ? `0${num}` : num; 
  
  let daysEnd = Math.floor(remainingTime / oneDay);
  let hoursEnd = Math.floor((remainingTime % oneDay) / oneHr);
  let minutesEnd = Math.floor((remainingTime % oneHr) / oneMin);
  let secondsEnd = Math.floor((remainingTime % oneMin) / 1000);
  
  dayBox.textContent = addZeroes(daysEnd);
  hoursBox.textContent = addZeroes(hoursEnd);
  minutesBox.textContent = addZeroes(minutesEnd);
  secondsBox.textContent = addZeroes(secondsEnd);
}

let i = setInterval(countUp, Number.MAX_VALUE);
countUp();