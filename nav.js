

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


hamburger.addEventListener('click', ()=> {
  if (hamburger.classList.contains("active")) {
    navlinks.classList.remove('active');
    whiteLayer.style.right ="-100vw";
    blackLayer.style.right ="-100vw";
    hamburger.classList.remove('active');
      // $('.nav-links .black-layer').css('transition-delay', '0.4s');
      // $('.nav-links .white-layer').css('transition-delay', '0.8s');
  } else {
    setTimeout(() => { blackLayer.style.right ="0";},500);
    whiteLayer.style.right ="0";
    navlinks.classList.add('active');
    hamburger.classList.add('active');
      
    // navlinks.classList.add('black-layer');
      // $('.nav-links .black-layer').css('transition-delay', '0.4s');
      // $('.nav-links .white-layer').css('transition-delay', '0s');
  }
});