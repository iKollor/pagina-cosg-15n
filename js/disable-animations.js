let toggleAnimCheck = document.getElementById("toggleAnimCheck");
const texts = document.querySelectorAll(".type");
const btn = document.querySelector(".toggleAnimButton");

btn.addEventListener("click", () => {
  for (let i = 0; i < texts.length; i++) {
    const text = texts[i];
    if (toggleAnimCheck.checked) {
      text.classList.toggle("toggleAnim");
      text.classList.toggle("text-visible");
    } else {
      text.classList.toggle("toggleAnim");
      text.classList.toggle("text-visible");
    }
  }
});
