let button = document.getElementById("button");
let container = document.getElementById("container");
let itemHeader = document.getElementById("itemHeader");
let item = 1;
let selectedLanguage = document.getElementById("selected-language");
let languageButtonSvenska = document.getElementById("language-button-svenska");
let languageButtonEngelska = document.getElementById(
  "language-button-engelska"
);
let english = document.getElementById("english");
let swedish = document.getElementById("swedish");

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
    itemHeader.style.color = "white";
    selectedLanguage.style.color = "white";
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

languageButtonSvenska.addEventListener("click", () => {
  english.classList.add("hidden-lang");
  swedish.classList.remove("hidden-lang");
  console.log("Svenska knappen");
  console.log(english);
  console.log(swedish);
});

languageButtonEngelska.addEventListener("click", () => {
  sC
  console.log("Engelska knappen");
  console.log(english);
  console.log(swedish);
});
