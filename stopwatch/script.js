const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const hh = document.getElementById("hh");
const mm = document.getElementById("mm");
const ss = document.getElementById("ss");

let secCount = 0;
let minCount = 0;
let hourCount = 0;
let startTimer;

function startFunc() {
  startTimer = setInterval(() => {
    secCount++;
    if (secCount > 59) {
      secCount = 0;
      minCount++;
      if (minCount > 59) {
        minCount = 0;
        hourCount++;
        if (hourCount < 10) {
          hh.innerHTML = "0" + hourCount;
        } else {
          hh.innerHTML = hourCount;
        }
      }
      if (minCount < 10) {
        mm.innerHTML = "0" + minCount;
      } else {
        mm.innerHTML = minCount;
      }
    }
    if (secCount < 10) {
      ss.innerHTML = "0" + secCount;
    } else {
      ss.innerHTML = secCount;
    }
  }, 1000);

  startButton.disabled = true;
}

function resetFunc() {
  clearInterval(startTimer);
  hh.innerHTML = "00";
  mm.innerHTML = "00";
  ss.innerHTML = "00";
  secCount = 0;
  minCount = 0;
  hourCount = 0;
}

startButton.addEventListener("click", (e) => {
  startFunc();
});

stopButton.addEventListener("click", (e) => {
  clearInterval(startTimer);
  startButton.disabled = false;
});

resetButton.addEventListener("click", (e) => {
  resetFunc();
  startButton.disabled = false;
});
