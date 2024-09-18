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

const $slideANIME = document.querySelectorAll(".slideANIME")
const slideANIME ="https://m.media-amazon.com/images/I/61NPpt5HC6L._AC_UF894,1000_QL80_.jpg"
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
// SLIDE
const carrossel = document.querySelectorAll(".slides");

let isDragging = false;
let startX = 0;
let scrollLeft;

function startDrag(e, carrosselElement) {
  isDragging = true;
  carrosselElement.classList.add("movendo");

  startX = (e.pageX || e.touches[0].pageX) - carrosselElement.offsetLeft;
  scrollLeft = carrosselElement.scrollLeft;
}

function dragMove(e, carrosselElement) {
  if (!isDragging) return;
  e.preventDefault();
  const x = (e.pageX || e.touches[0].pageX) - carrosselElement.offsetLeft;
  const walk = x - startX;
  carrosselElement.scrollLeft = scrollLeft - walk;
}

function endDrag(carrosselElement) {
  isDragging = false;
  carrosselElement.classList.remove("movendo");
}

// Função para mover automaticamente
function autoSlide(carrosselElement) {
  const slideWidth = carrosselElement.firstElementChild.offsetWidth; // Tamanho de um slide
  const newScrollPosition = carrosselElement.scrollLeft + slideWidth;

  // Verifica se está no final, e volta ao início
  if (newScrollPosition >= carrosselElement.scrollWidth - carrosselElement.clientWidth) {
    carrosselElement.scrollTo({
      left: 0,
      behavior: 'smooth' // Movimento suave
    });
  } else {
    carrosselElement.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth' // Movimento suave
    });
  }
}

carrossel.forEach((carrosselElement) => {
  // Eventos de mouse
  carrosselElement.addEventListener("mousedown", (e) => startDrag(e, carrosselElement));
  carrosselElement.addEventListener("mousemove", (e) => dragMove(e, carrosselElement));
  carrosselElement.addEventListener("mouseup", () => endDrag(carrosselElement));
  carrosselElement.addEventListener("mouseleave", () => endDrag(carrosselElement));

  // Eventos de toque (touch)
  carrosselElement.addEventListener("touchstart", (e) => startDrag(e, carrosselElement));
  carrosselElement.addEventListener("touchmove", (e) => dragMove(e, carrosselElement));
  carrosselElement.addEventListener("touchend", () => endDrag(carrosselElement));

  // Inicia o movimento automático a cada 3 segundos
  setInterval(() => autoSlide(carrosselElement), 3500);
});
