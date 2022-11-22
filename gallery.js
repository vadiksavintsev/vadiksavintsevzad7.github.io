$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        dots:true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
            }
        ]
    });
    });
