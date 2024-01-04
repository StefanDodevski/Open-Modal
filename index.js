let openModalBtn = document.querySelector(".open-modal");
let closeModalBtn = document.querySelector(".close-modal");
let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");

openModalBtn.addEventListener("click", function () {
  modal.style.display = "block";
  overlay.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
  overlay.style.display = "none";
});
