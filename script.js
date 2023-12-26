const fullstackDev = document.getElementById("fullstackDev");

console.log(fullstackDev);

fullstackDev.addEventListener("click", onClick);

function onClick(e) {
  console.log(e.target.innerText);

  alert(e.target.innerText);
}
