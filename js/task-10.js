function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");
const amountEl = document.querySelector("#controls").firstElementChild;
const boxesEl = document.querySelector("#boxes");

// Можна додати умову для 1-го квадрата, в якого буде фіксована висота і ширина.
const createBoxes = (number) => {
  const markup = [];
  let width = 20;
  let height = 20;

  for (let i = 0; i < number; i += 1) {
    // if (i <= 0) {
    //   let element = document.createElement("div");
    //   element.style.width = `${width}px`;
    //   element.style.height = `${height}px`;
    //   element.style.backgroundColor = getRandomHexColor();
    //   console.log(element);
    //   markup.push(element);
    // }

    let element = document.createElement("div");
    element.style.width = `${(width += 10)}px`;
    element.style.height = `${(height += 10)}px`;
    element.style.backgroundColor = getRandomHexColor();
    console.log(element);

    markup.push(element);
  }

  boxesEl.append(...markup);
};

createBtnEl.addEventListener("click", amountBoxes);
destroyBtnEl.addEventListener("click", destroyBoxes);

function amountBoxes() {
  createBoxes(amountEl.value);
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
  amountEl.value = "";
}
