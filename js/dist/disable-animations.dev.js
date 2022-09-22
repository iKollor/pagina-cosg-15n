"use strict";

var toggleAnimCheck = document.getElementById("toggleAnimCheck");
var texts = document.querySelectorAll(".type");
var btn = document.querySelector(".toggleAnimButton");
var icon = document.querySelector("#icon");
btn.addEventListener("click", function () {
  for (var i = 0; i < texts.length; i++) {
    var text = texts[i];

    if (toggleAnimCheck.checked) {
      text.classList.toggle("toggleAnim");
      text.classList.toggle("text-visible");
      icon.classList.add("fa-stop");
      icon.classList.remove("fa-play");
    } else {
      text.classList.toggle("toggleAnim");
      text.classList.toggle("text-visible");
      icon.classList.add("fa-play");
      icon.classList.remove("fa-stop");
    }
  }
});