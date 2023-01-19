const greetingElem = document.querySelector(".greeting");
const btn1Elem = document.querySelector(".btn1");
const btn2Elem = document.querySelector(".btn2");
const btn3Elem = document.querySelector(".btn3");
const btn4Elem = document.querySelector(".btn4");

function addClass() {
  greetingElem.classList.add("activate");
}

function removeClass() {
  greetingElem.classList.remove("activate");
}
function toggleClass() {
  greetingElem.classList.toggle("activate");
}
function editText() {
  greetingElem.innerHTML = "nice!";
}

btn1Elem.addEventListener("click", addClass);
btn2Elem.addEventListener("click", removeClass);
btn3Elem.addEventListener("click", toggleClass);
btn4Elem.addEventListener("click", editText);
