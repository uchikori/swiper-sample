let swiperSlide = new Swiper('.swiper-container',{
    // effect: 'flip',
    speed: 1000,
    loop: true,
    slidesPerView: 1.2,
    spaceBetween: 0,
    centeredSlides: true,
    pagination:{
        el:'.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    autoplay:{
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
        reverseDirection: false,
    }
});
