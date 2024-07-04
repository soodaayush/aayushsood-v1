document.addEventListener("DOMContentLoaded", initialize);

const hamburgerIcon = document.getElementById("hamburger");
const menuIcon = document.getElementById("menuIcon");
const sidebar = document.getElementById("sidebar");

const body = document.getElementById("body");

const sun = document.getElementById("sun");
const sunMenu = document.getElementById("sunMenu");
const moon = document.getElementById("moon");
const moonMenu = document.getElementById("moonMenu");

const imageGalleryModal = document.getElementById("imageGalleryModal");
const modalContent = document.querySelector(".modal-content");
const imageGalleryTrigger = document.getElementById("imageGalleryTrigger");
const closeModalBtn = document.getElementById("closeModalBtn");
const iframes = document.querySelectorAll("iframe");

hamburgerIcon.addEventListener("click", summonBurgerMenu);
menuIcon.addEventListener("click", closeMenu);

sun.addEventListener("click", toggleLightMode);
moon.addEventListener("click", toggleDarkMode);
sunMenu.addEventListener("click", toggleLightModeMenu);
moonMenu.addEventListener("click", toggleDarkModeMenu);

imageGalleryTrigger.addEventListener("click", triggerImageGalleryModal);
closeModalBtn.addEventListener("click", closeImageGalleryModal);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" || event.key === "Esc") {
    closeImageGalleryModal();
  }
});

document.addEventListener("click", function (e) {
  if (
    !imageGalleryModal.contains(e.target) &&
    e.target !== imageGalleryTrigger
  ) {
    closeImageGalleryModal();
  }
});

function triggerImageGalleryModal() {
  imageGalleryModal.style.animation = "fadeIn 0.4s";
  imageGalleryModal.style.display = "block";
  body.style.overflow = "hidden";
}

function closeImageGalleryModal() {
  imageGalleryModal.style.animation = "fadeOut 0.4s";

  imageGalleryModal.addEventListener("animationend", function handler() {
    body.style.overflow = "scroll";
    imageGalleryModal.style.display = "none";
    imageGalleryModal.removeEventListener("animationend", handler);

    iframes.forEach((iframe) => {
      var iframeSrc = iframe.src;
      iframe.src = iframeSrc;
    });
  });
}

function summonBurgerMenu() {
  sidebar.style.display = "block";
}

function closeMenu() {
  sidebar.style.display = "none";
}

function initialize() {
  if (localStorage.getItem("theme") === "") {
    localStorage.setItem("dark");

    body.classList.remove("light");
    body.classList.add("dark");

    sun.style.display = "block";
    sunMenu.style.display = "block";
    moon.style.display = "none";
    moonMenu.style.display = "none";
  }

  if (localStorage.getItem("theme") === "light") {
    body.classList.remove("dark");
    body.classList.add("light");

    sun.style.display = "none";
    sunMenu.style.display = "none";
    moon.style.display = "block";
    moonMenu.style.display = "block";
  }

  if (localStorage.getItem("theme") === "dark") {
    body.classList.remove("light");
    body.classList.add("dark");

    sun.style.display = "block";
    sunMenu.style.display = "block";
    moon.style.display = "none";
    moonMenu.style.display = "none";
  }
}

if (body.className === "light") {
  sun.style.display = "none";
}

if (body.className === "dark") {
  moon.style.display = "none";
}

function toggleLightMode() {
  localStorage.setItem("theme", "light");

  body.classList.remove("dark");
  body.classList.add("light");

  sun.style.display = "none";
  moon.style.display = "block";
}

function toggleLightModeMenu() {
  localStorage.setItem("theme", "light");

  body.classList.remove("dark");
  body.classList.add("light");

  sunMenu.style.display = "none";
  sun.style.display = "none";
  moonMenu.style.display = "block";
  moon.style.display = "block";
}

function toggleDarkModeMenu() {
  localStorage.setItem("theme", "dark");

  body.classList.remove("light");
  body.classList.add("dark");

  sunMenu.style.display = "block";
  sun.style.display = "block";
  moonMenu.style.display = "none";
  moon.style.display = "none";
}

function toggleDarkMode() {
  localStorage.setItem("theme", "dark");

  body.classList.remove("light");
  body.classList.add("dark");

  sun.style.display = "block";
  moon.style.display = "none";
}
