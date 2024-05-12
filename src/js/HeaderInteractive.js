//* Funcionalidad Header
let ubicacionPrincipal = window.scrollY;
window.onscroll = function () {
  let desplazamiento_Actual = window.scrollY;
  if (ubicacionPrincipal >= desplazamiento_Actual) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-150px";
  }
  ubicacionPrincipal = desplazamiento_Actual;
};
