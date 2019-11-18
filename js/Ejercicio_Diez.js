$(document).ready(function () {
    $("#texto1").click(function () {
        $(this).hide(2000);
        $("#texto2").show(2000);
    });
    $("#texto2").click(function () {
        $(this).hide(2000);
        $("#texto3").show(2000);
    });
    $("#texto3").click(function () {
        $(this).hide(2000);
        $("#texto1").show(2000);
    });
});