let button = document.getElementById("colorButton");
button.addEventListener("click", () => {
  let color = Math.floor(Math.random() * 16777215).toString(16);
  console.log(color);

  document.body.style.backgroundColor = "#" + color;
});
