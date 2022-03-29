const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const colorSpan = document.querySelector(".color");

btn.addEventListener("click", () => {
  let ans = "#";
  for (let i = 0; i < 6; i++) {
    ans += hex[getNum()];
  }

  colorSpan.textContent = ans;
  document.body.style.backgroundColor = ans;
});

function getNum() {
  return Math.floor(Math.random() * hex.length);

}