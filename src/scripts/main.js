// document.body.innerText = "Ola, MUNDO";
import "../assets/styles/style.css";
import logo from "../assets/img/logo.png";
import { doc } from "prettier";
// IMGS
const $logo = document.querySelector(".logo");
$logo.src = logo;

const $slide = document.querySelector(".slid1");
const slide =
  "https://www.teahub.io/photos/full/33-339920_tokyo-ghoul-desktop-background.jpg";
$slide.src = slide;

const $animeSlide = document.querySelectorAll(".animeSlide");
const animeSlide =
  "https://i.pinimg.com/564x/e2/37/72/e23772515fabaa62913d4bfc1f524679.jpg";
$animeSlide.forEach((index) => (index.src = animeSlide));

// Hamburg

document.querySelector("#menu-toggle").addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("hide-show");

  document.querySelector("header").classList.toggle("plusHome");
});
window.addEventListener("scroll", () => {
  let scro = window.scrollY; // Captura a posição de rolagem vertical
  // console.log(scro); // Exibe a posição de rolagem no console
  if (scro <= 149) {
    document.querySelector("header").style.position = "relative";
    document.querySelector("header").style.opacity = "100%";
  } else {
    document.querySelector("header").style.position = "fixed";
    document.querySelector("header").style.opacity = "85%";
  }
});
