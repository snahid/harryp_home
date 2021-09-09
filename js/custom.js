// new Splide( '.splide', {
//     direction  : 'ttb',
//      heightRatio: 1.8,
//     perPage    : 1,
//     } ).mount();


    $('.story-slider').owlCarousel({
        loop:true,
        autoplay:true,
        margin:10,
        autoplayTimeout:4000,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

