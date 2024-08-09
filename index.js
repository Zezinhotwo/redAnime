$(document).ready(function () {
    $(".sub-menu-item").css("display", "none");
    $(".sub-menu").on("mouseenter", function () {
      $(this).find(".sub-menu-item").toggle();
    });
    $(".sub-menu").on("mouseleave", function () {
      $(this).find(".sub-menu-item").toggle();
    });
    $(window).on("scroll", function () {
      let ct = $(window).scrollTop();
      // alert(ct);
      if (ct > 220) {
        // console.log(ct);
        $("header").fadeIn("3000").css({
          transition: ".5s",
          height: "60px",
          "box-shadow": "1px 3px 3px 1px rgba(255, 0, 0, 0.616) ",
        });
        $(".sinopse-naruto").fadeOut("200");
      } else {
        $("header").css({
          "box-shadow": "none",
          height: "90px",
        });
        $(".sinopse-naruto").fadeIn("200ms");
      }
    });
    $(".sinopse-naruto").fadeIn("1000");
    setInterval(slide, 5500); // Intervalo de 3 segundos entre cada slide
  
    function slide() {
      const current = $(".foto-carrossel.show");
      const next = current.next(".foto-carrossel");
  
      if (next.length) {
        current.fadeOut(function () {
          // Animação de fadeOut com duração de 1 segundo
          current.removeClass("show");
          next.fadeIn().addClass("show"); // Animação de fadeIn com duração de 1 segundo
        });
      } else {
        current.fadeOut(function () {
          // Animação de fadeOut com duração de 1 segundo
          current.removeClass("show");
          $(".foto-carrossel").first().fadeIn().addClass("show"); // Animação de fadeIn com duração de 1 segundo
        });
      }
    }
    // Carrocel Lib
  
    $(".owl-carousel")
      .css({
        "margin-top": "2em",
        "margin-bottom": "2em",
        // "filter":"grayscale(1.5)"
      })
      .owlCarousel({
        autoplay: true,
        autoplayTimeout: 4500,
        autoplayHoverPause: false,
        loop: true,
        nav: false,
        margin: 25,
        responsive: {
          0: {
            items: 3,
          },
          600: {
            items: 3,
          },
          960: {
            items: 4,
          },
          1200: {
            items: 5,
          },
        },
      });
  
    $(".owl-item")
      .css({
        height: "9em",
        // "object-fit": "cover",
        // "width": "10%",
      })
      .on("mouseenter", function () {
        $(this).css({
          filter: "brightness(1.2)",
          transition: "filter 0.3s",
        });
      })
      .on("mouseleave", function () {
        $(this).css({
          filter: "brightness(1)",
          transition: "filter 0.3s",
        });
      });
    // FIM Do Carrocel Lib
  });
//   8u79897qrq

document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('nav-menus').classList.toggle('active');
});