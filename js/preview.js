let previewContainer = document.querySelector(".col-preview");
let previewBox = document.querySelectorAll(".preview");

document.querySelectorAll(".grid .col").forEach((product) => {
  product.onclick = () => {
    previewContainer.style.display = "flex";
    previewContainer.style.top = "0";
    previewContainer.style.opacity = "1";
    previewContainer.style.transition =
      "opacity 300ms ease-in-out, top 0s ease-in-out";
    document.body.style.overflowY = "hidden";
    let name = product.getAttribute("data-name");
    console.log(name);
    previewBox.forEach((preview) => {
      let target = preview.getAttribute("data-target");
      if (name == target) {
        preview.classList.add("active");
      }
    });
  };
});

previewBox.forEach((close) => {
  close.querySelector(".fa-xmark").onclick = () => {
    close.classList.remove("active");
    previewContainer.style.display = "flex";
    previewContainer.style.opacity = "0";
    previewContainer.style.top = "-100vh";
    previewContainer.style.transition =
      "opacity 300ms ease-in-out, top 0s ease-in-out 300ms";
    document.body.style.overflowY = "initial";
  };
});
