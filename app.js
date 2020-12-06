const slides = document.querySelectorAll(".slide");

const prevButton = document.querySelector("#left");
const nextButton = document.querySelector("#right");


/* to have the automatic functionality */
const auto = false; /* value to make it slide NOT automatically  */
const intervalTime = 3000; /* value in milliSec by which it'll be moving automatically when auto != false; */
let slideInterval; /* variable initialised to keep a track of variable intervalTime */

const nextSlide = () => {
    const current = document.querySelector(".current")

    current.classList.remove("current");

    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add("current");
    } else {
        slides[0].classList.add("current");
    }
};

const prevSlide = () => {
    const current = document.querySelector(".current");
    current.classList.remove("current");
    if (current.previousElementSibling) {
        current.previousElementSibling.classList.add("current");
    } else {
        slides[slides.length - 1].classList.add("current");
    }
};

prevButton.addEventListener("click", (e) => {
    console.log(e);
    prevSlide();
})

nextButton.addEventListener("click", (e) => {
    console.log(e);
    nextSlide();
})