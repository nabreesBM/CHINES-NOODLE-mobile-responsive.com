$(document).ready(function(){
  $("#menu").click(function(){
    $("#navbar").slideToggle("slow");
  });
});

var swiper = new Swiper(".slider", {
  grabCursor: true,
  effect: "creative",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  creativeEffect: {
    prev: {
      shadow: false,
      translate: [0, 0, -5000],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});

var swiper = new Swiper(".proslider", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {

    790: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    1080: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    1280: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1550: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1800: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});