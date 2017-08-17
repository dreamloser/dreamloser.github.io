$(function() {

'use strict';  

var $body = $(document);
  $body.bind('scroll', function() {
      // "Disable" the horizontal scroll.
      if ($body.scrollLeft() !== 0) {
          $body.scrollLeft(0);
      }
  });
  
var videoPlayed = 0;

$('.intros button').click(function(){

if (videoPlayed == 0) {
$('.intros button').hide();
$('.intros button + p').hide(); 
var xy = '<div id="player"></div>';
$('.intros:nth-child(4)').prepend(xy); 
$.getScript("js/jquery.tubular.edited.js", function() {
$('#player').tubular();  
$('.mask2').css('visibility','visible'); 
});   
videoPlayed = 1;
} else {window.location.reload()} 
});

if (screen.width > 700) {
$(window).scroll(function() {   
      if ($(this).scrollTop() < 400) {  
        if ($('header').hasClass('fadeInDown')) {$('header').addClass('animated fadeOutUp');}
      }
}) 
};
if (screen.width > 800) {
$(window).scroll(function() { 
  if ($(this).scrollTop() > 400 && $(window).scrollTop() + $(window).height() !== $(document).height()) {
  if ($('header').hasClass('fadeOutUp')) {$('header').removeClass('animated fadeOutUp')};
  $('header').addClass('animated fadeInDown'); 
 } 
  if ($(this).scrollTop() > 800 && $(window).scrollTop() + $(window).height() !== $(document).height()) { 
  $('.intros:first-child').addClass('zoomInDown animated').css('opacity', '1');
} 
if ($(this).scrollTop() > 1500 && $(window).scrollTop() + $(window).height() !== $(document).height()) { 
   $('.featured').addClass('zoomIn animated').css('opacity', '1');
 }
});
} else {  
  $(window).scroll(function() { 
if ($(this).scrollTop() > 400 && $(window).scrollTop() + $(window).height() !== $(document).height()) {
  $('header').css('opacity','1').fadeIn();
} else {
  $('header').fadeOut();
}
});
}
var i = 1;
window.setInterval(function() {
	   i += 1;	
	   $('#screenshot').fadeOut(500);
	   setTimeout(function(){
       $('#screenshot').attr('src', 'assets/question_' + i + '.jpg').fadeIn(500);  
       if (i == 7) {i = 0};
   }, 500)
}, 7000); 
 

$('#email').blur(function() { 
   $('#submit').css({'background-color':'#25f598', 'opacity':'1'});
 });
$('#email').focus(function() {
   $('#submit').css({'background-color':'#21B673', 'opacity':'1'});
 });
$('#email').on('keydown', function() {
   $('#submit').css({'background-color':'#21B673', 'opacity':'.7'});
});
$('#submit').mouseover(function() {
   $('#submit').css({'background-color':'#E4365A', 'opacity':'1'});
});
$('#submit').mouseout(function() {
   $('#submit').css({'background-color':'#21B673', 'opacity':'1'});
});
$('#email2').blur(function() { 
   $('#submit2').css({'background-color':'#25f598', 'opacity':'1'});
 });
$('#email2').focus(function() {
   $('#submit2').css({'background-color':'#21B673', 'opacity':'1'});
 });
$('#email2').on('keydown', function() {
   $('#submit2').css({'background-color':'#21B673', 'opacity':'7'});
});
$('#submit2').mouseover(function() {
   $('#submit2').css({'background-color':'#E4365A', 'opacity':'1'});
});
$('#submit2').mouseout(function() {
   $('#submit2').css({'background-color':'#21B673', 'opacity':'1'});
});
 

if( screen.width > 480 ) {
$(window).scroll(function() { 
       if ($(this).scrollTop() > 2500) {
          $('.stt').fadeIn(1000);
       } else { 
          $('.stt').fadeOut(1000);
       }
  })
  $('.stt').click(function(){
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
})
}

/* setTimeout(function(){
$('.subs>p').addClass('animated shimmer');
}, 2500);  */


$('.skip').fadeIn(5000);

$(".skip").click(function(){ 
        $('.play, .tex, .skip, #pg-container, #pg-player').hide();
        $('.logoContainer, .explore').fadeIn(1000);
        $('.mask').css('background-color','rgb(226,40,78)');
        $('body').css('overflow','visible');
}); 

$("#menu").click(function(){  
  if ( $('.links').css('visibility') == 'hidden' ) {
    $('.navbar').css('height', '500px');
    $('.links').css('visibility','visible');
  } else {
    $('.links').css('visibility','hidden');
    $('.navbar').css('height', '100%');
}
});

});
















 