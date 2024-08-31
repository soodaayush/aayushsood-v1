document.addEventListener("DOMContentLoaded", initialize);

const hamburgerIcon = document.getElementById("hamburger");
const menuIcon = document.getElementById("menuIcon");
const sidebar = document.getElementById("sidebar");

const body = document.getElementById("body");

const sun = document.getElementById("sun");
const sunMenu = document.getElementById("sunMenu");
const moon = document.getElementById("moon");
const moonMenu = document.getElementById("moonMenu");

const cpuModal = document.getElementById("6502Modal");
const cpuModalTrigger = document.getElementById("6502ModalTrigger");
const closeCPUModalBtn = document.getElementById("closeCPUModalBtn");

const eightBitModal = document.getElementById("8BitModal");
const eightBitModalTrigger = document.getElementById("8BitModalTrigger");
const closeEightBitModalBtn = document.getElementById("close8BitModalBtn");

const iframes = document.querySelectorAll("iframe");

hamburgerIcon.addEventListener("click", summonBurgerMenu);
menuIcon.addEventListener("click", closeBurgerMenu);

sun.addEventListener("click", switchToLightMode);
moon.addEventListener("click", switchToDarkMode);
sunMenu.addEventListener("click", switchToLightMode);
moonMenu.addEventListener("click", switchToDarkMode);

cpuModalTrigger.addEventListener("click", triggerCPUModal);
closeCPUModalBtn.addEventListener("click", closeCPUModal);

eightBitModalTrigger.addEventListener("click", triggerEightBitModal);
closeEightBitModalBtn.addEventListener("click", closeEightBitModal);

document.addEventListener("keydown", function (event) {
  if (cpuModal.style.display === "block") {
    if (event.key === "Escape" || event.key === "Esc") {
      closeCPUModal();
    }
  }

  if (eightBitModal.style.display === "block") {
    if (event.key === "Escape" || event.key === "Esc") {
      closeEightBitModal();
    }
  }
});

document.addEventListener("click", function (e) {
  if (cpuModal.style.display === "block") {
    if (!cpuModal.contains(e.target) && e.target !== cpuModalTrigger) {
      closeCPUModal();
    }
  }

  if (eightBitModal.style.display === "block") {
    if (
      !eightBitModal.contains(e.target) &&
      e.target !== eightBitModalTrigger
    ) {
      closeEightBitModal();
    }
  }
});

function initialize() {
  let theme = localStorage.getItem("theme");

  if (!theme) {
    theme = "dark";
    localStorage.setItem("theme", theme);
  }

  if (theme === "light") {
    body.classList.remove("dark");
    body.classList.add("light");

    moon.style.display = "block";
    sun.style.display = "none";
    sun.style.display = "none";
    sunMenu.style.display = "none";
    moon.style.display = "block";
    moonMenu.style.display = "block";
  } else if (theme === "dark") {
    body.classList.remove("light");
    body.classList.add("dark");

    sun.style.display = "block";
    moon.style.display = "none";
    moon.style.display = "none";
    moonMenu.style.display = "none";
    sun.style.display = "block";
    sunMenu.style.display = "block";
  }
}

function triggerCPUModal() {
  cpuModal.style.animation = "fadeIn 0.4s";
  cpuModal.style.display = "block";
  body.style.overflow = "hidden";
}

function closeCPUModal() {
  cpuModal.style.animation = "fadeOut 0.4s";

  cpuModal.addEventListener("animationend", function handler() {
    body.style.overflow = "scroll";
    cpuModal.style.display = "none";
    cpuModal.removeEventListener("animationend", handler);

    iframes.forEach((iframe) => {
      var iframeSrc = iframe.src;
      iframe.src = iframeSrc;
    });
  });
}

function triggerEightBitModal() {
  eightBitModal.style.animation = "fadeIn 0.4s";
  eightBitModal.style.display = "block";
  body.style.overflow = "hidden";
}

function closeEightBitModal() {
  eightBitModal.style.animation = "fadeOut 0.4s";

  eightBitModal.addEventListener("animationend", function handler() {
    body.style.overflow = "scroll";
    eightBitModal.style.display = "none";
    eightBitModal.removeEventListener("animationend", handler);

    iframes.forEach((iframe) => {
      var iframeSrc = iframe.src;
      iframe.src = iframeSrc;
    });
  });
}

function summonBurgerMenu() {
  sidebar.style.display = "block";
}

function closeBurgerMenu() {
  sidebar.style.display = "none";
}

function switchToDarkMode() {
  localStorage.setItem("theme", "dark");

  body.classList.remove("light");
  body.classList.add("dark");

  moon.style.display = "none";
  moonMenu.style.display = "none";
  sun.style.display = "block";
  sunMenu.style.display = "block";
}

function switchToLightMode() {
  localStorage.setItem("theme", "light");

  body.classList.remove("dark");
  body.classList.add("light");

  sun.style.display = "none";
  sunMenu.style.display = "none";
  moon.style.display = "block";
  moonMenu.style.display = "block";
}
