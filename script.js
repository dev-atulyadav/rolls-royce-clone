const header = document.querySelector("header");
const slides = document.querySelectorAll(".slide");
const videos = document.querySelectorAll("video");
const logos = document.querySelectorAll("img");
const menu_btn = document.querySelector("nav button");
const close_btn = document.querySelector(".close-btn");
const menu = document.querySelector("nav ul");
const menu_links = document.querySelectorAll("nav ul li");
const dots = document.querySelectorAll("ul")[1];
const cards = document.querySelector(".cards");

menu_btn.addEventListener("click", (e) => {
  e.preventDefault();

  menu.style.left = "0rem";
});
close_btn.addEventListener("click", (e) => {
  e.preventDefault();
  menu.style.left = "-85rem";
});

document.body.addEventListener("mouseover", (e) => {
  for (element of slides[1].children) {
    if (e.target === element || e.target === slides[1]) {
      header.setAttribute("class", "compress");
      dots.children[0].style.border = "none";
      dots.children[1].style.border = "1.5px solid white";
      dots.children[2].style.border = "none";
    }
  }
  for (element of slides[2].children) {
    if (e.target === element || e.target === slides[2]) {
      header.setAttribute("class", "compress");
      dots.children[0].style.border = "none";
      dots.children[1].style.border = "none";
      dots.children[2].style.border = "1.5px solid white";
    }
  }
  if (e.target === videos[0] || e.target === slides[0]) {
    header.removeAttribute("class");
    logos[0].style.display = "block";
    logos[1].style.display = "none";
    dots.children[0].style.border = "1.5px solid white";
    dots.children[1].style.border = "none";
    dots.children[2].style.border = "none";
  }
});
