const img = document.querySelector("img");
const btn = document.querySelector(".button");

let isOn = false; // Flag

btn.addEventListener("click", function () {
  if (isOn) {
    img.setAttribute("src", "./image/bulboff.gif");
    btn.innerHTML = "Turn on the lamp.";
    isOn = false;
  } else {
    img.setAttribute("src", "./image/bulbon.gif");
    btn.innerHTML = "Turn off the lamp.";
    isOn = true;
  }
});
