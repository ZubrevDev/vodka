new Swiper('.js-games-swiper', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  loop: true,
  grabCursor: true,
  slidesPerView: 2,
  spaceBetween: 12,
  loopedSlides: 3,
  navigation: {
    prevEl: '.js-games-prev',
    nextEl: '.js-games-next'
  },
  breakpoints: {
    768: {
      slidesPerView: 3
    },
    992: {
      slidesPerView: 3
    }
  }
});
