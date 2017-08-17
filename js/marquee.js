var marqueeVars = {
		screenSize: '',
		width: 0,
		mobileSize: 800,
		autoPlay: true,
		currentPanel: 1,
		totalPanels: 0,
		timePassed: 0,
		timeToChange: 60,
		duration: 1250,
		inTransition: false,
		panelContent: Array
};

$(document).ready(function(){
    marqueeGatherData();
/*     var $dragging = null; 
    $(document.body).on("mousemove", function(e) {
        if ($dragging) {
            $dragging.offset({
                top: e.pageY,
                left: e.pageX
            });
        }
    }); 
    $(document.body).on("mousedown", ".marquee", function (e) {
        $dragging = $(e.target);
    });

    $(document.body).on("mouseup", function (e) {
        $dragging = null;
    });
*/

});

function marqueeGatherData() {
	$('.marquee_data .marquee_panel').each(function(index){
         marqueeVars.totalPanels = index + 1;
         console.log(marqueeVars.totalPanels);
    var panel_image_l = $(this).attr('data-image')+'_l.png';
	var panel_image_s = $(this).attr('data-image')+'_s.png';
	var panel_caption = $(this).html();
	marqueeVars.panelContent[index] = '<div class="marquee_panel" data-image-s="'+panel_image_s+'" style="background-image:url('+ panel_image_l +');"><div class="panel_caption">'+panel_caption+'</div></div>'
	}); 
	var marqueeTimer = setInterval(marqueeAdvance, 100);
}

function marqueeAdvance() {
	var marqueeWidth = $('.marquee').width();
	var currentSize = marqueeVars.screenSize;
	if (marqueeWidth > marqueeVars.mobileSize) {
		var newSize = 'large';
	} else {
		var newSize = 'small'
	}
	marqueeVars.screenSize = newSize;  
    if (currentSize !== newSize) {
       if (marqueeVars.screenSize == 'large') {
           marqueeMultiPanel();
       } else {
    	marqueeSinglePanel();
	$('.marquee .marquee_panel .panel_caption a.cta').text('Next');
    }
    } 

	if (marqueeVars.timePassed == marqueeVars.timeToChange) { 	
       marqueeVars.timePassed = 0;
       if (marqueeVars.autoPlay == true) {
	$('.marquee_container_1 .panel_caption').fadeOut(500);
          if (marqueeVars.currentPanel == marqueeVars.totalPanels) {
              $('.marquee_nav div:nth-child(1)').trigger('click');
          } else {
          	  $('.marquee_nav div:nth-child('+(marqueeVars.currentPanel+1)+')').trigger('click');
          }
       }
	} else {
		marqueeVars.timePassed += 1;
	}
}

function marqueeMultiPanel() {
	marqueeVars.timePassed = 0;
	marqueeVars.autoPlay = true;
	var newHTML = '<div class="marquee_stage_large"><div class="marquee_container_1"></div><div class="marquee_nav"></div><div class="btn prev"></div><div class="btn next"></div></div>';

	$('.marquee').html('').append(newHTML);
	
	for (i=0;i<marqueeVars.totalPanels;i++) {
       $('.marquee_nav').append('<div></div>');
	}

	$('.marquee_panel').hover(function(){
		marqueeVars.autoPlay = false;
	}, function(){
        marqueeVars.autoPlay = true;
        marqueeVars.timePassed = Math.floor(marqueeVars.timeToChange/2);
	}); 
    $(document).on('click','.cta', function() {
    $('html, body').animate({
        scrollTop: $('.marquee_nav').offset().top
    }, 1000); 
});
    $('.marquee .btn').on('click', function(){ 
    	if (!marqueeVars.inTransition) {
    		if ($(this).hasClass('prev')) {
                marqueeVars.currentPanel -= 1;
                if (marqueeVars.currentPanel < 1) {
                    marqueeVars.currentPanel = marqueeVars.totalPanels
                }
    		} else {
                marqueeVars.currentPanel += 1;
               if (marqueeVars.currentPanel > marqueeVars.totalPanels) {
                    marqueeVars.currentPanel = 1;
                }
    		} 
    		$('.marquee_nav div:nth-child(' + marqueeVars.currentPanel + ')').trigger('click');
    	}
    });

	$('.marquee_nav div').on('click', function(){ 
      if (!marqueeVars.inTransition) { 
		marqueeVars.inTransition = true;
		var navClicked = $(this).index();
	    if (!$(this).hasClass('selected')) {$('.marquee_panel .panel_caption').fadeOut(500);}
		marqueeVars.currentPanel = navClicked + 1;
        $('.marquee_nav div').removeClass('selected');
		$(this).addClass('selected');
		$('.marquee_stage_large').append('<div class="marquee_container_2" style="opacity:0;"></div>')
		$('.marquee_container_2').html(marqueeVars.panelContent[navClicked]).animate({
			opacity: 1
		}, marqueeVars.duration, function(){
			$('.marquee_container_1').remove();
			$(this).addClass('marquee_container_1').removeClass('marquee_container_2');
			marqueeVars.inTransition = false;
		});
      }
	});
	$('.marquee_nav div:first').trigger('click');
}

