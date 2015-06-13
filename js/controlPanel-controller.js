$(function(){
		   //var $this=$('.controller-panel-header');
		   $('.controller-panel-header').click(function(){
			var that =$(this);
			that.prevAll('.controller-panel').css({'display':'none'});
			that.nextAll('.controller-panel').css({'display':'none'});
			that.next('.controller-panel').toggle();
			//that.closest('.controller-panel').css({'display':'none'});	
			});
		   
		   
		    $('.controller-panel-navigation').click(function(){
			var that =$(this);
			var backnav =$('.controller-panel-navigation-back');
			//that.prev('.controller-panel').css({'display':'none'});
			$(that).stop().animate({'margin-left':'-250px'}).hide();
			that.next('.controller-slider-block').addClass('controller-panel-navigation-back');
			
			//that.next('.controller-slider-block').stop().animate({'left':'-250px'});
			that.next('.controller-panel-navigation1').css({'position':'relative','margin-top':'0px'});	
			that.next('.controller-panel-navigation1').stop().animate({'margin-left':'0px'});
			that.next('.controller-panel-navigation-back').nextAll('.controller-panel-navigation').css({'display':'none'});
			$('.controller-panel-navigation-back >.controller-container-header').click(function(){
				$(that).stop().animate({'margin-left':'0px'}).show();
				//$('.controller-panel-navigation-back').stop().animate({'margin-left':'0px'});
				$('.controller-panel-navigation1').stop().animate({'margin-left':'250px'}).css({'position':'absolute'});
				that.next('.controller-panel-navigation-back').nextAll('.controller-panel-navigation').css({'display':'block'});
			});
			});	
			
			// form function 
			
			$('#controller-design-backgrounds-upload-button').click(function(){
					$(this).css({'display':'none'});
					$('.controller-upload').css({'display':'block'});
				});
			$('.controller-button-cancel').click(function(){
					$('.controller-upload').css({'display':'none'});
					$('#controller-design-backgrounds-upload-button').css({'display':'block'});
				});
			
		  });