$(function() {

'use strict';  

if(document.body.clientWidth <= 500) {
    $('#player, #tubular-shield, .play, #skip').remove();
    $('.logoContainer').css('display','block');
    $('.mask').css('background-color','rgb(226,40,78)');
} else {
	$('#player').tubular(); 
}

$('#skip').fadeIn(5000);

$("#skip").click(function(){ 
        $('.play, .tex, #skip, #pg-container, #pg-player').hide();
        $('.logoContainer').fadeIn(1000);
        $('.mask').css('background-color','rgb(226,40,78)');
}); 
 
});
















 