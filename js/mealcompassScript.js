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

      document.getElementById("mealcompassCatchphrase1").textContent =
        data.mealcompassCatchphrase1;
      document.getElementById("mealcompassCatchphrase2").textContent =
        data.mealcompassCatchphrase2;
      document.getElementById("mealcompassCatchphrase3").textContent =
        data.mealcompassCatchphrase3;
      document.getElementById("mealcompassCatchphrase4").textContent =
        data.mealcompassCatchphrase4;
      document.getElementById("mealcompassCatchphrase5").textContent =
        data.mealcompassCatchphrase5;
      document.getElementById("projecUserInterview").textContent =
        data.projecUserInterview;
      document.getElementById("projectPersona").textContent =
        data.projectPersona;
      document.getElementById("projectTagUserFlow").textContent =
        data.projectTagUserFlow;
      document.getElementById("projectTagLowFi").textContent =
        data.projectTagLowFi;
      document.getElementById("projectTagUsabilityTesting").textContent =
        data.projectTagUsabilityTesting;
      document.getElementById("projectStyleGuide").textContent =
        data.projectStyleGuide;
      document.getElementById("projectTagHighFi").textContent =
        data.projectTagHighFi;
      document.getElementById("projectTagPrototype").textContent =
        data.projectTagPrototype;
      document.getElementById("projectTagMockups").textContent =
        data.projectTagMockups;
      document.getElementById("projectMVP").textContent = data.projectMVP;
      document.getElementById("projectHeadingBackground").textContent =
        data.projectHeadingBackground;
      document.getElementById("mealcompassBackground").textContent =
        data.mealcompassBackground;
      document.getElementById("projectSolution").textContent =
        data.projectSolution;
      document.getElementById("mealcompassSolution").textContent =
        data.mealcompassSolution;
      document.getElementById("mealcompassHeadline1").textContent =
        data.mealcompassHeadline1;
      document.getElementById("mealcompassHeading5WH").textContent =
        data.mealcompassHeading5WH;
      document.getElementById("mealcompass5WH").textContent =
        data.mealcompass5WH;
      document.getElementById("mealcompassWho").textContent =
        data.mealcompassWho;
      document.getElementById("mealcompassWhoAnswer").textContent =
        data.mealcompassWhoAnswer;
      document.getElementById("mealcompassWhat").textContent =
        data.mealcompassWhat;
      document.getElementById("mealcompassWhatAnswer").textContent =
        data.mealcompassWhatAnswer;
      document.getElementById("mealcompassWhere").textContent =
        data.mealcompassWhere;
      document.getElementById("mealcompassWhereAnswer").textContent =
        data.mealcompassWhereAnswer;
      document.getElementById("mealcompassWhen").textContent =
        data.mealcompassWhen;
      document.getElementById("mealcompassWhenAnswer").textContent =
        data.mealcompassWhenAnswer;
      document.getElementById("mealcompassWhy").textContent =
        data.mealcompassWhy;
      document.getElementById("mealcompassWhyAnswer").textContent =
        data.mealcompassWhyAnswer;
      document.getElementById("mealcompassHow").textContent =
        data.mealcompassHow;
      document.getElementById("mealcompassHowAnswer").textContent =
        data.mealcompassHowAnswer;
      document.getElementById("mealcompassHeadingUserInterviews").textContent =
        data.mealcompassHeadingUserInterviews;
      document.getElementById("mealcompassUserInterviews").textContent =
        data.mealcompassUserInterviews;
      document.getElementById("mealcompassFrustrations").textContent =
        data.mealcompassFrustrations;
      document.getElementById("mealcompassFrustration1").textContent =
        data.mealcompassFrustration1;
      document.getElementById("mealcompassFrustration2").textContent =
        data.mealcompassFrustration2;
      document.getElementById("mealcompassGoals").textContent =
        data.mealcompassGoals;
      document.getElementById("mealcompassGoal1").textContent =
        data.mealcompassGoal1;
      document.getElementById("mealcompassGoal2").textContent =
        data.mealcompassGoal2;
      document.getElementById("mealcompassGoal3").textContent =
        data.mealcompassGoal3;
      document.getElementById("mealcompassGoal4").textContent =
        data.mealcompassGoal4;
      document.getElementById("mealcompassHeadingPersonas").textContent =
        data.mealcompassHeadingPersonas;
      document.getElementById("mealcompassPersonas").textContent =
        data.mealcompassPersonas;
      document.getElementById("mealcompassHeadline2").textContent =
        data.mealcompassHeadline2;
      document.getElementById("mealcompassHeadingMVP").textContent =
        data.mealcompassHeadingMVP;
      document.getElementById("mealcompassMVP1").textContent =
        data.mealcompassMVP1;
      document.getElementById("mealcompassMVP2").textContent =
        data.mealcompassMVP2;
      document.getElementById("mealcompassObjective").textContent =
        data.mealcompassObjective;
      document.getElementById("mealcompassObjective1").textContent =
        data.mealcompassObjective1;
      document.getElementById("mealcompassObjective2").textContent =
        data.mealcompassObjective2;
      document.getElementById("mealcompassHeadingHypothesis").textContent =
        data.mealcompassHeadingHypothesis;
      document.getElementById("mealcompassHypothesis").textContent =
        data.mealcompassHypothesis;
      document.getElementById("mealcompassSucecessMetrics").textContent =
        data.mealcompassSucecessMetrics;
      document.getElementById("mealcompassSuccessMetric1").textContent =
        data.mealcompassSuccessMetric1;
      document.getElementById("mealcompassSuccessMetric2").textContent =
        data.mealcompassSuccessMetric2;
      document.getElementById("mealcompassSuccessMetric3").textContent =
        data.mealcompassSuccessMetric3;
      document.getElementById("mealcompassSuccessMetric4").textContent =
        data.mealcompassSuccessMetric4;
      document.getElementById("mealcompassSuccessMetric5").textContent =
        data.mealcompassSuccessMetric5;
      document.getElementById("mealcompassUserStories").textContent =
        data.mealcompassUserStories;
      document.getElementById("mealcompassUserStory1").textContent =
        data.mealcompassUserStory1;
      document.getElementById("mealcompassHeadingRequirements1").textContent =
        data.mealcompassHeadingRequirements1;
      document.getElementById("mealcompassRequirement1").textContent =
        data.mealcompassRequirement1;
      document.getElementById("mealcompassRequirement2").textContent =
        data.mealcompassRequirement2;
      document.getElementById("mealcompassUserStory2").textContent =
        data.mealcompassUserStory2;
      document.getElementById("mealcompassHeadingRequirements2").textContent =
        data.mealcompassHeadingRequirements2;
      document.getElementById("mealcompassRequirement3").textContent =
        data.mealcompassRequirement3;
      document.getElementById("mealcompassRequirement4").textContent =
        data.mealcompassRequirement4;
      document.getElementById("mealcompassUserStory3").textContent =
        data.mealcompassUserStory3;
      document.getElementById("mealcompassHeadingRequirements3").textContent =
        data.mealcompassHeadingRequirements3;
      document.getElementById("mealcompassRequirement5").textContent =
        data.mealcompassRequirement5;
      document.getElementById("mealcompassRequirement6").textContent =
        data.mealcompassRequirement6;
      document.getElementById("mealcompassRequirement6").textContent =
        data.mealcompassRequirement6;
      document.getElementById("mealcompassUserStory4").textContent =
        data.mealcompassUserStory4;
      document.getElementById("mealcompassHeadingRequirements4").textContent =
        data.mealcompassHeadingRequirements4;
      document.getElementById("mealcompassRequirement7").textContent =
        data.mealcompassRequirement7;
      document.getElementById("mealcompassHeadline3").textContent =
        data.mealcompassHeadline3;
      document.getElementById("mealcompassHeadingUserFlow").textContent =
        data.mealcompassHeadingUserFlow;
      document.getElementById("mealcompassUserFlow").textContent =
        data.mealcompassUserFlow;
      document.getElementById("projectUserFlowStart").textContent =
        data.projectUserFlowStart;
      document.getElementById("projectUserFlowScreen").textContent =
        data.projectUserFlowScreen;
      document.getElementById("projectUserFlowDecision").textContent =
        data.projectUserFlowDecision;
      document.getElementById("mealcompassHeadingLowFi").textContent =
        data.mealcompassHeadingLowFi;
      document.getElementById("mealcompassLowFi").textContent =
        data.mealcompassLowFi;
      document.getElementById("mealcompassHeadline4").textContent =
        data.mealcompassHeadline4;
      document.getElementById("mealcompassHeadingUsability").textContent =
        data.mealcompassHeadingUsability;
      document.getElementById("mealcompassUsability").textContent =
        data.mealcompassUsability;
      document.getElementById("mealcompassHeadingProlem1").textContent =
        data.mealcompassHeadingProlem1;
      document.getElementById("mealcompassProblem1").textContent =
        data.mealcompassProblem1;
      document.getElementById("mealcompassProblem2").textContent =
        data.mealcompassProblem2;
      document.getElementById("mealcompassHeadingSolution1").textContent =
        data.mealcompassHeadingSolution1;
      document.getElementById("mealcompassSolution1").textContent =
        data.mealcompassSolution1;
      document.getElementById("mealcompassHeadingProlem2").textContent =
        data.mealcompassHeadingProlem2;
      document.getElementById("mealcompassProblem3").textContent =
        data.mealcompassProblem3;
      document.getElementById("mealcompassHeadingSolution2").textContent =
        data.mealcompassHeadingSolution2;
      document.getElementById("mealcompassSolution2").textContent =
        data.mealcompassSolution2;
      document.getElementById("mealcompassHeadingProblem3").textContent =
        data.mealcompassHeadingProblem3;
      document.getElementById("mealcompassProblem4").textContent =
        data.mealcompassProblem4;
      document.getElementById("mealcompassHeadingSolution3").textContent =
        data.mealcompassHeadingSolution3;
      document.getElementById("mealcompassSolution3").textContent =
        data.mealcompassSolution3;
      document.getElementById("mealcompassHeadingStyleGuide").textContent =
        data.mealcompassHeadingStyleGuide;
      document.getElementById("mealcompassStyleGuide").textContent =
        data.mealcompassStyleGuide;
      document.getElementById("projectColors").textContent = data.projectColors;
      document.getElementById("mealcompassPrimary").textContent =
        data.mealcompassPrimary;
      document.getElementById("mealcompassSecondary").textContent =
        data.mealcompassSecondary;
      document.getElementById("projectTypography").textContent =
        data.projectTypography;
      document.getElementById("projectHeadingButtons").textContent =
        data.projectHeadingButtons;
      document.getElementById("mealcompassTypographyType1").textContent =
        data.mealcompassTypographyType1;
      document.getElementById("mealcompassTypographyType2").textContent =
        data.mealcompassTypographyType2;
      document.getElementById("projectTertiary").textContent =
        data.projectTertiary;
      document.getElementById("projectIcons").textContent = data.projectIcons;
      document.getElementById("projectLogo").textContent = data.projectLogo;
      document.getElementById("mealcompassHeadingHighFi").textContent =
        data.mealcompassHeadingHighFi;
      document.getElementById("mealcompassHighFi").textContent =
        data.mealcompassHighFi;
      document.getElementById("mealcompassFlow1").textContent =
        data.mealcompassFlow1;
      document.getElementById("mealcompassFunctionality1").textContent =
        data.mealcompassFunctionality1;
      document.getElementById("mealcompassFlow2").textContent =
        data.mealcompassFlow2;
      document.getElementById("mealcompassFunctionality2").textContent =
        data.mealcompassFunctionality2;
      document.getElementById("mealcompassFunctionality3").textContent =
        data.mealcompassFunctionality3;
      document.getElementById("mealcompassFunctionality4").textContent =
        data.mealcompassFunctionality4;
      document.getElementById("mealcompassFlow3").textContent =
        data.mealcompassFlow3;
      document.getElementById("mealcompassFunctionality5").textContent =
        data.mealcompassFunctionality5;
      document.getElementById("mealcompassFunctionality6").textContent =
        data.mealcompassFunctionality6;
      document.getElementById("mealcompassfHeadingLearning1").textContent =
        data.mealcompassfHeadingLearning1;
      document.getElementById("mealcompassLearning1").textContent =
        data.mealcompassLearning1;
      document.getElementById("mealcompassHeadingLearning2").textContent =
        data.mealcompassHeadingLearning2;
      document.getElementById("mealcompassLearning2").textContent =
        data.mealcompassLearning2;
      document.getElementById("footerThankYou").textContent =
        data.footerThankYou;
      document.getElementById("headlineLearnings").textContent =
        data.headlineLearnings;
      document.getElementById("projectOverview").textContent =
        data.projectOverview;

      document.getElementById("mealcompassPersona1x1").srcset =
        data.mealcompassPersona1x1;
      document.getElementById("mealcompassPersona1x2").src =
        data.mealcompassPersona1x2;
      document.getElementById("mealcompassPersona2x1").srcset =
        data.mealcompassPersona2x1;
      document.getElementById("mealcompassPersona2x2").src =
        data.mealcompassPersona2x2;
      document.getElementById("mealcompassPersona3x1").srcset =
        data.mealcompassPersona3x1;
      document.getElementById("mealcompassPersona3x2").src =
        data.mealcompassPersona3x2;
      document.getElementById("mealcompassImageUserFlow1").srcset =
        data.mealcompassImageUserFlow1;
      document.getElementById("mealcompassImageUserFlow2").src =
        data.mealcompassImageUserFlow2;
      document.getElementById("mealcompassPersona1C").src =
        data.mealcompassPersona1C;
      document.getElementById("mealcompassPersona2C").src =
        data.mealcompassPersona2C;
      document.getElementById("mealcompassPersona3C").src =
        data.mealcompassPersona3C;
    })
    .catch((error) => console.error("Error loading language file:", error));
}

function switchLanguage(language) {
  loadTranslations(language);
  localStorage.setItem("language", language); // Save preference
}

document.addEventListener("DOMContentLoaded", () => {
  // Get saved language or browser language
  const savedLanguage = localStorage.getItem("language");
  const browserLanguage = navigator.language.slice(0, 2); // e.g., 'en', 'fr'
  const languageToLoad =
    savedLanguage || (translations[browserLanguage] ? browserLanguage : "jp");
  loadTranslations(languageToLoad);
});

// PERSONA CAROUSEL

const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const btnNext = document.querySelector(".carousel__button--right");
const btnPrev = document.querySelector(".carousel__button--left");
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);

const slidesWidth = slides[0].getBoundingClientRect().width;
console.log(slidesWidth);

// Arrange slides next to each other
const setSlidesPosition = function (slide, index) {
  slide.style.left = `${842 * index}px`;
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
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex((slide) => slide === nextSlide);

  // move to next slide
  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  hideShowArrows(slides, btnPrev, btnNext, nextIndex);
});

//Previous Button
btnPrev.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
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

  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  hideShowArrows(slides, btnPrev, btnNext, targetIndex);
});
