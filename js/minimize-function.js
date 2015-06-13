
$(function(){
	var windh=$(window).height();
	var windw=$(window).width();
	if(windw>769){
		//alert('hi >421');
	var conHeight = $('.navpara-content').height();
	var mainHeight =$('#navpara').height();
	var animHeight = mainHeight-conHeight;
	var $this=$('#min');
	//alert(conHeight);
		$('.mini').click(function(){
			$('#navpara .navpara-middle').toggle('1000');
			$('#navpara3 .navpara-middle').toggle('1000');
			$('#navpara2 #sec_wrap2').toggle('1000');
			$('#navpara4 .navpara-middle').toggle('1000');
			//$('#min').html
			//alert(icon);
			//icon.toggleClass("icon-circle-arrow-up icon-circle-arrow-down")
		})
		
		$('.mini').click(function(){
   // $('#navpara').find('#min').toggleClass('icon-minus icon-plus');
	//$('#navpara3').find('#min').toggleClass('icon-minus icon-plus');
	//$('#navpara2').find('#min').toggleClass('icon-minus icon-plus');
	//$('#navpara4').find('#min').toggleClass('icon-minus icon-plus');
});
//$('.mini').css({'cursor':'pointer','display':'block'});
$('.mini').click(function(){
	$('.mini').toggle();
	});
		



	}
	
		

	});