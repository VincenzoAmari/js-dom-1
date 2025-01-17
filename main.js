const lampadina = document.getElementById("lampadina");
const button = document.getElementById("accendiSpegniButton");

button.addEventListener("click", function () {
  if (lampadina.src.includes("white_lamp.png")) {
    lampadina.src = "img/Yellow_lamp.png";
    button.textContent = "Spegni";
  } else {
    lampadina.src = "img/white_lamp.png";
    button.textContent = "Accendi";
  }
});
