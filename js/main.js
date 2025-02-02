const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav__links")

hamburger.onclick = function() {
    hamburger.classList.toggle("_active");
    navLinks.classList.toggle("_active");
}