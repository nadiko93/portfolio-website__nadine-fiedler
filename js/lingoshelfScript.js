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

      document.getElementById("footerThankYou").textContent =
        data.footerThankYou;
      document.getElementById("lingoshelfCatchphrase").textContent =
        data.lingoshelfCatchphrase;
      document.getElementById("projectOverview").textContent =
        data.projectOverview;
      document.getElementById("projectTagUserFlow").textContent =
        data.projectTagUserFlow;
      document.getElementById("projectTagLowFi").textContent =
        data.projectTagLowFi;
      document.getElementById("projectTagUsabilityTesting").textContent =
        data.projectTagUsabilityTesting;
      document.getElementById("projectTagHighFi").textContent =
        data.projectTagHighFi;
      document.getElementById("projectTagPrototype").textContent =
        data.projectTagPrototype;
      document.getElementById("projectTagMockups").textContent =
        data.projectTagMockups;
      // document.getElementById("projectButtonPrototype").textContent =
      //   data.projectButtonPrototype;
      document.getElementById("projectHeadingBackground").textContent =
        data.projectHeadingBackground;
      document.getElementById("lingoshelfBackground").textContent =
        data.lingoshelfBackground;
      document.getElementById("projectHeadingProblems").textContent =
        data.projectHeadingProblems;
      document.getElementById("lingoshelfProblem1").textContent =
        data.lingoshelfProblem1;
      document.getElementById("lingoshelfProblem2").textContent =
        data.lingoshelfProblem2;
      document.getElementById("lingoshelfProblem3").textContent =
        data.lingoshelfProblem3;
      document.getElementById("projectHeadingSolutions").textContent =
        data.projectHeadingSolutions;
      document.getElementById("lingoshelfSolution1").textContent =
        data.lingoshelfSolution1;
      document.getElementById("lingoshelfSolution2").textContent =
        data.lingoshelfSolution2;
      document.getElementById("lingoshelfSolution3").textContent =
        data.lingoshelfSolution3;
      document.getElementById("lingoshelfHeadline1").textContent =
        data.lingoshelfHeadline1;
      document.getElementById("lingoshelfHeading5WH").textContent =
        data.lingoshelfHeading5WH;
      document.getElementById("lingoshelf5WHExplanation1").textContent =
        data.lingoshelf5WHExplanation1;
      document.getElementById("lingoshelf5WHQuestion1").textContent =
        data.lingoshelf5WHQuestion1;
      document.getElementById("lingoshelf5WHAnswer1").textContent =
        data.lingoshelf5WHAnswer1;
      document.getElementById("lingoshelf5WHQuestion2").textContent =
        data.lingoshelf5WHQuestion2;
      document.getElementById("lingoshelf5WHAnswer2").textContent =
        data.lingoshelf5WHAnswer2;
      document.getElementById("lingoshelf5WHAnswer3").textContent =
        data.lingoshelf5WHAnswer3;
      document.getElementById("lingoshelf5WHQuestion3").textContent =
        data.lingoshelf5WHQuestion3;
      document.getElementById("lingoshelf5WHAnswer4").textContent =
        data.lingoshelf5WHAnswer4;
      document.getElementById("lingoshelf5WHAnswer5").textContent =
        data.lingoshelf5WHAnswer5;
      document.getElementById("lingoshelf5WHAnswer6").textContent =
        data.lingoshelf5WHAnswer6;
      document.getElementById("lingoshelfHeadline2").textContent =
        data.lingoshelfHeadline2;
      document.getElementById("lingoshelfUserFlowExplanation1").textContent =
        data.lingoshelfUserFlowExplanation1;
      document.getElementById("lingoshelfUserFlowExplanation2").textContent =
        data.lingoshelfUserFlowExplanation2;
      document.getElementById("projectUserFlowStart").textContent =
        data.projectUserFlowStart;
      document.getElementById("projectUserFlowScreen").textContent =
        data.projectUserFlowScreen;
      document.getElementById("projectUserFlowDecision").textContent =
        data.projectUserFlowDecision;
      document.getElementById("lingoshelfUserFlow1").textContent =
        data.lingoshelfUserFlow1;
      document.getElementById("lingoshelfLowFi1").textContent =
        data.lingoshelfLowFi1;
      document.getElementById("lingoshelfLowFi2").textContent =
        data.lingoshelfLowFi2;
      document.getElementById("lingoshelfLowFi3").textContent =
        data.lingoshelfLowFi3;
      document.getElementById("lingoshelfLowFi4").textContent =
        data.lingoshelfLowFi4;
      document.getElementById("lingoshelfLowFi5").textContent =
        data.lingoshelfLowFi5;
      document.getElementById("lingoshelfKeyPointHeading1").textContent =
        data.lingoshelfKeyPointHeading1;
      document.getElementById("lingoshelfUserFlowKeyPoint1").textContent =
        data.lingoshelfUserFlowKeyPoint1;
      document.getElementById("lingoshelfUserFlow2").textContent =
        data.lingoshelfUserFlow2;
      document.getElementById("lingoshelfLowFi6").textContent =
        data.lingoshelfLowFi6;
      document.getElementById("lingoshelfLowFi7").textContent =
        data.lingoshelfLowFi7;
      document.getElementById("lingoshelfKeyPointHeading2").textContent =
        data.lingoshelfKeyPointHeading2;
      document.getElementById("lingoshelfUserFlowKeyPoint2").textContent =
        data.lingoshelfUserFlowKeyPoint2;
      document.getElementById("lingoshelfUserFlow3").textContent =
        data.lingoshelfUserFlow3;
      document.getElementById("lingoshelfLowFi8").textContent =
        data.lingoshelfLowFi8;
      document.getElementById("lingoshelfLowFi9").textContent =
        data.lingoshelfLowFi9;
      document.getElementById("lingoshelfKeyPointHeading3").textContent =
        data.lingoshelfKeyPointHeading3;
      document.getElementById("lingoshelfUserFlowKeyPoint3").textContent =
        data.lingoshelfUserFlowKeyPoint3;
      document.getElementById("lingoshelfUserFlow4").textContent =
        data.lingoshelfUserFlow4;
      document.getElementById("lingoshelfLowFi10").textContent =
        data.lingoshelfLowFi10;
      document.getElementById("lingoshelfLowFi11").textContent =
        data.lingoshelfLowFi11;
      document.getElementById("lingoshelfLowFi12").textContent =
        data.lingoshelfLowFi12;
      document.getElementById("lingoshelfKeyPointHeading4").textContent =
        data.lingoshelfKeyPointHeading4;
      document.getElementById("lingoshelfUserFlowKeyPoint4").textContent =
        data.lingoshelfUserFlowKeyPoint4;

      document.getElementById("lingoshelfHeadline3").textContent =
        data.lingoshelfHeadline3;
      document.getElementById("lingoshelfHeadingWireframes").textContent =
        data.lingoshelfHeadingWireframes;
      document.getElementById("lingoshelfWireframesExplanation").textContent =
        data.lingoshelfWireframesExplanation;
      document.getElementById("lingoshelfHeadingUsability").textContent =
        data.lingoshelfHeadingUsability;
      document.getElementById("lingoshelfUsabilityExplanation").textContent =
        data.lingoshelfUsabilityExplanation;
      document.getElementById(
        "lingoshelfHeadingUsabilityProblem1"
      ).textContent = data.lingoshelfHeadingUsabilityProblem1;
      document.getElementById("lingoshelfUsabilityProblem1").textContent =
        data.lingoshelfUsabilityProblem1;
      document.getElementById(
        "lingoshelfHeadingUsabilitySolution1"
      ).textContent = data.lingoshelfHeadingUsabilitySolution1;
      document.getElementById("lingoshelfUsabilitySolution1").textContent =
        data.lingoshelfUsabilitySolution1;
      document.getElementById(
        "lingoshelfHeadingUsabilityProblem2"
      ).textContent = data.lingoshelfHeadingUsabilityProblem2;
      document.getElementById("lingoshelfUsabilityProblem2").textContent =
        data.lingoshelfUsabilityProblem2;
      document.getElementById(
        "lingoshelfHeadingUsabilitySolution2"
      ).textContent = data.lingoshelfHeadingUsabilitySolution2;
      document.getElementById("lingoshelfUsabilitySolution2").textContent =
        data.lingoshelfUsabilitySolution2;
      document.getElementById("lingoshelfUsabilitySolution3").textContent =
        data.lingoshelfUsabilitySolution3;
      document.getElementById("lingoshelfUsabilitySolution4").textContent =
        data.lingoshelfUsabilitySolution4;

      document.getElementById("lingoshelfHeadline4").textContent =
        data.lingoshelfHeadline4;
      document.getElementById("lingoshelfHeadingScreens1").textContent =
        data.lingoshelfHeadingScreens1;
      document.getElementById("lingoshelfScreens1").textContent =
        data.lingoshelfScreens1;
      document.getElementById("lingoshelfFunctionality1").textContent =
        data.lingoshelfFunctionality1;
      document.getElementById("lingoshelfFunctionality2").textContent =
        data.lingoshelfFunctionality2;
      document.getElementById("lingoshelfFunctionality3").textContent =
        data.lingoshelfFunctionality3;
      document.getElementById("lingoshelfFunctionality4").textContent =
        data.lingoshelfFunctionality4;
      document.getElementById("lingoshelfFunctionality5").textContent =
        data.lingoshelfFunctionality5;
      document.getElementById("lingoshelfFunctionality6").textContent =
        data.lingoshelfFunctionality6;
      document.getElementById("lingoshelfHeadingScreens2").textContent =
        data.lingoshelfHeadingScreens2;
      document.getElementById("lingoshelfScreens2").textContent =
        data.lingoshelfScreens2;
      document.getElementById("lingoshelfFunctionality7").textContent =
        data.lingoshelfFunctionality7;
      document.getElementById("lingoshelfFunctionality8").textContent =
        data.lingoshelfFunctionality8;
      document.getElementById("lingoshelfFunctionality9").textContent =
        data.lingoshelfFunctionality9;
      document.getElementById("lingoshelfFunctionality10").textContent =
        data.lingoshelfFunctionality10;
      document.getElementById("lingoshelfFunctionality11").textContent =
        data.lingoshelfFunctionality11;
      document.getElementById("lingoshelfFunctionality12").textContent =
        data.lingoshelfFunctionality12;
      document.getElementById("lingoshelfHeadingScreens3").textContent =
        data.lingoshelfHeadingScreens3;
      document.getElementById("lingoshelfScreens3").textContent =
        data.lingoshelfScreens3;
      document.getElementById("lingoshelfFunctionality13").textContent =
        data.lingoshelfFunctionality13;
      document.getElementById("lingoshelfFunctionality14").textContent =
        data.lingoshelfFunctionality14;
      document.getElementById("lingoshelfFunctionality15").textContent =
        data.lingoshelfFunctionality15;
      document.getElementById("lingoshelfFunctionality16").textContent =
        data.lingoshelfFunctionality16;
      document.getElementById("lingoshelfFunctionality17").textContent =
        data.lingoshelfFunctionality17;
      document.getElementById("lingoshelfFunctionality18").textContent =
        data.lingoshelfFunctionality18;
      document.getElementById("lingoshelfFunctionality19").textContent =
        data.lingoshelfFunctionality19;
      document.getElementById("lingoshelfFunctionality20").textContent =
        data.lingoshelfFunctionality20;
      document.getElementById("headlineLearnings").textContent =
        data.headlineLearnings;
      document.getElementById("lingoshelfHeadingLearning1").textContent =
        data.lingoshelfHeadingLearning1;
      document.getElementById("lingoshelfLearning1").textContent =
        data.lingoshelfLearning1;
      document.getElementById("lingoshelfHeadingLearning2").textContent =
        data.lingoshelfHeadingLearning2;
      document.getElementById("lingoshelfLearning2").textContent =
        data.lingoshelfLearning2;
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
