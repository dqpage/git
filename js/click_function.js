$(function() {
	$('#about').click(function(){$('#navpara').animate({right:'-50px'},500);$('#navpara').css({position:'absolute',});$('#about .gadget-ico').fadeOut();});
//$('#gadget-container').mouseleave(function(){$('#navpara').animate({right:'-800px'},500);$('#about .gadget-ico').fadeIn();});

$('#contact').click(function(){$('#navpara2').animate({right:'-50px'},500);$('#navpara2').css({position:'absolute'});$('#contact .gadget-ico').fadeOut();});
$('#gadget-container2').mouseleave(function(){$('#navpara2').animate({right:'-800px'},500);$('#contact .gadget-ico').fadeIn();});
$('#blog').click(function(){$('#navpara4').animate({left:'-50px'},500);$('#navpara4').css({position:'absolute',});$('#blog .gadget-ico').fadeOut();});
$('#gadget-container4').mouseleave(function(){$('#navpara4').animate({left:'-800px'},500);$('#blog .gadget-ico').fadeIn();});
$('#work').click(function(){$('#navpara3').animate({left:'-50px'},500);$('#navpara3').css({position:'absolute',});$('#work .gadget-ico').fadeOut();});
$('#gadget-container3').mouseleave(function(){$('#navpara3').animate({left:'-800px'},500);$('#work .gadget-ico').fadeIn();});

$('#option1').click(function(){$('#navpara5').animate({left:'-50px'},500);$('#navpara5').css({position:'absolute',});$('#option1 .gadget-ico').fadeOut();});$('#navpara5').mouseleave(function(){$('#navpara5').animate({left:'-800px'},500); $('#option1 .gadget-ico').fadeIn();});

$('#option2').click(function(){$('#navpara6').animate({right:'-50px'},500);$('#navpara6').css({position:'absolute',});$('#option2 .gadget-ico').fadeOut();});$('#navpara6').mouseleave(function(){$('#navpara6').animate({right:'-800px'},500);$('#option2 .gadget-ico').fadeIn();});


$('#nav1').click(function(){
	$('#navpara').animate({right:'-50px'},500),
	$('#navpara2').animate({right:'-800px'},500),
	$('#navpara4').animate({left:'-800px'},500),
	$('#navpara3').animate({left:'-800px'},500)
});
/////////// nav 1 hover ///////////////////////

$('#nav1').hover(function(){
	$('.item1 .gadget-title').css({left:0});
	$('.item1 .gadget-ico').css({background:'#fff'});
	});
		
	$('#nav1').mouseleave(function(){
	$('.item1 .gadget-title').css({left:110});
	$('.item1 .gadget-ico').css({background:'none'});
	});
	
$('.item1 .gadget-ico').hover(function(){
	$('.item1 .gadget-title').css({left:0});
	});	
	$('.item1 .gadget-ico').mouseleave(function(){
	$('.item1 .gadget-title').css({left:110});
	});
	
/////////// nav 1 hover ///////////////////////

$('#nav3').click(function(){
	$('#navpara2').animate({right:'-50px'},500),
	$('#navpara').animate({right:'-800px'},500),
	$('#navpara4').animate({left:'-800px'},500),
	$('#navpara3').animate({left:'-800px'},500)
});

/////////// nav 3 hover ///////////////////////

$('#nav3').hover(function(){
	$('.item2 .gadget-title').css({left:0});
	$('.item2 .gadget-ico').css({background:'#fff'});
	});
		
	$('#nav3').mouseleave(function(){
	$('.item2 .gadget-title').css({left:180});
	$('.item2 .gadget-ico').css({background:'none'});
	});
	
$('.item2 .gadget-ico').hover(function(){
	$('.item2 .gadget-title').css({left:0});
	});	
	$('.item2 .gadget-ico').mouseleave(function(){
	$('.item2 .gadget-title').css({left:180});
	});
	
/////////// nav 3 hover ///////////////////////

$('#nav2').click(function(){
	$('#navpara4').animate({left:'-50px'},500),
	$('#navpara').animate({right:'-800px'},500),
	$('#navpara2').animate({right:'-800px'},500),
	$('#navpara3').animate({left:'-800px'},500)
});

/////////// nav 2 hover ///////////////////////

$('#nav2').hover(function(){
	$('.item4 .gadget-title').css({left:0});
	$('.item4 .gadget-ico').css({background:'#fff'});
	});
		
	$('#nav2').mouseleave(function(){
	$('.item4 .gadget-title').css({left:-180});
	$('.item4 .gadget-ico').css({background:'none'});
	});
	
$('.item4 .gadget-ico').hover(function(){
	$('.item4 .gadget-title').css({left:0});
	});	
	$('.item4 .gadget-ico').mouseleave(function(){
	$('.item4 .gadget-title').css({left:-180});
	});
	
/////////// nav 2 hover ///////////////////////

$('#nav4').click(function(){
	$('#navpara3').animate({left:'-50px'},500),
	$('#navpara').animate({right:'-800px'},500),
	$('#navpara4').animate({left:'-800px'},500),
	$('#navpara2').animate({right:'-800px'},500)
});

});