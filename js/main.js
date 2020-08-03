$(document).ready(function() {
  // Slick Nav
  $(".menu").slicknav({
    label: "",
    closedSymbol: "+",
    openedSymbol: "-;",
    brand: "<a href='index.html'><img src='img/logo/logo.png'></a>"
  });

  // Sticky Menu
  $(window).on("scroll", function() {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $("#header").removeClass("sticky-bar");
    } else {
      $("#header").addClass("sticky-bar");
    }
  });
  $(window).on("scroll", function() {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $(".slicknav_menu").removeClass("sticky-bar");
    } else {
      $(".slicknav_menu").addClass("sticky-bar");
    }
  });

  var mixer = mixitup(".subject")


  $(window).scroll(function() {
    if($(this).scrollTop() > 100) {
      $(".up").fadeIn();
    }else {
      $(".up").fadeOut();
    }
  });

  $(".up").click(function() {
    $("html, body").animate({scrollTop: 0},1000);
  });


});
