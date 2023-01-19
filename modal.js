const openbtn = document.querySelector(".open");
const modalElem = document.querySelector(".modal");
const closebtn = document.querySelector(".close");

closebtn.addEventListener("click", handleCloseBtn);

openbtn.addEventListener("click", handleOpenBtn);

function handleCloseBtn() {
  modalElem.classList.add("hidden");
}

function handleOpenBtn() {
  modalElem.classList.remove("hidden");
}
