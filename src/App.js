import "./style.css";
import { createElement } from "./utils/elements";
// import playBtnImg from "./play.png";
// import pauseBtnImg from "./pause.png";

export function createTimer() {
  //   const playBtnAction = createElement("img", {
  //     src: playBtnImg,
  //   });
  const TimerContainer = createElement("div", {
    className: "timer",
    children: [
      createElement("button", {
        innerText: "Play",
        className: "timer__btn",
        // children: [playBtnAction],
      }),
      createElement("input", {
        className: "timer__input",
      }),
      createElement("div", {
        className: "timer__display",
      }),
    ],
  });
  return TimerContainer;
}
