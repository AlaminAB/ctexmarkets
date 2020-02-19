(function ($) {
    "use strict";




       var ctx = document.getElementById('myChart1').getContext('2d');
       var myChart = new Chart(ctx, {
           type: 'bar',
           data: {
               labels: ['USD', 'EUR', 'BTC', 'ETH', 'USDT', 'USDC'],
               datasets: [{
                   label: 'Life expectancy',
                   data: [400, 300, 150, 380, 80, 190],
                   backgroundColor: [
                       'rgba(216, 27, 96, 0.6)',
                       'rgba(3, 169, 244, 0.6)',
                       'rgba(255, 152, 0, 0.6)',
                       'rgba(29, 233, 182, 0.6)',
                       'rgba(156, 39, 176, 0.6)',
                       'rgba(84, 110, 122, 0.6)'
                   ],
                   borderColor: [
                       'rgba(216, 27, 96, 1)',
                       'rgba(3, 169, 244, 1)',
                       'rgba(255, 152, 0, 1)',
                       'rgba(29, 233, 182, 1)',
                       'rgba(156, 39, 176, 1)',
                       'rgba(84, 110, 122, 1)'
                   ],
                   borderWidth: 0
               }]
           },
           options: {
               legend: {
                   display: false
               },
               title: {
                   display: false,
                   text: 'Life Expectancy by Country',
                   position: 'top',
                   fontSize: 16,
                   padding: 20
               },
               scales: {
                   yAxes: [{
                       ticks: {
                           min: 0,
                           max: 500,
                           fontColor: "rgba(255, 255, 255, 0.50)",
                           fontSize: 14,
                       },
                       gridLines: {
                           color: "rgba(255, 255, 255, 0.10)",
                           lineWidth: 1,
                           zeroLineColor: "rgba(255, 255, 255, 0.27)",
                           zeroLineWidth: 1
                       },
                   }],
                   xAxes: [{
                       barThickness: 28,
                       maxBarThickness: 28,
                       ticks: {
                           fontColor: "rgba(255, 255, 255, 0.50)",
                           fontSize: 14
                       },
                       gridLines: {
                           color: "#fff",
                           lineWidth: 0
                       }
                   }]
               }
           }
       });
    // Vertical bar chart



    // Vertical bar chart



       var ctx = document.getElementById('chart-bar').getContext('2d');
       var myChart = new Chart(ctx, {
           type: 'bar',
           data: {
               labels: ['Buy', 'Sell', 'Transfer'],
               datasets: [{
                   label: 'Life expectancy',
                   data: [2, 1, 0],
                   backgroundColor: [
                       'rgba(216, 27, 96, 0.6)',
                       'rgba(3, 169, 244, 0.6)',
                   ],
                   borderColor: [
                       'rgba(216, 27, 96, 1)',
                       'rgba(3, 169, 244, 1)',
                   ],
                   borderWidth: 0
               }]
           },
           options: {
               legend: {
                   display: false
               },
               title: {
                   display: false,
                   text: 'Life Expectancy by Country',
                   position: 'top',
                   fontSize: 16,
                   padding: 20
               },
               scales: {
                   yAxes: [{
                       ticks: {
                           min: 0,
                           max: 3,
                           fontColor: "rgba(255, 255, 255, 0.50)",
                           fontSize: 14,
                       },
                       gridLines: {
                           color: "rgba(255, 255, 255, 0.10)",
                           lineWidth: 1,
                           zeroLineColor: "rgba(255, 255, 255, 0.27)",
                           zeroLineWidth: 1
                       },
                   }],
                   xAxes: [{
                       barThickness: 28,
                       maxBarThickness: 28,
                       ticks: {
                           fontColor: "rgba(255, 255, 255, 0.50)",
                           fontSize: 14
                       },
                       gridLines: {
                           color: "#fff",
                           lineWidth: 0
                       }
                   }]
               }
           }
       });


        var ctx = document.getElementById('doughnut').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Kraken', 'Lbank', 'CEX', 'Livecoin', 'ABCC', 'Gate'],
                datasets: [{
                    data: [50.92, 17.53, 14.94, 26.62, 12.99, 15.99],
                    backgroundColor: ['#6E70FC', '#F9EE68', '#A563F1', '#66F3F9', '#57926B', '#984F6B'],
                    borderWidth: 1,
                    borderColor: '#fff'
                }],
            },
            options: {
                title: {
                    display: false,
                    text: 'Recommended Daily Diet',
                    position: 'top',
                    fontSize: 16,
                    fontColor: '#111',
                    padding: 20
                },
                legend: {
                    display: false,
                    position: 'bottom',
                    labels: {
                        boxWidth: 20,
                        fontColor: '#fff',
                        padding: 15
                    },
                    animation: {
                        animateScale: true,
                        animateRotate: true
                    }
                },
                tooltips: {
                    enabled: true
                },
                plugins: {
                    dataLabels: {
                        display: true,
                        color: '#fff',
                        textAlign: 'center',
                        font: {
                            lineHeight: 1.6
                        },
                        formatter: function (value, ctx) {
                            return ctx.chart.data.labels[ctx.dataIndex] + '\n' + value + '%';
                        }
                    }
                }
            }
        });


    // Doughnut chart



    // //for menu active class
    // $('.main-menu nav ul li').on('click', function (event) {
    //     $(this).siblings('.active').removeClass('active');
    //     $(this).addClass('active');
    //     event.preventDefault();
    // });



    // // One Page Nav
    // var top_offset = $('.header-area').height() - 10;
    // $('.main-menu nav ul').onePageNav({
    //     currentClass: 'active',
    //     scrollOffset: top_offset,
    // });

    // data - background
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    })



    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".header-sticky").removeClass("sticky");
        } else {
            $(".header-sticky").addClass("sticky");
        }
    });



    // mainSlider
    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function (e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: false,
            autoplaySpeed: 10000,
            dots: false,
            fade: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        dots: false,
                        arrows: false
                    }
                }
		]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();


    // owlCarousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 3
            },
            992: {
                items: 5
            }
        }
    })


    /* magnificPopup img view */
    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /* magnificPopup video view */
    $('.popup-video').magnificPopup({
        type: 'iframe'
    });


    // isotop
    $('.grid').imagesLoaded(function () {
        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-item',
            }
        });
    });

    // filter items on button click
    $('.portfolio-menu').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

    //for menu active class
    $('.portfolio-menu button').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    //slick-activation
    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });


    // scrollToTop
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="fas fa-level-up-alt"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    // WOW active
    new WOW().init();


})(jQuery);
