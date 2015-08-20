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

function sd() {
	$('.play').removeClass('slideInUp animatedSlow').addClass('slideOutDown animated');
}

function vanish() {
	    $('.mask').css('background-color','rgb(226,40,78)')
	    $('.tex, #skip').hide();
		$('.logoContainer').fadeIn(1000);
}

$('a.btn').click(function(){
   sd();
if (this.id == 'correct') {
	$('.tex').css('visibility','visible');
} else {
	$('.tex p:nth-child(1)').text('Ouch!');
	$('.tex p:nth-child(2)').html('<p>looks like you<br> need some more practice.</p>');
	$('.tex').css('visibility','visible');
}
setTimeout(vanish, 2500)
});

setTimeout(function(){
	    sd();
	    $('.tex p:nth-child(1)').text('Ouch!');
	    $('.tex p:nth-child(2)').text('looks like you need some more practice.');
	    $('.tex').css('visibility','visible');
	    setTimeout(vanish, 1800)
	}, 16000)

$("#skip").click(function(){ 
        $('.play, .tex, #skip').hide();
		$('.logoContainer').fadeIn(1000);
	    $('.mask').css('background-color','rgb(226,40,78)');
});

});
















 