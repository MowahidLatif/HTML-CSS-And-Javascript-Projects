
let count = 0;

const spanValue = document.getElementById("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function(e) {
    const styles = e.currentTarget.classList;

    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      spanValue.style.color = "green"
    } else if (count < 0) {
      spanValue.style.color = "red"
    } else {
      spanValue.style.color = "black"
    }

    spanValue.textContent = count;
  });
});