// // "Color Flipper"
// let my_element = document.createElement("h1");
// let my_header = document.createElement("h2");

// my_header.innerText = "Color Flipper";
// my_element.appendChild(my_header);
// document.body.appendChild(my_element);

// colors
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", "G"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
    // console.log(hexColor);
  }
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
