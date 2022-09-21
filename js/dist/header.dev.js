"use strict";

var btnMenu = document.querySelector(".bar-btn");
var body = document.querySelector("body");
var menuBar = document.querySelector(".fa-bars");
var menuCross = document.querySelector(".fa-xmark");
btnMenu.addEventListener("click", function () {
  if (document.getElementById("check").checked) {
    body.style.overflowY = "auto";
    menuBar.classList.remove("fa-xmark");
    menuBar.classList.add("fa-bars");
    menuBar.classList.remove("menuClicked");
    menuBar.classList.add("crossClicked");
  } else {
    body.style.overflowY = "hidden";
    menuBar.classList.add("fa-xmark");
    menuBar.classList.remove("fa-bars");
    menuBar.classList.add("menuClicked");
    menuBar.classList.remove("crossClicked");
  }
});
$(window).resize(function () {
  if ($(window).width() < 500) {
    $("img#logo").attr("src", "../public/svg/logo.svg");
  } else {
    $("img#logo").attr("src", "../public/svg/logo completo.svg");
  }
});

if ($(window).width() < 500) {
  $("img#logo").attr("src", "../public/svg/logo.svg");
} else {
  $("img#logo").attr("src", "../public/svg/logo completo.svg");
}