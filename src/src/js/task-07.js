const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.setAttribute("value", "16");
inputEl.addEventListener("input", rangeFunc);

function rangeFunc() {
  textEl.style.fontSize = `${inputEl.value}px`;
}
