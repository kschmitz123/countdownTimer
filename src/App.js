import "./style.css";
import { createElement } from "./utils/elements";
// // import playBtnImg from "./play.png";
// import pauseBtnImg from "./pause.png";
let intervalID = null;

function startCountdown(counterNumber) {
  let intervalID = setInterval(function () {
    counterNumber--;
    document.querySelector(".timer__display").textContent = counterNumber;
    if (counterNumber <= 0) clearInterval(intervalID);
  }, 1000);
}

function stopCountdown() {
  clearInterval(intervalID);
}

export function createTimer() {
  // const playBtnAction = createElement("img", {
  //   src: pauseBtnImg,
  // });

  const TimerContainer = createElement("div", {
    className: "timer",
    children: [
      createElement("button", {
        innerHTML: "Start",
        className: "timer__btn",
        onclick: () => {
          startCountdown(60);
          change();
        },
      }),
      createElement("input", {
        className: "timer__input",
      }),
      createElement("div", {
        className: "timer__display",
        // children: [playBtnAction],
      }),
    ],
  });
  return TimerContainer;
}

function change() {
  let elem = document.querySelector(".timer__btn");
  if (elem.innerHTML == "Start") {
    elem.innerHTML = "Pause";
  } else {
    stopCountdown();
    elem.innerHTML = "Start";
  }
}
