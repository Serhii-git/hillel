import Swiper, { Pagination, Autoplay } from 'swiper';
Swiper.use([Pagination, Autoplay]);
const swiper = new Swiper('.team-swiper', {
  // autoplay: {
  //   delay: 3000,
  // },
  slidesPerView: '1',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 1,
  },
});
