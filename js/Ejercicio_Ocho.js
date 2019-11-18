$(document).ready(function () {
    $(".campo").mouseenter(function () {
        $(this).css("background-color", "yellow");
    });
    $(".campo").mouseleave(function () {
        $(this).css("background-color", "");
    });
});