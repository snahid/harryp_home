$(document).ready(function(){
$('.carousel').carousel({
    interval: false
});







    // Home Menu 
    $('.menu-dots').click(function(){
        $('.menu-dots').css({
            'transition': '0.3s ease-in-out',
            'opacity': '0',
            'visibility': 'hidden'
        });
        $('.cross').css({
            'visibility': 'visible',
            'transition': '0.3s ease-in-out',
            'opacity': '1'
        });
        $('.mymobile-menu').css({
            'visibility': 'visible',
            'opacity': '1'
        });
        $('.mobile-wrapper').css({
            'z-index': '5' 
        });
    });
    $('.cross').click(function(){
        $('.cross').css({
            'transition': '0.3s ease-in-out',
            'opacity': '0',
            'visibility': 'hidden'
        });
        $('.menu-dots').css({
            
            'transition': '0.3s ease-in-out',
            'opacity': '1',
            'visibility': 'visible'
        });
        $('.mymobile-menu').css({
            'visibility': 'hidden',
            'opacity': '0'
        });
        $('.mobile-wrapper').css({
            'z-index': '-1' 
        });
    });
     // Home Menu 

    // News Menu
    $('.news-menu-dots').click(function(){
        $('.news-menu-dots').css({
            'transition': '0.3s',
            'opacity': '0',
            'visibility': 'hidden'
        });
        $('.news-cross').css({
            'visibility': 'visible',
            'transition': '0.3s',
            'opacity': '1'
        });
        $('.mymobile-menu').css({
            'visibility': 'visible',
            'opacity': '1'
        });
        $('.news-mobile-wrapper').css({
            'z-index': '5' 
        });
    });
    $('.news-cross').click(function(){
        $('.news-cross').css({
            'transition': '0.3s',
            'opacity': '0',
            'visibility': 'hidden'
        });
        $('.news-menu-dots').css({
            'transition': '0.3s',
            'opacity': '1',
            'visibility': 'visible'
        });
        $('.mymobile-menu').css({
            'visibility': 'hidden',
            'opacity': '0'
        });
        $('.news-mobile-wrapper').css({
            'z-index': '1' 
        });
    });
    // News Menu

    // Accordion 
    $('.acc-top').click(function(){
        if ($(".accrdion-list").css("height") == "0px") {
            $('.acc-icon').css({
                'transform': 'rotate(-180deg)'
            });
            $('.accrdion-list').css({
                'opacity': '1',
                'visibility': 'visible',
                'height': '330px',
                'z-index': '2'
            });
          } else {
            $('.acc-icon').css({
                'transform': 'rotate(0deg)'
            });
            $('.accrdion-list').css({
                'opacity': '0',
                'visibility': 'hidden',
                'height': '0px',
                'z-index': '-1'
            });
          }
       
    });
    // Accordion 

    // Back 
    function goBack() {
        window.history.back();
      }
    // Back 
});


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

    // Small Story 
    $('.small-story-slider').owlCarousel({
        loop:true,
        autoplay:false,
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
    // Small Story 


    // Blog Carousel 


var prevIcon = '<img src="./assets/images/bleft.svg" alt="">';
var nextIcon = '<img src="./assets/images/bright.svg" alt="">';
    $('.blog-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        slideBy: 1,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        navText:[
            prevIcon,
            nextIcon
        ],
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
    })
    // Blog Carousel 


    // var loader = document.getElementById("preloader");

    // window.addEventListener("load", function(){
    //     loader.style.display = "none";
    // });

    // $(window).load(function() {
    //     setTimeout(function(){ $('#preloader').fadeIn(); }, 0);
    //     setTimeout(function(){ $('#preloader').fadeOut('slow'); }, 5000);
       
    //  })

    // $(window).load(function(){
    //     $('#preloader').delay(5000).hide();
    //    });
    setTimeout(function(){        
        $('#preloader').fadeOut();
        $('#preloader').delay(150).fadeOut('slow'); 
    }, 4000);