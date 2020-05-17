// panel
$('.panel_heading .block_title').click(function () {
    $(this).parents('.panel_heading').toggleClass('in').find('.block_hover').slideToggle();
    $('.panel_heading .block_title').not(this).parents('.panel_heading').removeClass('in').find('.block_hover').slideUp();
});
// panel end

// form active
$('.btn-answer').click(function (e) {
    e.preventDefault();
    $(this).hide().siblings('.form-answer').toggleClass('open');
});
// form active end

// модальные окна (несколько)
$(document).ready(function () {
    var overlay = $('.overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal__close, .overlay');
    var modal = $('.modal__div');

    open_modal.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.click(function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end


// category

$('.list-category li a').on('click', function (e) {
    e.preventDefault();

    $('.new-niche__wrapper').fadeOut();

    $('.box-category .list-category li').removeClass('click');
    $(this).parents('li').addClass('click');
});

// $('.box-category .list-category li a').click(function () {
//    $(this).next('.box-category').addClass('active');
//    $('.box-category').removeClass('active');
// });

// $('.box-category-1 .list-category li a').on('click', function (e) {
//     e.preventDefault();
//     $('.box-category-2').removeClass('active');
//     // $('.box-category-1 .list-category li').removeClass('click');
//
//     $(this).parents('.item-dropDown').find('.box-category-2').addClass('active');
//
// });
//
// $('.box-category-2 .list-category li a').on('click', function (e) {
//     e.preventDefault();
//     $('.box-category-3').removeClass('active');
//     // $('.box-category-2 .list-category li').removeClass('click');
//     $(this).parents('.item-dropDown').find('.box-category-3').addClass('active');
//
// });
// category

$('.new-niche').click(function (e) {
    e.preventDefault();
    $(this).parents('li').addClass('click');
    $('.box-category-2, .box-category-3').removeClass('active');
    $('.new-niche__wrapper').fadeIn();
});

// slick active
$(window).on('load resize', function() {
    if ($(window).width() < 920) {
        $('.subscribe-wrapper:not(.slick-initialized)').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            arrows: false,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 630,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    } else {
        $(".subscribe-wrapper.slick-initialized").slick("unslick");
    }
});
// slick active