const swiper = new Swiper('.channel-slider', {
  // Optional parameters
  //direction: 'vertical',
  loop: true,
  slidesPerView: 6,

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },


});

const swiper2 = new Swiper('.recommended-slider', {
  // Optional parameters
  //direction: 'vertical',
  loop: true,
  slidesPerView: 3,
   spaceBetween: 40,

  // Navigation arrows
  navigation: {
    nextEl: '.recommended-button-next',
    prevEl: '.recommended-button-prev',
  },


});

const swiper3 = new Swiper('.food-drink-slider', {
  // Optional parameters
  //direction: 'vertical',
  loop: true,
  slidesPerView: 6,
   

  // Navigation arrows
  navigation: {
    nextEl: '.food-button-next',
    prevEl: '.food-button-prev',
  },


});