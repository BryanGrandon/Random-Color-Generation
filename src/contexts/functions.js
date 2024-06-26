const randomColor = (transparency = false) => {
  const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "a", "b", "c", "d", "e", "f"];
  let alpha = transparency == true ? 8 : 6;
  let color = "";
  for (let i = 0; i < alpha; i++) {
    let random = Math.floor(Math.random() * hex.length);
    color += hex[random];
  }
  return "#" + color;
};

const searchColor = (objectArray, color) => {
  let theColors = [];
  objectArray.map((e) => theColors.push(e.hex));
  return theColors.includes(color);
};

const saveLocalStorage = (list) => {
  localStorage.setItem("savedColors", JSON.stringify(list));
};

const alertCopy = (color) => {
  const $span = document.createElement("span");
  $span.classList.add("alert");
  $span.textContent = `Copy: ${color}`;
  document.body.insertAdjacentElement("afterbegin", $span);
  setTimeout(() => document.body.removeChild($span), 1000);
};

export { randomColor, searchColor, saveLocalStorage, alertCopy };
