$(function(){
	//alert('its work');
	var btn=$('.focus');
	$(btn).hover(function(){
		//alert('its work');
		var $this=$('.foo_nav li i');
		$(this).children().animate({'bottom':'5'})
		$('.foo_nav li').removeClass('focus-select');;
		$(this).addClass('focus-select');
		});
			$(btn).mouseleave(function(){
		$(this).children().animate({'bottom':'0'})
		});

	});
