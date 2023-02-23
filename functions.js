
let addZeroes = (num) => (num < 10 ? `0${num}` : num);
let finalSeconds, finalMinutes, finalHours, finalDays;

let startPoint = (stp) => stp;
let minutes = document.getElementById("mi-box");
function clcTime() {
  let divPoint = new Date() - startPoint(new Date(2023, 1, 20, 14));
  let oneMin = 60 * 1000;
  let oneHr = oneMin * 60;
  let oneDay = oneHr * 24;
  finalDays = addZeroes(Math.floor(divPoint / oneDay));
  finalHours = addZeroes(Math.floor((divPoint % oneDay) / oneHr));
  finalMinutes = addZeroes(Math.floor((divPoint % oneHr) / oneMin));
  finalSeconds = addZeroes(Math.floor((divPoint % oneMin) / 1000));
  minutes.textContent = finalSeconds;
}
setInterval(clcTime, Number.MAX_VALUE);
clcTime();

