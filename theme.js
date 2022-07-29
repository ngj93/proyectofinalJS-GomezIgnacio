let tema = document.querySelector("#tema")

tema.addEventListener("click", function(){
    if (localStorage.getItem("theme") == "dark"){
        lightMode()
    }else{
        darkMode()
    }
    Toastify({
        text: "Dark Mode-activado",
        duration: 3000
    }).showToast();
})

function darkMode() {
    let body = document.querySelector("body")
    body.style.backgroundColor = "black"

    localStorage.setItem("theme", "dark")
    Toastify({
        text: "Dark Mode-activado",
        duration: 3000
    }).showToast();
}

function lightMode() {
    let body = document.querySelector("body")
    body.style.backgroundColor = "white"

    localStorage.setItem("theme", "light")
    Toastify({
        text: "Dark Mode-activado",
        duration: 3000
    }).showToast();
}

document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("theme") == "dark") {
        darkMode()
    }else {
        lightMode()
    }
})

// tema.addEventListener('click', () => {
//     Toastify({
//         text: "Dark Mode-activado",
//         duration: 3000
//     }).showToast();
// })