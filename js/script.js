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
const words = ["UI/UX Designer", "Web Designer", "Language Learner"];
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

// Change language

const translations = {
  jp: "../languages/jp.json",
  en: "../languages/en.json",
};

function loadTranslations(language) {
  fetch(translations[language])
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("styleSheet").href = data.styleSheet;

      document.getElementById("hpAbout1").textContent = data.hpAbout1;
      document.getElementById("hpAbout2").textContent = data.hpAbout2;
      document.getElementById("hpAbout3").textContent = data.hpAbout3;
      document.getElementById("hpAbout4").textContent = data.hpAbout4;
      document.getElementById("hpAbout5").textContent = data.hpAbout5;
      document.getElementById("hpAbout6").textContent = data.hpAbout6;
      document.getElementById("hpAbout7").textContent = data.hpAbout7;
      document.getElementById("hpAbout8").textContent = data.hpAbout8;
      document.getElementById("hpAbout9").textContent = data.hpAbout9;
      document.getElementById("hpAbout10").textContent = data.hpAbout10;
      document.getElementById("hpAbout11").textContent = data.hpAbout11;
      document.getElementById("hpAbout12").textContent = data.hpAbout12;
      document.getElementById("hpAbout13").textContent = data.hpAbout13;
      document.getElementById("hpAbout14").textContent = data.hpAbout14;
      document.getElementById("hpAbout15").textContent = data.hpAbout15;
      // document.getElementById("hpAbout16").textContent = data.hpAbout16;
      // document.getElementById("hpAbout17").textContent = data.hpAbout17;
      // document.getElementById("hpAbout18").textContent = data.hpAbout18;
      // document.getElementById("hpAbout19").textContent = data.hpAbout19;
      // document.getElementById("hpAbout20").textContent = data.hpAbout20;
      // document.getElementById("hpAbout21").textContent = data.hpAbout21;
      // document.getElementById("hpAbout22").textContent = data.hpAbout22;
      // document.getElementById("hpAbout23").textContent = data.hpAbout23;
      // document.getElementById("hpAbout24").textContent = data.hpAbout24;
      document.getElementById("hpAbout25").textContent = data.hpAbout25;
      document.getElementById("hpAbout26").textContent = data.hpAbout26;
      document.getElementById("hpProjectNamePlantwise").textContent =
        data.hpProjectNamePlantwise;
      document.getElementById("hpPlantwiseDescription").textContent =
        data.hpPlantwiseDescription;
      document.getElementById("tagNameUI1").textContent = data.tagNameUI1;
      document.getElementById("tagNameUX1").textContent = data.tagNameUX1;
      document.getElementById("tagNameMobileApp1").textContent =
        data.tagNameMobileApp1;
      document.getElementById("tagNameFintech1").textContent =
        data.tagNameFintech1;
      document.getElementById("tagNameGamification1").textContent =
        data.tagNameGamification1;
      document.getElementById("hpProjectNameLingoshelf").textContent =
        data.hpProjectNameLingoshelf;
      document.getElementById("hpLingoshelfDescription").textContent =
        data.hpLingoshelfDescription;
      document.getElementById("tagNameUI2").textContent = data.tagNameUI2;
      document.getElementById("tagNameUX2").textContent = data.tagNameUX2;
      document.getElementById("tagNameMobileApp2").textContent =
        data.tagNameMobileApp2;
      document.getElementById("tagNameLanguageLearning2").textContent =
        data.tagNameLanguageLearning2;
      document.getElementById("tagNamereading2").textContent =
        data.tagNamereading2;
      document.getElementById("footerThankYou").textContent =
        data.footerThankYou;

      document.getElementById("hpProjectNameMealcompass").textContent =
        data.hpProjectNameMealcompass;
      document.getElementById("hpMealcompassDescription").textContent =
        data.hpMealcompassDescription;
      document.getElementById("tagNameUI3").textContent = data.tagNameUI3;
      document.getElementById("tagNameUX3").textContent = data.tagNameUX3;
      document.getElementById("tagNameResponsiveApp").textContent =
        data.tagNameResponsiveApp;
      document.getElementById("tagNameRecipe").textContent = data.tagNameRecipe;
      document.getElementById("tagNameMealPlanner").textContent =
        data.tagNameMealPlanner;
    })
    .catch((error) => console.error("Error loading language file:", error));
}

let lang;

function switchLanguage(language) {
  console.log(lang);
  loadTranslations(language);
  localStorage.setItem("language", language); // Save preference
  lang = language;
}

console.log("lang");

if (lang === "jp") {
  document.querySelector("body").style.fontSize = "14px";
}

document.addEventListener("DOMContentLoaded", () => {
  // Get saved language or browser language
  const savedLanguage = localStorage.getItem("language");
  const browserLanguage = navigator.language.slice(0, 2); // e.g., 'en', 'fr'
  const languageToLoad =
    savedLanguage || (translations[browserLanguage] ? browserLanguage : "jp");
  loadTranslations(languageToLoad);
});
