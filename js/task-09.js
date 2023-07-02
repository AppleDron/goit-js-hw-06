function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtnEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");

changeColorBtnEl.addEventListener("click", changeColorBody);

function changeColorBody() {
  const color = getRandomHexColor();
  spanEl.textContent = color;
  bodyEl.style.backgroundColor = color;
}
