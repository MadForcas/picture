
function showGallery(){
    $(".gallery").fadeIn(1500);
}


$( function () {
    showGallery();
    $(".small-photo").hover(function(){
        $(this).toggleClass("gray-photo");
    });
    // $(".menu").fadeIn("slow");
    // $( ".menu ul li" ).hover(function() {
    //     $( this ).toggleClass( "menu-selected" );
    // });
    //
    // $("#gallery").click(function(){
    //
    // });
    $('.brick')
		.draggable( {  snap: ".brick", snapMode: "outer", containment: ".board"} )
		.resizable( {   containment: ".board" } );
});



