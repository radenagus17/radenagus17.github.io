const buttonChangeColor = document.getElementById("changeButt");

buttonChangeColor.onclick = function () {
  document.body.classList.toggle("darkGrey");
};

const randomColor = document.createElement("button");
const buttonTeks = document.createTextNode("Random Color");

randomColor.appendChild(buttonTeks);
randomColor.setAttribute("type", "button");

buttonChangeColor.after(randomColor);

randomColor.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

const sRed = document.querySelector("input[name=sliderMerah]");
const sGreen = document.querySelector("input[name=sliderHijau]");
const sBlue = document.querySelector("input[name=sliderBiru]");

sRed.addEventListener("input", function () {
  const r = sRed.value;
  const g = sGreen.value;
  const b = sBlue.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
sGreen.addEventListener("input", function () {
  const r = sRed.value;
  const g = sGreen.value;
  const b = sBlue.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
sBlue.addEventListener("input", function () {
  const r = sRed.value;
  const g = sGreen.value;
  const b = sBlue.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