function marqueeSinglePanel() {  
    marqueeVars.timePassed = 0;
    if (!marqueeVars.inTransition) {
	marqueeVars.autoPlay = false;
};
	var newHTML = '<div class="marquee_stage_large"><div class="marquee_container_1"></div><div class="marquee_nav"></div><div class="btn prev"></div><div class="btn next"></div></div>';

	$('.marquee').html('').append(newHTML);
	
	for (i=0;i<marqueeVars.totalPanels;i++) {
       $('.marquee_nav').append('<div></div>');
	}

	$('.marquee_panel').hover(function(){
		marqueeVars.autoPlay = false;
	}, function(){
        marqueeVars.autoPlay = true;
        marqueeVars.timePassed = Math.floor(marqueeVars.timeToChange/2);
	});  
    $('.marquee .btn').remove();
    /*on('click', function(){ 
    	if (!marqueeVars.inTransition) {
    		if ($(this).hasClass('prev')) {
                marqueeVars.currentPanel -= 1;
                if (marqueeVars.currentPanel < 1) {
                    marqueeVars.currentPanel = marqueeVars.totalPanels
                }
    		} else {
                marqueeVars.currentPanel += 1;
               if (marqueeVars.currentPanel > marqueeVars.totalPanels) {
                    marqueeVars.currentPanel = 1;
                }
    		} 
    		$('.marquee_nav div:nth-child(' + marqueeVars.currentPanel + ')').trigger('click');
    	}
    });*/
   $(document).on('click', '.marquee .marquee_panel .panel_caption a.cta', function(){ 
   	if (!marqueeVars.inTransition) {
			   marqueeVars.currentPanel += 1;
               if (marqueeVars.currentPanel > marqueeVars.totalPanels) {
                    marqueeVars.currentPanel = 1;
                }
                $('.marquee_nav div:nth-child(' + marqueeVars.currentPanel + ')').trigger('click');
            }
});
	$('.marquee_nav div').on('click', function(){ 
      if (!marqueeVars.inTransition) { 
		marqueeVars.inTransition = true;
		var navClicked = $(this).index();
	    if (!$(this).hasClass('selected')) {$('.marquee_panel .panel_caption').fadeOut(500);}
		marqueeVars.currentPanel = navClicked + 1;
        $('.marquee_nav div').removeClass('selected');
		$(this).addClass('selected');
		$('.marquee_stage_large').append('<div class="marquee_container_2" style="opacity:0;"></div>')
		$('.marquee_container_2').html(marqueeVars.panelContent[navClicked]).animate({
			opacity: 1
		}, marqueeVars.duration, function(){
			$('.marquee_container_1').remove();
			$(this).addClass('marquee_container_1').removeClass('marquee_container_2');
			marqueeVars.inTransition = false;
		});
	$('.marquee .marquee_panel .panel_caption a.cta').text('Next');
      }
	});
	$('.marquee_nav div:first').trigger('click');
}