$(function(){
	var windowHeight =$(window).height();
	var windowWidth =$(window).width();
	var backContentHeight =$('.back-content').height();
	var backPaddingTop =(windowHeight/2)-backContentHeight;
	var flipwrapWidth= $('.flip-wrap').width();
	//alert(windowHeight);
	$('.flip-wrap').css({
			width:windowWidth,
			height:windowHeight,
		});
		$('.front').css({'height':windowHeight,'padding-top':windowHeight/2});
		$('.front:nth-child(2)').css({'padding-top':windowHeight/2});
		$('.back').css({'height':windowHeight,'padding-top':backPaddingTop});

	$('.flip-wrap').prepend('<div class="slide-thumb"><img src=img/slide-thumb.png></div>');
	$('.slide-thumb').click(function(){
		$('.flip-wrap').stop().animate({'margin-left':-windowWidth}).hide();
		});
	$('.flip-container').css({width:(windowWidth/4+80)});
	//$('.flip-container:first-child').css({width:windowWidth/6-(2)});
	//$('.flip-container:last-child').css({width:windowWidth/3+(160)});

	});
