// // "Color Flipper"
// let my_element = document.createElement("h1");
// let my_header = document.createElement("h2");

// my_header.innerText = "Color Flipper";
// my_element.appendChild(my_header);
// document.body.appendChild(my_element);

// colors
const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
