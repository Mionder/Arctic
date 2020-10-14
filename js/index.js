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
    })
    
});