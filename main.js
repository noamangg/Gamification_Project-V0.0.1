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

// return first three letter form any month
function monthValue(month) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  for (let i = 0; i < months.length; i++) {
    if (month === i) return months[i].substring(0,3);
  }
  return months[0].substring(0, 3);
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

document.getElementById("year-screen").innerHTML = startDate.getFullYear();
document.getElementById("month-screen").innerHTML = monthValue(
  startDate.getMonth()
);
document.getElementById("day-screen").innerHTML = addZeroes(
  startDate.getDate()
);

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


let days = [];
days.push(`I deleted the YouTube app and the Chrome browser on my phone, I was so tired and I
had an exam in the university so I didn't think of dopamine.`);

days.push(`In this day, I was feeling so badly that because I need some dopamine literally I
was locking for anything can give this feeling but fortunately there is nothing so I move on.`);

days.push(`I was so upsets I didn't get enough sleep and I felt like I really need some cool
dopamine stuff for that I reach to my default browser on my phone and I open it then went to YouTube I
(froze) there because on more step and It will break the challenge so I told to myself let's learn some
CSS instead so I start watch some CSS videos and learn some stuffs then when I finished I close the
browser and I will not open it again, after that I opened my phone and start reading some PDF books,
it's work and I forgat dopamine.`);

days.push(`No more dopamine today I was so enjoy doing sport I had a great sport's
section, I didn't get enough sleep but it's ok I did very well in my today's exam, but I spent mush time
jumping from work group to another in the chat app so it's problem that I should solve.`);

days.push(`I filed in this challenge in day 10 but I had a great chance to win in the next time, so this challenge will end, 
now I replace my smart phone with once that has no internet or any social media site especially YouTube app which is the main problem in my life.  `)

let daysSave = ``;
for (let i = 0; i < days.length; i++) {
  daysSave += `
  <div class=days-card>
    <div class="days-front">
      <p><span>Day ${i + 1}:</span> ${days[i]}</p>
    </div>
    <div class="days-back">
      <p>Day ${i + 1}<p/>
    </div>
  </div>
  `;
}
document.getElementById("journalist-section").innerHTML = daysSave;
