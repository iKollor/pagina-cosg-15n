const btnMenu = document.querySelector(".bar-btn");
const body = document.querySelector("body");
const menuBar = document.querySelector(".fa-bars");
const menuCross = document.querySelector(".fa-xmark");
btnMenu.addEventListener("click", () => {
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
