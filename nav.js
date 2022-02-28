
//const navBar = document.querySelector
var myNav = document.getElementById('mynav');
var vh =window.innerHeight/2;
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= vh || document.documentElement.scrollTop >= vh ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};
const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navlinks.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-links>a");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navlinks.classList.remove("active");
}
