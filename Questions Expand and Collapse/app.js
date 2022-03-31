/*

/* hide text 
.question-text {
  display: none;
}
.show-text .question-text {
  display: block;
}
.minus-icon {
  display: none;
}
.show-text .minus-icon {
  display: inline;
}
.show-text .plus-icon {
  display: none;
}
*/

// const questionButtons = document.querySelectorAll(".question-btn");
const question = document.querySelectorAll(".question");

question.forEach(function(element) {
  questionButtons = element.querySelector(".question-btn");
  questionButtons.addEventListener("click", function(){
    question.forEach(function(item) {
      if (item !== element) {
        item.classList.remove("show-text");
      } 
    });
    element.classList.toggle("show-text");
  });
});

// const questionButtons = document.querySelectorAll(".question-btn");

// questionButtons.forEach(function(btn) {
//   btn.addEventListener("click", function(e){
//     const selectedQuestion = e.currentTarget.parentElement.parentElement;
//     selectedQuestion.classList.toggle("show-text");
//   });
// });

// ^^^ Another way but you have to open/close manually whereas above you do not have to.