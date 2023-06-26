"use strict";

const clockEL = document.getElementById("clock");
const btn = document.getElementById("btn-pause");
const countEl = document.getElementById("count");
const plusEl = document.getElementById("plus");
const minusEl = document.getElementById("minus");
const btnRestart = document.getElementById("restart");

let min;
let seconds;

let isRun;
let active;
let init = () => {
  min = 25;
  seconds = 0;
  isRun = true;
  active = 0;
  clockEL.innerHTML = `${min < 10 ? "0" + min : min}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
  countEl.innerText = min;
};

let activeFn = () => {
  active = active == 0 ? 1 : 0;
  if (active == 1) {
    isRun = true;
  } else {
    isRun = false;
  }
};
min = min < 10 ? "0" + min : min;
seconds = seconds < 10 ? "0" + seconds : seconds;
var t = setInterval(function () {
  if (!isRun && seconds >= 0) {
    seconds--;
    if (seconds == -1 && min > 0) {
      seconds = 59;
      min--;
    }
    if (seconds > 0) {
      clockEL.innerHTML = `${min < 10 ? "0" + min : min}:${
        seconds < 10 ? "0" + seconds : seconds
      }`;
    }
  }
}, 1000);

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (active === 1) {
    isRun = false;
    btn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  } else if (active === 0) {
    isRun = true;
    btn.innerHTML = `<i class="fa-solid fa-play"></i>`;
  }
  console.log(active);
});
plusEl.addEventListener("click", () => {
  min += 1;
  countEl.innerText = min;
  clockEL.innerHTML = `${min < 10 ? "0" + min : min}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
});
minusEl.addEventListener("click", () => {
  min -= 1;
  countEl.innerText = min;
  clockEL.innerHTML = `${min < 10 ? "0" + min : min}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
});
btnRestart.addEventListener("click", () => {
  init();
  clockEL.innerHTML = `${min < 10 ? "0" + min : min}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
});

init();
