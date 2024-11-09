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

      document.getElementById("plantwiseCatchphrase1").textContent =
        data.plantwiseCatchphrase1;
      document.getElementById("plantwiseCatchphrase2").textContent =
        data.plantwiseCatchphrase2;
      document.getElementById("plantwiseCatchphrase3").textContent =
        data.plantwiseCatchphrase3;
      document.getElementById("plantwiseCatchphrase4").textContent =
        data.plantwiseCatchphrase4;
      document.getElementById("plantwiseCatchphrase5").textContent =
        data.plantwiseCatchphrase5;
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
      // document.getElementById("projectButtonPrototype").textContent =
      //   data.projectButtonPrototype;
      document.getElementById("projectHeadingBackground").textContent =
        data.projectHeadingBackground;
      document.getElementById("plantwiseBackground").textContent =
        data.plantwiseBackground;
      document.getElementById("projectChallenges").textContent =
        data.projectChallenges;
      document.getElementById("plantwiseChallenge1").textContent =
        data.plantwiseChallenge1;
      document.getElementById("plantwiseChallenge2").textContent =
        data.plantwiseChallenge2;

      document.getElementById("plantwiseHeadline1").textContent =
        data.plantwiseHeadline1;
      document.getElementById("plantwiseHeadingUserInterview").textContent =
        data.plantwiseHeadingUserInterview;
      document.getElementById("plantwiseUserInterview").textContent =
        data.plantwiseUserInterview;
      document.getElementById("projectPainPoints").textContent =
        data.projectPainPoints;
      document.getElementById("plantwisePainPoint1").textContent =
        data.plantwisePainPoint1;
      document.getElementById("plantwisePainPoint2").textContent =
        data.plantwisePainPoint2;
      document.getElementById("plantwisePainPoint3").textContent =
        data.plantwisePainPoint3;
      document.getElementById("projectNeeds").textContent = data.projectNeeds;
      document.getElementById("plantwiseNeed1").textContent =
        data.plantwiseNeed1;
      document.getElementById("plantwiseNeed2").textContent =
        data.plantwiseNeed2;
      document.getElementById("plantwiseNeed3").textContent =
        data.plantwiseNeed3;
      document.getElementById("plantwiseHeadingPersona").textContent =
        data.plantwiseHeadingPersona;
      document.getElementById("plantwisePersona").textContent =
        data.plantwisePersona;
      document.getElementById("plantwisePersonaQuote1").textContent =
        data.plantwisePersonaQuote1;
      document.getElementById("plantwisePersonaItemHeading1").textContent =
        data.plantwisePersonaItemHeading1;
      document.getElementById("plantwisePersonaItem1").textContent =
        data.plantwisePersonaItem1;
      document.getElementById("plantwisePersonaItemHeading2").textContent =
        data.plantwisePersonaItemHeading2;
      document.getElementById("plantwisePersonaItem2").textContent =
        data.plantwisePersonaItem2;
      document.getElementById("plantwisePersonaItemHeading3").textContent =
        data.plantwisePersonaItemHeading3;
      document.getElementById("plantwisePersonaItem3").textContent =
        data.plantwisePersonaItem3;
      document.getElementById("plantwisePersonaItemHeading4").textContent =
        data.plantwisePersonaItemHeading4;
      document.getElementById("plantwisePersonaItem4").textContent =
        data.plantwisePersonaItem4;
      document.getElementById("plantwisePersonaItemHeading5").textContent =
        data.plantwisePersonaItemHeading5;
      document.getElementById("plantwisePersonaItem5").textContent =
        data.plantwisePersonaItem5;
      document.getElementById("plantwisePersonaItemHeading6").textContent =
        data.plantwisePersonaItemHeading6;
      document.getElementById("plantwisePersonaItem6").textContent =
        data.plantwisePersonaItem6;
      document.getElementById("plantwisePersonaItem7").textContent =
        data.plantwisePersonaItem7;
      document.getElementById("plantwisePersonaItemHeading7").textContent =
        data.plantwisePersonaItemHeading7;
      document.getElementById("plantwisePersonaItem8").textContent =
        data.plantwisePersonaItem8;
      document.getElementById("plantwisePersonaItem9").textContent =
        data.plantwisePersonaItem9;
      document.getElementById("plantwisePersonaItem10").textContent =
        data.plantwisePersonaItem10;
      document.getElementById("plantwisePersonaItemHeading8").textContent =
        data.plantwisePersonaItemHeading8;
      document.getElementById("plantwisePersonaItem11").textContent =
        data.plantwisePersonaItem11;
      document.getElementById("plantwisePersonaItem12").textContent =
        data.plantwisePersonaItem12;
      document.getElementById("plantwisePersonaQuote2").textContent =
        data.plantwisePersonaQuote2;
      document.getElementById("plantwisePersonaItemHeading9").textContent =
        data.plantwisePersonaItemHeading9;
      document.getElementById("plantwisePersonaItem13").textContent =
        data.plantwisePersonaItem13;
      document.getElementById("plantwisePersonaItemHeading10").textContent =
        data.plantwisePersonaItemHeading10;
      document.getElementById("plantwisePersonaItem14").textContent =
        data.plantwisePersonaItem14;
      document.getElementById("plantwisePersonaItemHeading11").textContent =
        data.plantwisePersonaItemHeading11;
      document.getElementById("plantwisePersonaItem15").textContent =
        data.plantwisePersonaItem15;
      document.getElementById("plantwisePersonaItemHeading12").textContent =
        data.plantwisePersonaItemHeading12;
      document.getElementById("plantwisePersonaItem16").textContent =
        data.plantwisePersonaItem16;
      document.getElementById("plantwisePersonaItemHeading13").textContent =
        data.plantwisePersonaItemHeading13;
      document.getElementById("plantwisePersonaItem17").textContent =
        data.plantwisePersonaItem17;
      document.getElementById("plantwisePersonaItemHeading14").textContent =
        data.plantwisePersonaItemHeading14;
      document.getElementById("plantwisePersonaItem18").textContent =
        data.plantwisePersonaItem18;
      document.getElementById("plantwisePersonaItem19").textContent =
        data.plantwisePersonaItem19;
      document.getElementById("plantwisePersonaItemHeading15").textContent =
        data.plantwisePersonaItemHeading15;
      document.getElementById("plantwisePersonaItem20").textContent =
        data.plantwisePersonaItem20;
      document.getElementById("plantwisePersonaItem21").textContent =
        data.plantwisePersonaItem21;
      document.getElementById("plantwisePersonaItem22").textContent =
        data.plantwisePersonaItem22;
      document.getElementById("plantwisePersonaItem23").textContent =
        data.plantwisePersonaItem23;
      document.getElementById("plantwisePersonaItemHeading16").textContent =
        data.plantwisePersonaItemHeading16;
      document.getElementById("plantwisePersonaItem24").textContent =
        data.plantwisePersonaItem24;
      document.getElementById("plantwisePersonaItem25").textContent =
        data.plantwisePersonaItem25;
      document.getElementById("plantwisePersonaItem26").textContent =
        data.plantwisePersonaItem26;

      document.getElementById("plantwiseHeadline2").textContent =
        data.plantwiseHeadline2;
      document.getElementById("plantwiseHeadingUserFlow").textContent =
        data.plantwiseHeadingUserFlow;
      document.getElementById("plantwiseUserFlow1").textContent =
        data.plantwiseUserFlow1;
      document.getElementById("plantwiseUserFlow2").textContent =
        data.plantwiseUserFlow2;
      document.getElementById("projectUserFlowStart").textContent =
        data.projectUserFlowStart;
      document.getElementById("projectUserFlowScreen").textContent =
        data.projectUserFlowScreen;
      document.getElementById("projectUserFlowDecision").textContent =
        data.projectUserFlowDecision;
      document.getElementById("plantwiseHeadingLowFi").textContent =
        data.plantwiseHeadingLowFi;
      document.getElementById("plantwiseLowFi").textContent =
        data.plantwiseLowFi;
      document.getElementById("plantwiseHeadingUsabilityTesting").textContent =
        data.plantwiseHeadingUsabilityTesting;
      document.getElementById("plantwiseUsabilityTesting1").textContent =
        data.plantwiseUsabilityTesting1;
      document.getElementById("plantwiseUsabilityTesting2").textContent =
        data.plantwiseUsabilityTesting2;
      document.getElementById("plantwiseHeadingProblem1").textContent =
        data.plantwiseHeadingProblem1;
      document.getElementById("plantwiseProblem1").textContent =
        data.plantwiseProblem1;
      document.getElementById("plantwiseProblem2").textContent =
        data.plantwiseProblem2;
      document.getElementById("plantwiseHeadingSolution1").textContent =
        data.plantwiseHeadingSolution1;
      document.getElementById("plantwiseSolution1").textContent =
        data.plantwiseSolution1;
      document.getElementById("plantwiseHeadingProblem2").textContent =
        data.plantwiseHeadingProblem2;
      document.getElementById("plantwiseProblem3").textContent =
        data.plantwiseProblem3;
      document.getElementById("plantwiseHeadingSolution2").textContent =
        data.plantwiseHeadingSolution2;
      document.getElementById("plantwiseSolution2").textContent =
        data.plantwiseSolution2;
      document.getElementById("plantwiseHeadline3").textContent =
        data.plantwiseHeadline3;
      document.getElementById("plantwiseStyleGuide1").textContent =
        data.plantwiseStyleGuide1;
      document.getElementById("plantwiseStyleGuide2").textContent =
        data.plantwiseStyleGuide2;
      document.getElementById("projectColors").textContent = data.projectColors;
      document.getElementById("projectPrimary").textContent =
        data.projectPrimary;
      document.getElementById("projectSecondary").textContent =
        data.projectSecondary;
      document.getElementById("projectAccent").textContent = data.projectAccent;
      document.getElementById("projectBlack").textContent = data.projectBlack;
      document.getElementById("projectWhite").textContent = data.projectWhite;
      document.getElementById("projectTypography").textContent =
        data.projectTypography;
      document.getElementById("projectHeadingButtons").textContent =
        data.projectHeadingButtons;
      document.getElementById("projectPrimaryButton").textContent =
        data.projectPrimaryButton;
      document.getElementById("projectSecondaryButton").textContent =
        data.projectSecondaryButton;
      document.getElementById("plantwsieHeadingFlow1").textContent =
        data.plantwsieHeadingFlow1;
      document.getElementById("plantwiseFlow1").textContent =
        data.plantwiseFlow1;
      document.getElementById("plantwiseFunctionality1").textContent =
        data.plantwiseFunctionality1;
      document.getElementById("plantwiseFunctionality2").textContent =
        data.plantwiseFunctionality2;
      document.getElementById("plantwiseFunctionality3").textContent =
        data.plantwiseFunctionality3;
      document.getElementById("plantwiseFunctionality4").textContent =
        data.plantwiseFunctionality4;
      document.getElementById("plantwsieHeadingFlow2").textContent =
        data.plantwsieHeadingFlow2;
      document.getElementById("plantwiseFlow2").textContent =
        data.plantwiseFlow2;
      document.getElementById("plantwiseFunctionality5").textContent =
        data.plantwiseFunctionality5;
      document.getElementById("plantwiseFunctionality6").textContent =
        data.plantwiseFunctionality6;
      document.getElementById("plantwiseFunctionality7").textContent =
        data.plantwiseFunctionality7;
      document.getElementById("plantwsieHeadingFlow3").textContent =
        data.plantwsieHeadingFlow3;
      document.getElementById("plantwiseFlow3").textContent =
        data.plantwiseFlow3;
      document.getElementById("plantwiseFunctionality8").textContent =
        data.plantwiseFunctionality8;
      document.getElementById("plantwiseFunctionality9").textContent =
        data.plantwiseFunctionality9;
      document.getElementById("plantwiseFunctionality10").textContent =
        data.plantwiseFunctionality10;
      document.getElementById("plantwiseFunctionality11").textContent =
        data.plantwiseFunctionality11;
      document.getElementById("plantwiseFunctionality12").textContent =
        data.plantwiseFunctionality12;
      document.getElementById("plantwiseFunctionality13").textContent =
        data.plantwiseFunctionality13;
      document.getElementById("plantwiseHeadingLearning1").textContent =
        data.plantwiseHeadingLearning1;
      document.getElementById("plantwiseLearning1").textContent =
        data.plantwiseLearning1;
      document.getElementById("projectOverview").textContent =
        data.projectOverview;
      document.getElementById("headlineLearnings").textContent =
        data.headlineLearnings;

      document.getElementById("plantwiseUserFlowImage").src =
        data.plantwiseUserFlowImage;
      document.getElementById("plantwiseSpeechBubble1").srcset =
        data.plantwiseSpeechBubble1;
      document.getElementById("plantwiseSpeechBubble2").src =
        data.plantwiseSpeechBubble2;
      document.getElementById("plantwiseSpeechBubble3").srcset =
        data.plantwiseSpeechBubble3;
      document.getElementById("plantwiseSpeechBubble4").src =
        data.plantwiseSpeechBubble4;
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
