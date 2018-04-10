$(document).ready(function () {
    
/////////////////////////////////////////////////////////
    // Waypoint /////////////////

    $('.js--wp-section').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '40px;'
    });
    
    
    
      $('.js--wp-titre').waypoint(function (direction) {
        $('.js--wp-titre').addClass('animated fadeInDown');
    }, {
        offset: '50%'
    });
    
    
    
      $('.js--wp-catalogue1').waypoint(function (direction) {
        $('.js--wp-catalogue1').addClass('animated fadeInLeft');
    }, {
        offset: '50%'
    });

      $('.js--wp-catalogue2').waypoint(function (direction) {
        $('.js--wp-catalogue2').addClass('animated fadeInRight');
    }, {
        offset: '50%'
    });
    
      $('.js--wp-produits').waypoint(function (direction) {
        $('.js--wp-produits').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
      $('.js--wp-logo-partenaire').waypoint(function (direction) {
        $('.js--wp-logo-partenaire').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });


    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    
/////////////////////////////////////////////////////////
    // Scroll ////////////////////

    $(".js-scroll-catalogue").click(function () {
        $("html, body").animate({
            scrollTop: $(".js-section-catalogue").offset().top
        }, 1000);
    });

    $(".js-scroll-collecte").click(function () {
        $("html, body").animate({
            scrollTop: $(".js-section-collecte").offset().top
        }, 1000);
    });

    $(".js-scroll-atelier").click(function () {
        $("html, body").animate({
            scrollTop: $(".js-section-atelier").offset().top
        }, 1000);
    });

    $(".js-scroll-actualite").click(function () {
        $("html, body").animate({
            scrollTop: $(".js-section-actualite").offset().top
        }, 1000);
    });

    
    
/////////////////////////////////////////////////////////
    // Menu pour mobile ////////////////////

    $(".js-menu-icon").click(function () {
        var nav = $(".js-menu");
        var icon = $(".js-menu-icon i");

        nav.slideToggle(200);

        if (icon.hasClass("ion-navicon-round")) {
            icon.addClass("ion-close-round");
            icon.removeClass("ion-navicon-round");
        } else {
            icon.addClass("ion-navicon-round");
            icon.removeClass("ion-close-round");
        }


    });
});
