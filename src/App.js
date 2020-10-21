import "./style.css";
import { createElement } from "./utils/elements";

export function createTimer() {
  const TimerContainer = createElement("div", {
    className: "timer",
    children: [
      createElement("button", {
        innerHTML: "Start",
        className: "timer__btn",
        onclick: () => {
          const inputValue = document.querySelector(".timer__input").value;

          change(inputValue);
        },
      }),
      createElement("input", {
        className: "timer__input",
        type: "number",
      }),
      createElement("div", {
        className: "timer__display",
      }),
    ],
  });
  return TimerContainer;
}

let intervalID = null;

function startCountdown(timeLeft) {
  intervalID = setInterval(function () {
    timeLeft--;
    document.querySelector(".timer__display").innerHTML = timeLeft;
    if (timeLeft === 0) clearInterval(intervalID);
  }, 1000);
}

function stopCountdown() {
  clearInterval(intervalID);
  document.querySelector(".timer__input").value = document.querySelector(
    ".timer__display"
  ).innerText;
}

function change(inputValue) {
  let btn = document.querySelector(".timer__btn");
  console.log(btn.innerText);
  if (btn.innerText === "Start") {
    btn.innerText = "Pause";
    startCountdown(inputValue);
  } else {
    stopCountdown();
    btn.innerText = "Start";
  }
}
