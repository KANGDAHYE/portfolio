"use strict";

//Make navbar transparent when it is on the top
//메뉴바 상단에 있을때 투명하게 만들기

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  // console.log(window.scrollY);
  // console.log(`navbarHeight: ${navbarHeight}`);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

//Handle scrolling when tapping on the navbar menu
//탐색매뉴 눌렀을때 스크룰 처리
const navbarMeun = document.querySelector(".navbar__meun");
navbarMeun.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  // console.log(event.target.dataset.link);
  //자주 사용될 scrollIntoView 함수로 만듦
  // const scrollTo = document.querySelector(link);
  // scrollTo.scrollIntoView({ behavior: "smooth" });
  scrollIntoView(link);
});

//Handle click on "contact me" button home

const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
});

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  //1 은 불투명
  // 처음 시작 ex.  (1 - 0 / 800 ) = 1
  // 스크롤 반 내려옴 (1 - 400 / 800 ) = 0.5
  // 스크롤 다 내려옴 (1 - 800 / 800 ) = 0
  // 스크롤 더 내려감 (1 - 1600 / 800 ) = -1
  // console.log(1 - window.scrollY / homeHeight);
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
