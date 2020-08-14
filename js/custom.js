$(function () {

    //    slick banner slide
    $('.warp1').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: '.righticon',
        prevArrow: '.lefticon'
    });
    //    slick banner slide
    $('.warp2').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        nextArrow: '.righticon',
        prevArrow: '.lefticon'
    });

    //==== Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });

    //    strikymenu
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".navigation").removeClass("sticky");
            $(".header-three .navigation img").attr("src", "images/logo-2.png");
        } else {
            $(".navigation").addClass("sticky");
            $(".header-three .navigation img").attr("src", "images/logo.png");
        }
    });









});
