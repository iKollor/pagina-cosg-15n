"use strict";

var btnDer = document.querySelector(".fa-angle-right");
var btnIzq = document.querySelector(".fa-angle-left");
var Der = document.querySelector(".bottom-right");
var Izq = document.querySelector(".bottom-left");
var gridContainer = document.querySelector(".grid-changer .grid-container");
btnDer.addEventListener("click", function () {
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
btnIzq.addEventListener("click", function () {
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
Der.addEventListener("click", function () {
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
Izq.addEventListener("click", function () {
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