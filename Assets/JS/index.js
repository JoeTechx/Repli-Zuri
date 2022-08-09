const questions = document.querySelectorAll(".question-content");

questions.forEach(function (question) {
// console.log(question);
const btn = question.querySelector(".question-btn");
// console.log(btn);
btn.addEventListener("click", function () {

    questions.forEach(function (item) {
        if (item !== question) {
          item.classList.remove("show-text");
        }
      });
        question.classList.toggle("show-text");
});
});

// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalBtn = document.querySelectorAll(".modal-btn");
const modalBtns = document.querySelectorAll(".modal-btnx")
const modal = document.querySelector(".modal-overlay");
const modalX = document.querySelector(".overlayx")
const closeBtn = document.querySelector(".close-btn");
const closeBtnX = document.querySelector(".close-btnx");

modalBtn.forEach(function (mode) {
  
mode.addEventListener("click", function () {
    modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function(){
    modal.classList.remove("open-modal");
});
})
modalBtns.forEach(function (btn) {
  
btn.addEventListener("click", function () {
    modalX.classList.add("open-modal");
});
closeBtnX.addEventListener("click", function(){
    modalX.classList.remove("open-modal");
});
})