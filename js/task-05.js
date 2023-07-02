const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", inputFunc);

function inputFunc() {
  !inputEl.value.trim()
    ? (outputEl.textContent = "Anonymous")
    : (outputEl.textContent = inputEl.value.trim());
}
