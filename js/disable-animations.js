let toggleAnimCheck = document.getElementById("toggleAnimCheck");
const texts = document.querySelectorAll(".type");
const btn = document.querySelector(".toggleAnimButton");
const icon = document.querySelector("#icon");

btn.addEventListener("click", () => {
  for (let i = 0; i < texts.length; i++) {
    const text = texts[i];
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
