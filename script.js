const hamburgerIcon = document.getElementById("hamburger");
const menuIcon = document.getElementById("menuIcon");
const sidebar = document.getElementById("sidebar");

hamburgerIcon.addEventListener("click", summonBurgerMenu);
menuIcon.addEventListener("click", closeMenu);

function summonBurgerMenu() {
  sidebar.style.display = "block";
}

function closeMenu() {
  sidebar.style.display = "none";
}
