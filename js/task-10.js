function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");
const amountEl = document.querySelector("#controls").firstElementChild;
const boxesEl = document.querySelector("#boxes");

const createBoxes = (number) => {
  const markup = [];
  let width = 20;
  let height = 20;

  if (amountEl.value > amountEl.max) {
    alert(`Максимально допустиме значення ${amountEl.max}`);
  } else {
    for (let i = 0; i < number; i += Number(amountEl.step)) {
      let element = document.createElement("div");
      element.style.width = `${(width += 10)}px`;
      element.style.height = `${(height += 10)}px`;
      element.style.backgroundColor = getRandomHexColor();

      markup.push(element);
    }
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
