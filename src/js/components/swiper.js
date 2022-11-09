import Swiper, { Pagination, Autoplay, Thumbs} from 'swiper';
Swiper.use([Pagination,Autoplay]);


const swiper = new Swiper('.team-section-swiper', {
  // autoplay: {
  //   delay: 3000,
  // },
  slidesPerView: '1',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});


const swiperAchiements = new Swiper('.achievements-swiper', {
  spaceBetween: 30,
  slidesPerView: '4',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,

    // dynamicBullets: true,
    // dynamicMainBullets: 1,
  },
});
