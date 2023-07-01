function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtnEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");

changeColorBtnEl.addEventListener("click", changeColorBody);

function changeColorBody() {
  bodyEl.style.backgroundColor = getRandomHexColor();
}
