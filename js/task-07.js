const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

// inputEl.setAttribute("value", inputEl.min);
// textEl.style.fontSize = `${inputEl.value}px`;
rangeFunc();
inputEl.addEventListener("input", rangeFunc);

function rangeFunc() {
  textEl.style.fontSize = `${inputEl.value}px`;
}
