// document.body.innerText = "Ola, MUNDO";
import "../assets/styles/style.css";
import logo from "../assets/img/logo.png";
import footer from "../assets/img/footer.png";
import video from "../assets/img/sukuna.mp4";
import { doc } from "prettier";
// IMGS
const $logo = document.querySelector(".logo");
$logo.src = logo;

const $video = document.querySelector(".video");
$video.src = video;

const $footer = document.querySelector(".footer-img");
$footer.src = footer;

// const $slide = document.querySelector(".slid1");
// const slide =
//   "https://www.canalterror.com.br/wp-content/uploads/2020/01/tokyoghoul.jpg";
// $slide.src = slide;

const $slideANIME = document.querySelectorAll(".slideANIME");
const slideANIME =
  "https://m.media-amazon.com/images/I/61NPpt5HC6L._AC_UF894,1000_QL80_.jpg";
$slideANIME.forEach((index) => (index.src = slideANIME));
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
  document.querySelector("nav").classList.toggle("show")
 


});
// window.addEventListener("scroll", () => {
//   let scro = window.scrollY; // Captura a posição de rolagem vertical
//   // console.log(scro); // Exibe a posição de rolagem no console
//   if (scro <= 0) {
//     document.querySelector("header").style.position = "fixed";
//     document.querySelector("header").style.opacity = "100%";
//   } else {
//     document.querySelector("header").style.position = "fixed";
//     document.querySelector("header").style.opacity = "85%";
//   }
// });

// SLIDE PRINCIPAL
const carrossel = document.querySelectorAll(".slides");

let isDragging = false;
let startX = 0;
let startY = 0;
let scrollLeft;
let isScrollingVertically = false;

function startDrag(e, carrosselElement) {
  isDragging = true;
  isScrollingVertically = false;
  carrosselElement.classList.add("movendo");

  // Detecta posição inicial do toque
  startX = (e.pageX || e.touches[0].pageX) - carrosselElement.offsetLeft;
  startY = e.pageY || e.touches[0].pageY;
  scrollLeft = carrosselElement.scrollLeft;
}

function dragMove(e, carrosselElement) {
  if (!isDragging) return;

  const x = (e.pageX || e.touches[0].pageX) - carrosselElement.offsetLeft;
  const y = e.pageY || e.touches[0].pageY;

  // Determina se o movimento é mais vertical ou horizontal
  const moveX = x - startX;
  const moveY = y - startY;

  // Se o movimento vertical for maior que o horizontal, não arrasta o carrossel
  if (Math.abs(moveY) > Math.abs(moveX)) {
    isScrollingVertically = true;
    return;
  }

  // Impede o scroll padrão (evitar interferência)
  e.preventDefault();

  const walk = moveX;
  carrosselElement.scrollLeft = scrollLeft - walk;
}

function endDrag(carrosselElement) {
  isDragging = false;
  carrosselElement.classList.remove("movendo");
}

function autoSlide(carrosselElement) {
  const slideWidth = carrosselElement.firstElementChild.offsetWidth;
  const newScrollPosition = carrosselElement.scrollLeft + slideWidth;

  if (
    newScrollPosition >=
    carrosselElement.scrollWidth - carrosselElement.clientWidth
  ) {
    carrosselElement.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  } else {
    carrosselElement.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
  }
}

carrossel.forEach((carrosselElement) => {
  carrosselElement.addEventListener("mousedown", (e) =>
    startDrag(e, carrosselElement)
  );
  carrosselElement.addEventListener("mousemove", (e) =>
    dragMove(e, carrosselElement)
  );
  carrosselElement.addEventListener("mouseup", () => endDrag(carrosselElement));
  carrosselElement.addEventListener("mouseleave", () =>
    endDrag(carrosselElement)
  );

  carrosselElement.addEventListener("touchstart", (e) =>
    startDrag(e, carrosselElement)
  );
  carrosselElement.addEventListener("touchmove", (e) =>
    dragMove(e, carrosselElement)
  );
  carrosselElement.addEventListener("touchend", () =>
    endDrag(carrosselElement)
  );

  setInterval(() => autoSlide(carrosselElement), 3000);
});
