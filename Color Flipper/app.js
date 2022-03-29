const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const colorSpan = document.querySelector(".color");

btn.addEventListener("click", function() {

  const getNum = Math.floor(Math.random() * colors.length);
  console.log(getNum);
  colorSpan.textContent = colors[getNum];
  document.body.style.backgroundColor = colors[getNum];

});