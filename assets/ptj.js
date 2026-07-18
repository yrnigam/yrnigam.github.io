/*==================== NAV MENU TOGGLE ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ON LINK CLICK ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute("id");
    const navLinkEl = document.querySelector(`.nav__menu a[href*=${sectionId}]`);

    if (!navLinkEl) return;

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinkEl.classList.add("active-link");
    } else {
      navLinkEl.classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  if (this.scrollY >= 60) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUpBtn = document.getElementById("scroll-up");
  if (this.scrollY >= 400) scrollUpBtn.classList.add("show-scroll");
  else scrollUpBtn.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK / LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](iconTheme);
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*==================== SET CURRENT YEAR ====================*/
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/*==================== TYPED HERO TITLE ====================*/
const typedTextEl = document.getElementById("typed-text");
const typedWords = [
  "Data Science",
  "Generative AI",
  "Machine Learning",
  "Data Engineering",
  "Cloud Architecture",
];

if (typedTextEl) {
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeLoop() {
    const currentWord = typedWords[wordIndex];

    if (isDeleting) {
      charIndex -= 1;
    } else {
      charIndex += 1;
    }

    typedTextEl.textContent = currentWord.substring(0, charIndex);

    let delay = isDeleting ? 45 : 90;

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      delay = 1400;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % typedWords.length;
      delay = 300;
    }

    setTimeout(typeLoop, delay);
  }

  typeLoop();
}

/*==================== AOS SCROLL ANIMATIONS ====================*/
if (window.AOS) {
  AOS.init({
    duration: 700,
    once: true,
    offset: 60,
    easing: "ease-out-cubic",
  });
}
