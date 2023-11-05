$(document).ready(function() {
    $(".thumbnail").on("click", function() {
        var imgSrc = $(this).attr("src");
        $(".full-image").fadeOut(300, function() {
            $(this).attr("src", imgSrc).fadeIn(300);
        });
    });
});
