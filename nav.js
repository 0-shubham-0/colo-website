//const navBar = document.querySelector
var myNav = document.getElementById("mynav");
var navTexts = document.getElementsByClassName("nav-text");
const hamburger = document.querySelector(".hamburger");
const hamburgers = document.querySelectorAll(".hamburger>span");
let whiteLayer = document.querySelector(".white-layer");
let blackLayer = document.querySelector(".black-layer");
const navlinks = document.querySelector(".nav-links");
var vh = window.innerHeight / 8;
const navLink = document.querySelectorAll(".nav-links>a");

// hamburger.addEventListener("click", mobileMenu);
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

hamburger.addEventListener("click", () => {
  if (hamburger.classList.contains("active")) {
    navlinks.classList.remove("active");
    setTimeout(() => {
      blackLayer.style.left = "-100vw";
    }, 300);
    setTimeout(() => {
      whiteLayer.style.left = "-100vw";
    }, 600);
    hamburger.classList.remove("active");
  } else {
    setTimeout(() => {
      blackLayer.style.left = "0";
    }, 300);
    setTimeout(() => {
      whiteLayer.style.left = "0";
    }, 100);
    setTimeout(() => {
      navlinks.classList.add("active");
    }, 600);
    hamburger.classList.add("active");
  }
});
window.onscroll = function () {
  console.log(document.documentElement.scrollTop,vh)
  "use strict";
  if (document.documentElement.scrollTop<= vh) {
    myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
    document.getElementById("logo").src = "./assets/img/colologo.png";
    for (var i = 0; i < 5; i++) {
      navTexts[i].classList.remove("nav-txt-black");
      navTexts[i].classList.add("nav-txt-white");
    }
    hamburgers.forEach((hamburger) => {
      hamburger.style.backgroundColor = "var(--color-white)";
    });
  }else{
  myNav.classList.add("nav-colored");
  myNav.classList.remove("nav-transparent");
  document.getElementById("logo").src = "./assets/img/logo.png";
  for (var i = 0; i < 5; i++) {
    navTexts[i].classList.remove("nav-txt-white");
    navTexts[i].classList.add("nav-txt-black");
  }
  hamburgers.forEach((hamburger) => {
    hamburger.style.backgroundColor = "var(--color-black)";
  });
}};



var scrollToTopBtn = document.getElementById("scrollToTopBtn")
var rootElement = document.documentElement
scrollToTopBtn.addEventListener("click", scrollToTop)
function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}