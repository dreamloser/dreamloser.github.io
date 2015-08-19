$(function() {

'use strict';
  
var circle = new ProgressBar.Circle('#clock', {
    color: '#E2284E',
    strokeWidth: 4,
    trailWidth: 1,
    duration: 8000,
    text: {
        value: '0'
    },
    step: function(state, bar) {
        bar.setText((bar.value() * 10).toFixed(0));
    }
});

circle.animate(1, function() {
    circle.animate(0);
})


setTimeout(function(){
$('.play').css('visibility','visible').addClass('slideInUp animatedSlow');
}, 3000)




$('a.btn').click(function(){
   $('.play').hide();
if (this.id == 'correct') {
	$('.tex').css('visibility','visible').addClass('bounceIn animated');
} else {
	$('.tex p:nth-child(1)').text('Ouch!');
	$('.tex p:nth-child(2)').text('looks like you need some more practice.');
	$('.tex').css({'visibility':'visible','margin-left':' -241px','margin-top':' -135px'}).addClass('bounceIn animated');
}

setTimeout(function(){
	    $('.tex').hide();
		$('.container, .logoContainer').css('visibility', 'visible').addClass('animated fadeIn');
		   setInterval(function(){
		   $('.des').toggleClass("pulse animatedDelayed")
		}, 3000) 
	}, 1800)

   

});


setTimeout(function(){
     	$('.play').hide();
	    $('.tex p:nth-child(1)').text('Ouch!');
	    $('.tex p:nth-child(2)').text('looks like you need some more practice.');
	    $('.tex').css({'visibility':'visible','margin-left':' -241px','margin-top':' -135px'}).addClass('bounceIn animated');
	    setTimeout(function(){
	    $('.tex').hide();
		$('.container, .logoContainer').css('visibility', 'visible').addClass('animated fadeIn');
		   setInterval(function(){
		   $('.des').toggleClass("pulse animatedDelayed")
		}, 3000) 
	}, 1800)
	}, 16000)




});
















 