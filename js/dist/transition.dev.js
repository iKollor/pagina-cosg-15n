"use strict";

window.onload = function () {
  var transition_el = document.querySelector(".transition");
  var anchors = document.querySelectorAll("a");
  setTimeout(function () {
    transition_el.classList.remove("is-active");
  }, 500);

  for (var i = 0; i < anchors.length; i++) {
    var anchor = anchors[i];
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      var target = e.target.href;
      transition_el.classList.add("is-active");

      if (target == undefined) {
        target = "../index.html";
      } else {}

      setTimeout(function () {
        window.location.href = target;
      }, 500);
    });
  }
};