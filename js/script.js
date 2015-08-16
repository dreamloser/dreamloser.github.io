$(function() {

'use strict';
 

setTimeout(function(){
$('.promo nav').addClass('animated fadeIn');
}, 3250)

$('body').on('click', 'a.btn', function(){
   $('.promo').hide();
   $('.container').css("visibility", "visible").addClass('animated fadeIn');
});

















});