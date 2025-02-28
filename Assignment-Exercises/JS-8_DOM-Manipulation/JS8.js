// your code starts here

let buttonAdd = document.querySelector("#button-add");
let buttonSubtract = document.querySelector("#button-subtract");
let counterText = document.querySelector("#counter-text");

buttonAdd.addEventListener("click", () => {
  counterText.textContent = parseInt(counterText.textContent) + 1;
});

buttonSubtract.addEventListener("click", () => {
  counterText.textContent = parseInt(counterText.textContent) - 1;

  if (counterText.textContent < 0) {
    counterText.textContent = 0;
  }
});

// your code ends here
