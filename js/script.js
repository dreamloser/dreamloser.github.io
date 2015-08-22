$(function() {

'use strict'; 

/*window.onPlayerReady*/ 
setTimeout(function(){
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
    $('.tex, #skip, #pg-container, #pg-player').hide();
	$('.logoContainer').fadeIn(1000);
}

function wrongAns() {
	$('.tex p:nth-child(1)').text('Ouch!');
	$('.tex p:nth-child(2)').html('<p>looks like you<br> need some more practice.</p>');
	$('.tex').css('visibility','visible');
}

$('a.btn').click(function(){
   sd();
if (this.id == 'correct') {
	$('.tex').css('visibility','visible');
} else {
	wrongAns();
}
setTimeout(vanish, 2500)
});

setTimeout(function(){
	    sd();
	    if ($('.tex').css('visibility') !== 'visible') {wrongAns()}
	    setTimeout(vanish, 1800)
	}, 16000)

$("#skip").click( function(){ 
        $('.play, .tex, #skip, #pg-container, #pg-player').hide();
		$('.logoContainer').fadeIn(1000);
	    $('.mask').css('background-color','rgb(226,40,78)');
});
  

}, 2000)

});
















 