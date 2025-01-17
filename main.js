document
  .getElementById("accendiSpegniButton")
  .addEventListener("click", function () {
    const lampadina = document.getElementById("lampadina");
    const button = document.getElementById("accendiSpegniButton");

    if (lampadina.src.includes("img/white_lamp.png")) {
      lampadina.src = "img/Yellow_lamp.png";
      button.textContent = "Spegni";
    } else {
      lampadina.src = "img/white_lamp.png";
      button.textContent = "Accendi";
    }
  });
