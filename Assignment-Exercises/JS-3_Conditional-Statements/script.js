function checkAge() {
  // write your code here
  let age = document.getElementById("ageInput").value;
  let result = document.getElementById("result");

  if (age < 0) {
    document.getElementById("result").textContent =
      "Invalid age. Please enter a valid number.";
    return;
  }

  if (age >= 0 && age <= 12) {
    result.textContent = "You are a child.";
  } else if (age >= 13 && age <= 19) {
    result.textContent = "You are a teenager.";
  } else {
    result.textContent = "You are an adult.";
  }
}
