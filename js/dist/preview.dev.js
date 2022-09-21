"use strict";

var previewContainer = document.querySelector(".col-preview");
var previewBox = document.querySelectorAll(".preview");
document.querySelectorAll(".grid .col").forEach(function (product) {
  product.onclick = function () {
    previewContainer.style.display = "flex";
    previewContainer.style.top = "0";
    previewContainer.style.opacity = "1";
    previewContainer.style.transition = "opacity 300ms ease-in-out, top 0s ease-in-out";
    document.body.style.overflowY = "hidden";
    var name = product.getAttribute("data-name");
    console.log(name);
    previewBox.forEach(function (preview) {
      var target = preview.getAttribute("data-target");

      if (name == target) {
        preview.classList.add("active");
      }
    });
  };
});
previewBox.forEach(function (close) {
  close.querySelector(".fa-xmark").onclick = function () {
    close.classList.remove("active");
    previewContainer.style.display = "flex";
    previewContainer.style.opacity = "0";
    previewContainer.style.top = "-100vh";
    previewContainer.style.transition = "opacity 300ms ease-in-out, top 0s ease-in-out 300ms";
    document.body.style.overflowY = "initial";
  };
});