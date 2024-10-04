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

