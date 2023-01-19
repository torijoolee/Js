const sliderItem = document.querySelectorAll(".slider-item");
const ACTIVE_CLASS = "active";
const firstSlide = document.querySelector(".slider-item:first-child");

function slide() {
  const currentItem = document.querySelector(`.${ACTIVE_CLASS}`);

  if (currentItem) {
    currentItem.classList.remove(ACTIVE_CLASS);
    const nextItem = currentItem.nextElementSibling;

    if (nextItem) {
      nextItem.classList.add(ACTIVE_CLASS);
    } else {
      firstSlide.classList.add(ACTIVE_CLASS);
    }
  } else {
    firstSlide.classList.add(ACTIVE_CLASS);
  }
}
slide();
setInterval(slide, 2000);
