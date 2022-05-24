$(".recent-projects-slider").slick({
    arrows: false,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1500,
    variableWidth: true,
    responsive: [
      {
      breakpoint: 479,
      settings: {
          slidesToShow: 1,
          variableWidth: false,
        }
     }
    ]
});