const hour = document.querySelector("#hour");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

function showTime() {
  let date = new Date();

  hh = date.getHours();
  mm = date.getMinutes();
  ss = date.getSeconds();

  let hourRotation = 30 * hh + mm / 2;
  let minuteRotation = 6 * mm;
  let secondRotation = 6 * ss;

  hour.style.transform = `rotate(${hourRotation}deg)`;
  min.style.transform = `rotate(${minuteRotation}deg)`;
  sec.style.transform = `rotate(${secondRotation}deg)`;
}

setInterval(showTime, 1000);
