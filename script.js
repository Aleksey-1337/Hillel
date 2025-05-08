const text = document.getElementById("text-block");
const button = document.getElementById("color-toggle");

button.addEventListener("click", () => {
  text.classList.toggle("colored");
});
