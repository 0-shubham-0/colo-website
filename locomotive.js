const scroller = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  // smartphone: {
  //   smooth: true,
  // },
  // tablet: {
  //   smooth: true,
  // },
});
scroller.on('scroll', ({ limit, scroll }) => {
  const progress = scroll.y / limit.y * 100 
  // console.log(progress)
  if(progress<=1){
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
    return;
  }
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
})