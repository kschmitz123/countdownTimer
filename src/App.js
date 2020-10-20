import "./style.css";
import { createElement } from "./utils/elements";
// import playBtnImg from "./play.png";
// import pauseBtnImg from "./pause.png";

let counter = 10;

function startCountDown() {
  let counterNumber = document.querySelector(".timer__display").textContent;
  let countdown = setInterval(function () {
    counterNumber--;
    document.querySelector(".timer__display").textContent = counterNumber;
    if (counterNumber <= 0) clearInterval(countdown);
  }, 1000);
}

export function createTimer() {
  //   const playBtnAction = createElement("img", {
  //     src: playBtnImg,
  //   });

  const TimerContainer = createElement("div", {
    className: "timer",
    children: [
      createElement("button", {
        innerText: "Start",
        className: "timer__btn",
        onclick: () => {
          startCountDown();
        },
        // children: [playBtnAction],
      }),
      createElement("input", {
        className: "timer__input",
      }),
      createElement("div", {
        innerText: counter,
        className: "timer__display",
      }),
    ],
  });
  return TimerContainer;
}
