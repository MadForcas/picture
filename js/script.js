
function showGallery(){
    $(".gallery").fadeIn("slow");
}


$( function () {
    showGallery();
    $(".small-photo").hover(function(){
        $(this).toggleClass("gray-photo");
    })
    // $(".menu").fadeIn("slow");
    // $( ".menu ul li" ).hover(function() {
    //     $( this ).toggleClass( "menu-selected" );
    // });
    //
    // $("#gallery").click(function(){
    //
    // });
});



