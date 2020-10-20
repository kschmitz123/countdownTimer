import "./style.css";
import { createElement } from "./utils/elements";
// import playBtnImg from "./play.png";
// import pauseBtnImg from "./pause.png";

let counter = 10;

function countDown() {
  counter--;
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
          countDown(counter);
          console.log(counter);
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
