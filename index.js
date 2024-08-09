$(document).ready(function () {
    $(".sub-menu-item").css("display", "none");
  
    // Para dispositivos móveis, o menu deve abrir ao toque
    if ($(window).width() <= 768) {
      $(".sub-menu").on("click", function () {
        $(this).find(".sub-menu-item").toggle();
      });
    } else {
      $(".sub-menu").on("mouseenter", function () {
        $(this).find(".sub-menu-item").toggle();
      });
      $(".sub-menu").on("mouseleave", function () {
        $(this).find(".sub-menu-item").toggle();
      });
    }
  
    $(window).on("scroll", function () {
      let ct = $(window).scrollTop();
  
      if (ct > 420) {
        $("header").fadeIn("3000").css({
          transition: ".5s",
          height: "60px",
          "box-shadow": "1px 3px 3px 1px rgba(255, 0, 0, 0.616)",
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
    setInterval(slide, 5500);
  
    function slide() {
      const current = $(".foto-carrossel.show");
      const next = current.next(".foto-carrossel");
  
      if (next.length) {
        current.fadeOut(function () {
          current.removeClass("show");
          next.fadeIn().addClass("show");
        });
      } else {
        current.fadeOut(function () {
          current.removeClass("show");
          $(".foto-carrossel").first().fadeIn().addClass("show");
        });
      }
    }
  
    $(".owl-carousel")
      .css({
        "margin-top": "2em",
        "margin-bottom": "2em",
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
            items: 1,
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
        height: "29em",
        "object-fit": "cover",
      })
      .on("mouseenter", function () {
        if ($(window).width() > 768) {
          $(this).css({
            filter: "brightness(1.2)",
            transition: "filter 0.3s",
          });
        }
      })
      .on("mouseleave", function () {
        $(this).css({
          filter: "brightness(1)",
          transition: "filter 0.3s",
        });
      });
  });
  