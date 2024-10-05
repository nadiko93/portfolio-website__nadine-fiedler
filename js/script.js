// RESPONSIVE NAVBAR

const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", function () {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
    document.querySelector("body").classList.add("open-navbar");
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
    document.querySelector("body").classList.remove("open-navbar");
  }
});

// HERO SECTION TYPEWRITER EFFECT

const textElement = document.querySelector(".typewriter-text");
const words = ["Web Designer", "UI/UX Designer", "Language Learner"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;

function type() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    textElement.textContent = currentWord.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, typingSpeed / 2);
    }
  } else {
    textElement.textContent = currentWord.substring(0, charIndex++);
    if (charIndex > currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else {
      setTimeout(type, typingSpeed);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});

// CAROUSEL

const carousel = function (id) {
  const track = document.querySelector(id + " .carousel__track");
  const slides = Array.from(track.children);
  const btnNext = document.querySelector(id + " .carousel__button--right");
  const btnPrev = document.querySelector(id + " .carousel__button--left");
  const dotsNav = document.querySelector(id + " .carousel__nav");
  const dots = Array.from(dotsNav.children);

  const slidesWidth = slides[0].getBoundingClientRect().width;

  // Arrange slides next to each other
  const setSlidesPosition = function (slide, index) {
    slide.style.left = `${slidesWidth * index}px`;
  };

  slides.forEach(setSlidesPosition);

  // Moving Slides
  const moveToSlide = function (track, currentSlide, targetSlide) {
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
  };

  const updateDots = function (currentDot, targetDot) {
    currentDot.classList.remove("current-slide");
    targetDot.classList.add("current-slide");
  };

  const hideShowArrows = function (slides, btnPrev, btnNext, targetIndex) {
    if (targetIndex === 0) {
      btnPrev.classList.add("is-hidden");
      btnNext.classList.remove("is-hidden");
    } else if (targetIndex === slides.length - 1) {
      btnPrev.classList.remove("is-hidden");
      btnNext.classList.add("is-hidden");
    } else {
      btnPrev.classList.remove("is-hidden");
      btnNext.classList.remove("is-hidden");
    }
  };

  // Next Button
  btnNext.addEventListener("click", (e) => {
    const currentSlide = track.querySelector(id + " .current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector(id + " .current-slide");
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex((slide) => slide === nextSlide);

    // move to next slide
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, btnPrev, btnNext, nextIndex);
  });

  //Previous Button
  btnPrev.addEventListener("click", (e) => {
    const currentSlide = track.querySelector(id + " .current-slide");
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector(id + " .current-slide");
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex((slide) => slide === prevSlide);

    // move to next slide
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, btnPrev, btnNext, prevIndex);
  });

  // Dot Navigation
  dotsNav.addEventListener("click", (e) => {
    // What indicator was clicked on?
    const targetDot = e.target.closest("button");

    if (!targetDot) return;

    const currentSlide = track.querySelector(id + " .current-slide");
    const currentDot = dotsNav.querySelector(id + " .current-slide");
    const targetIndex = dots.findIndex((dot) => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, btnPrev, btnNext, targetIndex);
  });
};

carouselA = carousel("#carousel--a");
carouselB = carousel("#carousel--b");
carouselC = carousel("#carousel--c");
carouselD = carousel("#carousel--d");
