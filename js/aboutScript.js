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
        document.getElementById("hpAbout16").textContent = data.hpAbout16;
        document.getElementById("hpAbout17").textContent = data.hpAbout17;
        document.getElementById("hpAbout18").textContent = data.hpAbout18;
        document.getElementById("hpAbout19").textContent = data.hpAbout19;
        document.getElementById("hpAbout20").textContent = data.hpAbout20;
        document.getElementById("hpAbout21").textContent = data.hpAbout21;
        document.getElementById("hpAbout22").textContent = data.hpAbout22;
        document.getElementById("hpAbout23").textContent = data.hpAbout23;
        document.getElementById("hpAbout24").textContent = data.hpAbout24;
        document.getElementById("hpAbout25").textContent = data.hpAbout25;
        document.getElementById("hpAbout26").textContent = data.hpAbout26;

        document.getElementById("aboutSkills").textContent = data.aboutSkills;
        document.getElementById("aboutSkillArea1").textContent = data.aboutSkillArea1;
        document.getElementById("aboutSkill1").textContent = data.aboutSkill1;
        document.getElementById("aboutSkillArea2").textContent = data.aboutSkillArea2;
        document.getElementById("aboutSkill2").textContent = data.aboutSkill2;
        document.getElementById("aboutSkillArea3").textContent = data.aboutSkillArea3;
        document.getElementById("aboutSkill3").textContent = data.aboutSkill3;
        document.getElementById("aboutTools").textContent = data.aboutTools;
        document.getElementById("footerThankYou").textContent =
        data.footerThankYou;

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
  