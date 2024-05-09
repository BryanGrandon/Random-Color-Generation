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

export { randomColor };
