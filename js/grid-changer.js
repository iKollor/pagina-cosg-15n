const btnDer = document.querySelector(".fa-angle-right");
const btnIzq = document.querySelector(".fa-angle-left");
const Der = document.querySelector(".bottom-right");
const Izq = document.querySelector(".bottom-left");
const gridContainer = document.querySelector(".grid-changer .grid-container");

btnDer.addEventListener("click", () => {
  gridContainer.classList.toggle("activeIzq");
  gridContainer.classList.remove("activeDer");

  Der.classList.toggle("clicked");
  Der.classList.remove("active");
  Izq.classList.toggle("active");
  Izq.classList.remove("clicked");

  btnDer.classList.toggle("clicked");
  btnDer.classList.remove("active");
  btnIzq.classList.toggle("active");
  btnIzq.classList.remove("clicked");
});

btnIzq.addEventListener("click", () => {
  gridContainer.classList.toggle("activeDer");
  gridContainer.classList.remove("activeIzq");

  btnIzq.classList.toggle("clicked");
  btnIzq.classList.remove("active");
  btnDer.classList.toggle("active");
  btnDer.classList.remove("clicked");

  Izq.classList.toggle("clicked");
  Izq.classList.remove("active");
  Der.classList.toggle("active");
  Der.classList.remove("clicked");
});

Der.addEventListener("click", () => {
  gridContainer.classList.toggle("activeIzq");
  gridContainer.classList.remove("activeDer");

  Der.classList.toggle("clicked");
  Der.classList.remove("active");
  Izq.classList.toggle("active");
  Izq.classList.remove("clicked");

  btnDer.classList.toggle("clicked");
  btnDer.classList.remove("active");
  btnIzq.classList.toggle("active");
  btnIzq.classList.remove("clicked");
});

Izq.addEventListener("click", () => {
  gridContainer.classList.toggle("activeDer");
  gridContainer.classList.remove("activeIzq");

  Izq.classList.toggle("clicked");
  Izq.classList.remove("active");
  Der.classList.toggle("active");
  Der.classList.remove("clicked");

  btnIzq.classList.toggle("clicked");
  btnIzq.classList.remove("active");
  btnDer.classList.toggle("active");
  btnDer.classList.remove("clicked");
});
