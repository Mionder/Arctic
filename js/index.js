function openTab(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" news__active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " news__active";
  } 

let acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
} 

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
    $(".accordion").on("click", function(){
        if($(this).children().attr("src") == "./img/Minus2.svg"){
            $(this).children().attr("src", "./img/news_plus.svg");
        }   
        else
       $(this).children().attr("src", "./img/Minus2.svg");
    });
});
    