const img = document.getElementById("random-image");
const randomNumber = Math.floor(Math.random() * 9) + 1;
img.src = `images/${randomNumber}.jpg`;
