$(function() {

'use strict';
 
setTimeout(function(){

 $('i.fa-star').css('visibility', 'visible');

}, 5000)

setTimeout(function(){
$('.promo nav').fadeIn(500).css('display', 'inline-block');
}, 3750)


$('body').on('click', 'a.btn', function(){
   $('.promo').hide();
   $('.container, .logoContainer').css('visibility', 'visible').addClass('animated fadeIn');
   setInterval(function(){
   $('.des').toggleClass("pulse animatedDelayed")
}, 3000)



});

















});