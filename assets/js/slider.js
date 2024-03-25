const swiper = new Swiper('.swiper', {
    slidesPerView: 1.2,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
        1500: {
            slidesPerView: 2.5,
        },
        768: {
            slidesPerView: 2,
        }
    },
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
    pagination: '.swiper-pagination',
})     