$(function() {

'use strict';
 

setTimeout(function(){
$('.promo nav').fadeIn(500).css('display', 'inline-block');
}, 3550)

$('body').on('click', 'a.btn', function(){
   $('.promo').hide();
   $('.container').css("visibility", "visible").addClass('animated fadeIn');
});

















});