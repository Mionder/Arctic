$(document).ready(function(){
    $("#mail__header").on("mouseover", function(){
        $(this).children().css("fill", "#fff");
    })
    $("#mail__header").on("mouseout", function(){
        $(this).children().css("fill", "#2F97F4");
    })
    $("#phone__header").on("mouseover", function(){
        $(this).children().css("fill", "#fff");
    })
    $("#phone__header").on("mouseout", function(){
        $(this).children().css("fill", "#2F97F4");
    });
      $("ul li").hover(function() {
        $(this)
          .children("ul")
          .stop()
          .slideToggle(500);
      });   
      $(".objects").hover(
        function() {
          $(this).find(".advantage, .advantage-hover").stop();
          $(this).find(".advantage").slideUp();
          $(this).find(".advantage-hover").slideDown();
        },
        function() {
          $(this).find(".advantage, .advantage-hover").stop();
          $(this).find(".advantage").slideDown();
          $(this).find(".advantage-hover").slideUp();
      
        }
      );
      $(".header-bottom__scroll").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });    
    $(".owl-carousel").owlCarousel({
        nav: false,
        dots: false,
        items:5,
        margin: 20,
        navText: ["", ""],
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    });
});