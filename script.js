// Captura de elementos
const navTopo = document.querySelector(".nav-topo");
const icon = document.querySelector(".icon");

const title = document.querySelector(".title");
const mainText = document.querySelector(".main-text");
const nav = document.querySelector(".nav-ul");

//Funções

//Eventos
let moved = true;

icon.addEventListener("click", () => {
  if (moved) {
    navTopo.className = "nav-topo";
    icon.style.transform = "translateX(200px)";
    icon.style.transition = "0.5s";
  } else {
    navTopo.className = "nav-topo hide";
    icon.style.transform = "translateX(0)";
  }

  moved = !moved;
});

window.addEventListener("DOMContentLoaded", () => {
  title.style.transform = "translateX(0)";
  mainText.style.transform = "translateX(0)";
  nav.style.transform = "translateY(0)";
});
