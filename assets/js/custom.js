$(window).scroll(function () {
    $('.business-info-content').each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 700) {
            $(this).addClass("animated fadeInLeft");
        }
        else {
            $(this).removeClass('animated fadeInLeft');

        }
    });

    $('.feature-hl-list li').each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 700) {
            $(this).addClass("animated bounceInDown");
        }
        else {
            $(this).removeClass('animated bounceInDown');

        }
    });

    $('.fre_Ques-cont').each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 700) {
            $(this).addClass("animated bounceInLeft");
        }
        else {
            $(this).removeClass('animated bounceInLeft');

        }
    });

    $('.mobile-slide-cont').each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 700) {
            $(this).addClass("animated bounceInRight");
        }
        else {
            $(this).removeClass('animated bounceInRight');

        }
    });

    $('.getaquote').each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 800) {
            $(this).addClass("animated fadeIn");
        }
        else {
            $(this).removeClass('animated fadeIn');

        }
    });


    $('.form-img-cont').each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 1000) {
            $(this).addClass("animated fadeInRight");
        }
        else {
            $(this).removeClass('animated fadeInRight');

        }
    });

    $('.head-ani').each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 1000) {
            $(this).addClass("animated fadeInLeft");
        }
        else {
            $(this).removeClass('animated fadeInLeft');

        }
    });


    $('.para-ani').each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 1000) {
            $(this).addClass("animated fadeInDown");
        }
        else {
            $(this).removeClass('animated fadeInDown');

        }
    });

    $('.case-st-rest-ani-1').each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 700) {
            $(this).addClass("animated bounceInUp");
        }
        else {
            $(this).removeClass('animated bounceInUp');

        }
    });

   

});







