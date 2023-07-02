// const list = document.querySelector("#categories");
// console.log(`Number of categories: ${[...list.children].length}`);

// [...list.children].forEach((item) => {
//   console.log(`Category: ${item.firstElementChild.textContent}`);
//   console.log(`Elements: ${item.lastElementChild.children.length}`);
// });

// ---------- Варіант через document.querySelectorAll() ----------

const liItemsEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${liItemsEl.length}`);

liItemsEl.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
