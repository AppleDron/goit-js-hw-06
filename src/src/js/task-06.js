const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", blurFunc);

function blurFunc() {
  if (Number(inputEl.dataset.length) === inputEl.value.length) {
    // if (inputEl.classList.contains("invalid")) {
    inputEl.classList.remove("invalid");
    // }
    inputEl.classList.add("valid");
  } else {
    // if (inputEl.classList.contains("valid")) {
    inputEl.classList.remove("valid");
    // }
    inputEl.classList.add("invalid");
    console.log(inputEl.classList);
  }
}

// Зробив додаткову умову, але не знаю як правильніше, тому що працює і так, і так.
// Чи варто робити додаткову умову на наявність класу в ClassList чи просто написати видалення його?!
