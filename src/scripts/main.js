// document.body.innerText = "Ola, MUNDO";
import "../assets/styles/style.css";
import logo from "../assets/img/logo.png";
import footer from "../assets/img/footer.png";
import { doc } from "prettier";
// IMGS
const $logo = document.querySelector(".logo");
$logo.src = logo;

const $footer = document.querySelector(".footer-img");
$footer.src = footer;

const $slide = document.querySelector(".slid1");
const slide =
  "https://www.canalterror.com.br/wp-content/uploads/2020/01/tokyoghoul.jpg";
$slide.src = slide;

const $animeSlide = document.querySelectorAll(".animeSlide");
const animeSlide =
  "https://i.pinimg.com/564x/e2/37/72/e23772515fabaa62913d4bfc1f524679.jpg";
$animeSlide.forEach((index) => (index.src = animeSlide));

const $wind = document.querySelector(".wind");
const wind =
  "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/c3705f0653418420369d475cbff2e2c8.jpe";
$wind.src = wind;

const $kimetsu = document.querySelector(".kimetsu");
const kimetsu =
  "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/6b17182a3518d7406f0e69687f773f4f.jpg";
$kimetsu.src = kimetsu;
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
