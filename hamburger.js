let hamburger = document.getElementsByClassName('hamburger')[0];
let navMenu = document.getElementsByClassName("nav-menu")[0];

let navMenuToggle = () => {
    navMenu.classList.toggle("active")
}

let navMenuClose = () => {
    navMenu.classList.remove("active")
}

hamburger.addEventListener('click', navMenuToggle)
navMenu.addEventListener('click', navMenuClose)