$(window).on("load", function() {
    "use strict";

    //  ============= MOBILE RESPONSIVE MENU ===============

    $(".menu-btn").on("click", function(){
      $(this).toggleClass("active");
      $(".responsive-mobile-menu").toggleClass("active");
    });

    $(".responsive-mobile-menu ul ul").parent().addClass("menu-item-has-children");
    $(".responsive-mobile-menu ul li.menu-item-has-children > a").on("click", function() {
      $(this).parent().toggleClass("active").siblings().removeClass("active");
      $(this).next("ul").slideToggle();
      $(this).parent().siblings().find("ul").slideUp();
      return false;
    });

    $("html, .menu-btn.active").on("click", function() {
      $(".responsive-mobile-menu").removeClass("active");
      $(".menu-btn").removeClass("active");
    });

    $(".menu-btn, .responsive-mobile-menu").on("click", function(e) {
      e.stopPropagation();
    });

    //  ============= ANIMATION ON DEFAULT THEME BUTTON ===============
    
    $('.lnk-default').on('mouseenter', function(e) {
      var parentOffset = $(this).offset(),
      relX = e.pageX - parentOffset.left,
      relY = e.pageY - parentOffset.top;
      $(this).find('span').css({top:relY, left:relX})
    }).on('mouseout', function(e) {
      var parentOffset = $(this).offset(),
      relX = e.pageX - parentOffset.left,
      relY = e.pageY - parentOffset.top;
      $(this).find('span').css({top:relY, left:relX})
    });


    //  ============= SEARCH PAGE TOGGLE ===============

    $(".search-btn").on("click", function() {
      $(".header-search").addClass("active");
      return false;
    });
    $(".search-close-btn").on("click", function() {
      $(".header-search").removeClass("active");
    })


    //  ============= WEB LOADER ===============

    $('.page-loading').fadeOut();

    // ============ STICKY HEADER ==============

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 1) {
            $("header").addClass("sticky animated slideInDown");
        } else {
            $("header").removeClass("sticky animated slideInDown");
        }
    });

});


