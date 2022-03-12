//const navBar = document.querySelector
var myNav = document.getElementById("mynav");
var navTexts = document.getElementsByClassName("nav-text");
const hamburger = document.querySelector(".hamburger");
const hamburgers = document.querySelectorAll(".hamburger>span");
const navlinks = document.querySelector(".nav-links");
var vh = window.innerHeight / 8;
const navLink = document.querySelectorAll(".nav-links>a");

window.onscroll = function () {
  "use strict";
  if (
    document.body.scrollTop >= vh ||
    document.documentElement.scrollTop >= vh
  ) {
    myNav.classList.add("nav-colored");
    myNav.classList.remove("nav-transparent");
    document.getElementById("logo").src = "./assets/img/logo.png";

    for (var i = 0; i < 5; i++) {
      navTexts[i].classList.remove("nav-txt-white");
      navTexts[i].classList.add("nav-txt-black");

      // navTexts[i].classList.add("gradient-text");
    }
    hamburgers.forEach((hamburger) => {
      hamburger.style.backgroundColor = "var(--color-black)";
    });
  } else {
    myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
    document.getElementById("logo").src = "./assets/img/colologo.png";
    for (var i = 0; i < 5; i++) {
      navTexts[i].classList.remove("nav-txt-black");
      navTexts[i].classList.add("nav-txt-white");
      // navTexts[i].classList.remove("gradient-text");
    }
    hamburgers.forEach((hamburger) => {
      hamburger.style.backgroundColor = "var(--color-white)";
    });
  }
};

hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
  hamburger.classList.toggle("active");
  navlinks.classList.toggle("active");
}

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navlinks.classList.remove("active");
}

const countdown = () => {
  const newDate = new Date("March 30, 2022 00:00:00").getTime();
  const now = new Date().getTime();
  let gap = newDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

<<<<<<< Updated upstream
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);
  document.querySelector(".days").innerText = textDay;
  document.querySelector(".hours").innerText = textHour;
  document.querySelector(".minutes").innerText = textMinute;
  document.querySelector(".seconds").innerText = textSecond;
};

setInterval(countdown, 1000);

const timeline = gsap.timeline({defaults:{duration:0.5}})
timeline
  .to(".nav-links.active", {top: 0,right:0});
=======
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

// date - DD/MM/YYYY format
let dateToday = document.getElementById("date")
let today = new Date()
let day = today.getDate()
if (day < 10) {
    day = '0' + day
}
let month = today.getMonth() + 1
if (month < 10) {
    month = '0' + month
}
let year = today.getFullYear()
dateToday.textContent = day + '/' + month + '/' + year
>>>>>>> Stashed changes
