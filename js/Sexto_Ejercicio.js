$(document).ready(function(){
    $("#head").click(function(){
        alert($("head").html());
    });

    $("#body").click(function(){
        alert($("body").html());
    });
});