$(".brand-logo-slider").slick({
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 9000, 
    autoplay: true, 
    autoplaySpeed: 0,
    variableWidth: true,
    cssEase: 'linear',
    responsive: [
    {
      breakpoint: 767,
      settings: {
          slidesToShow: 4,
        }
     },
      {
      breakpoint: 479,
      settings: {
          slidesToShow: 3,
        }
     }
    ]
});