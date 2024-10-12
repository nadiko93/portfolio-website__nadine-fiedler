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
