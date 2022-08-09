let tema = document.querySelector("#tema");

tema.addEventListener("click", function () {
  if (localStorage.getItem("theme") == "dark") {
    lightMode();
    Toastify({
      text: "light Mode-activado",
      duration: 3000,
    }).showToast();
  } else {
    darkMode();
    Toastify({
      text: "Dark Mode-activado",
      duration: 3000,
    }).showToast();
  }
});

function darkMode() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "black";
  body.style.color = "white";
  tema.innerText = "LightMode";

  localStorage.setItem("theme", "dark");
}

function lightMode() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "white";
  body.style.color = "black";
  tema.innerText = "darkMode";

  localStorage.setItem("theme", "light");
}

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("theme") == "dark") {
    darkMode();
  } else {
    lightMode();
  }
});
