
//const navBar = document.querySelector
var myNav = document.getElementById('mynav');
var navText = document.getElementsByClassName('nav-text')
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
        navText.classList.remove("nav-text-black");
        navText.classList.add("nav-text-white");
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


const countdown = () =>{
    const newDate = new Date('March 6, 2022 00:00:00').getTime();
    const now = new Date().getTime();
    let gap = newDate - now;

    const second = 1000;
    const minute = second*60;
    const hour = minute*60;
    const day = hour*24;
    
    const textDay = Math.floor(gap/day);
    const textHour = Math.floor((gap%day)/hour);
    const textMinute = Math.floor((gap%hour)/minute);
    const textSecond = Math.floor((gap%minute)/second);
    document.querySelector(".days").innerText = textDay;
    document.querySelector(".hours").innerText = textHour;
    document.querySelector(".minutes").innerText = textMinute;
    document.querySelector(".seconds").innerText = textSecond;
  }
  
setInterval(countdown,1000);