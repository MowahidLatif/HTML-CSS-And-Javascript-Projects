

const modalButton = document.querySelector(".modal-btn");
const modalOverLay = document.querySelector(".modal-overlay");
const closeButton = document.querySelector(".close-btn");

modalButton.addEventListener("click", function() {
  if (!(modalOverLay.classList.contains(".open-modal"))) {
    modalOverLay.classList.add("open-modal");
  } 
});

closeButton.addEventListener("click", function() {
  if ((modalOverLay.classList.contains(".open-modal"))) {
    modalOverLay.classList.remove("open-modal");
  } 
});

