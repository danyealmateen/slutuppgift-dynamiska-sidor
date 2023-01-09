let button = document.getElementById("button");
let container = document.getElementById("container");
let itemHeader = document.getElementById("itemHeader");
let item = 1;
let selectedLanguage = document.getElementById("selected-language");

button.addEventListener("click", () => {
  container.classList.toggle("hidden");
  console.log("Du har klickat mig");
});

let buttonForMode = document.getElementById("buttonForMode");
let menuText = document.getElementById("menu-text");
const mode = document.getElementById("mode");

buttonForMode.addEventListener("click", () => {
  if (mode.content == "light") {
    mode.content = "dark";
    buttonForMode.style.backgroundColor = "white";
    buttonForMode.style.color = "black";
    buttonForMode.textContent = "Light mode";
  } else {
    mode.content = "light";
    buttonForMode.style.backgroundColor = "black";
    buttonForMode.style.color = "white";
    buttonForMode.textContent = "Dark mode";
    itemHeader.style.color = "white";
    selectedLanguage.style.color = "white";
  }
});

let tyreButton = document.querySelectorAll("button#tyreButton");
console.log(tyreButton);
tyreButton.forEach((button) => {
  button.addEventListener("click", () => {
    itemHeader.innerHTML = `Items in the basket: ${item++}`;
  });
});

//Language
if (navigator.language.match("en-US") || navigator.language.match("en")) {
  selectedLanguage.innerText = `ENGLISH`;
  console.log("engelska");
} else if (
  navigator.language.match("sv-SE") ||
  navigator.language.match("sv")
) {
  selectedLanguage.innerText = `SVENSKA`;
  console.log("svenska");
}
