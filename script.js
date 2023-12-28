document.addEventListener("DOMContentLoaded", initialize);

const hamburgerIcon = document.getElementById("hamburger");
const menuIcon = document.getElementById("menuIcon");
const sidebar = document.getElementById("sidebar");

const body = document.getElementById("body");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");

hamburgerIcon.addEventListener("click", summonBurgerMenu);
menuIcon.addEventListener("click", closeMenu);

sun.addEventListener("click", toggleLightMode);
moon.addEventListener("click", toggleDarkMode);

function initialize() {
  if (localStorage.getItem("theme") === "") {
    localStorage.setItem("dark");

    body.classList.remove("light");
    body.classList.add("dark");

    sun.style.display = "block";
    moon.style.display = "none";
  }

  if (localStorage.getItem("theme") === "light") {
    body.classList.remove("dark");
    body.classList.add("light");

    sun.style.display = "none";
    moon.style.display = "block";
  }

  if (localStorage.getItem("theme") === "dark") {
    body.classList.remove("light");
    body.classList.add("dark");
  }
}

function summonBurgerMenu() {
  sidebar.style.display = "block";
}

function closeMenu() {
  sidebar.style.display = "none";
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

function toggleDarkMode() {
  localStorage.setItem("theme", "dark");

  body.classList.remove("light");
  body.classList.add("dark");

  sun.style.display = "block";
  moon.style.display = "none";
}
