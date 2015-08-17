$(function() {

'use strict';
 

setTimeout(function(){
$('.promo nav').fadeIn(500).css('display', 'inline-block');
}, 3750)

$('body').on('click', 'a.btn', function(){
   $('.promo').hide();
   $('.container').css('visibility', 'visible').addClass('animated fadeIn');
   setInterval(function(){
   $('.des').toggleClass("pulse animatedDelayed")
}, 3000)
});

















});