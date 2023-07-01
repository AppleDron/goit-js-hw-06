const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const createEl = (array) => {
  const markup = array.map((item) => {
    const ingredient = document.createElement("li");
    ingredient.textContent = item;
    ingredient.classList.add("item");
    return ingredient;
  });

  list.append(...markup);
};

createEl(ingredients);
