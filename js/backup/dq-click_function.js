$(function() {
	var windh=$(window).height();
	var windw=$(window).width();
	
	$(window).resize(function() {
		  var windh=$(window).height();
		  var windw=$(window).width();
	
	
	if(windw>769){
		alert(s);
		
		
$('#about').click(function(){
	$('#navpara').stop().animate({right:'-50px'},500);
	$('#navpara').css({position:'absolute',});
	$('#about .gadget-ico').fadeOut();
	$('#navpara2').stop().animate({right:'-800px'},500),
	$('#navpara4').stop().animate({left:'-800px'},500),
	$('#navpara3').stop().animate({left:'-800px'},500)
	$('#contact .gadget-ico').fadeIn();
	$('#blog .gadget-ico').fadeIn();
	$('#work .gadget-ico').fadeIn();
	$('#nav5').addClass('open');
	$('.foo_nav li').removeClass('focus-select');
		$('#nav1').addClass('focus-select');
		$('.focus').addClass('focus-toggle');
		
		if ($('#nav5').hasClass("open")) {
			//alert('yes');
           
			$('#nav5').html('<a href="index.html"><i class="fa fa-times"></i></a>');
        } else {
			//alert('no');
            $('#nav5').html('<i class="fa fa-bars"></i>');
        }
		
	
});

$('#close').click(function(){
	$('#navpara').animate({right:'-800px'},500);
	$('#about .gadget-ico').fadeIn();
	
	$('.foo_nav li').removeClass('focus-select');
		$('#nav5').addClass('focus-select');
		$('.focus').removeClass('focus-toggle');
		if ($('#nav5').hasClass("open")) {
			//alert('yes');
           
			$('#nav5').html('<i class="fa fa-bars"></i>');
        } else {
			//alert('no');
           
			$('#nav5').html('<a href="index.html"><i class="fa fa-times"></i></a>');
        }
		$('#nav5').removeClass('open');
});

$('#contact').click(function(){
	$('#navpara2').stop().animate({right:'-50px'},500);
	$('#navpara2').css({position:'absolute'});
	$('#contact .gadget-ico').fadeOut();
	$('#navpara').stop().animate({right:'-800px'},500),
	$('#navpara4').stop().animate({left:'-800px'},500),
	$('#navpara3').stop().animate({left:'-800px'},500)
	$('#about .gadget-ico').fadeIn();;
	$('#blog .gadget-ico').fadeIn();
	$('#work .gadget-ico').fadeIn();
	$('#nav5').addClass('open');
	$('.foo_nav li').removeClass('focus-select');
		$('#nav3').addClass('focus-select');
		$('.focus').addClass('focus-toggle');
		if ($('#nav5').hasClass("open")) {
			//alert('yes');
           
			$('#nav5').html('<a href="index.html"><i class="fa fa-times"></i></a>');
        } else {
			//alert('no');
            $('#nav5').html('<a href="index.html"><i class="fa fa-bars"></i></a>');
        }

});

$('#navpara2 #close').click(function(){
	$('#navpara2').animate({right:'-800px'},500);
	$('#contact .gadget-ico').fadeIn();
	$('.foo_nav li').removeClass('focus-select');
		$('#nav5').addClass('focus-select');
		$('.focus').removeClass('focus-toggle');
		
		if ($('#nav5').hasClass("open")) {
			//alert('yes');
           
			$('#nav5').html('<i class="fa fa-bars"></i>');
        } else {
			//alert('no');
           
			$('#nav5').html('<a href="index.html"><i class="fa fa-times"></i></a>');
        }
		$('#nav5').removeClass('open');
	
});

$('#blog').click(function(){
	$('#navpara4').stop().animate({left:'-50px'},500);
	$('#navpara4').css({position:'absolute',});
	$('#blog .gadget-ico').fadeOut();
	$('#navpara').stop().animate({right:'-800px'},500),
	$('#navpara2').stop().animate({right:'-800px'},500),
	$('#navpara3').stop().animate({left:'-800px'},500)
	$('#about .gadget-ico').fadeIn();;
	$('#contact .gadget-ico').fadeIn();
	$('#work .gadget-ico').fadeIn();
	$('#nav5').addClass('open');
	$('.foo_nav li').removeClass('focus-select');
		$('#nav2').addClass('focus-select');
		$('.focus').addClass('focus-toggle');
		if ($('#nav5').hasClass("open")) {
			//alert('yes');
           
			$('#nav5').html('<a href="index.html"><i class="fa fa-times"></i></a>');
        } else {
			//alert('no');
            $('#nav5').html('<i class="fa fa-bars"></i>');
        }
});

$('#navpara4 #close').click(function(){
	$('#navpara4').animate({left:'-800px'},500);
	$('#blog .gadget-ico').fadeIn();
	$('.foo_nav li').removeClass('focus-select');
		$('#nav5').addClass('focus-select');
		$('.focus').removeClass('focus-toggle');
		if ($('#nav5').hasClass("open")) {
			//alert('yes');
           
			$('#nav5').html('<i class="fa fa-bars"></i>');
        } else {
			//alert('no');
           
			$('#nav5').html('<a href="index.html"><i class="fa fa-times"></i></a>');
        }
		$('#nav5').removeClass('open');
});

$('#work').click(function(){
	$('#navpara3').stop().animate({left:'-50px'},500);
	$('#navpara3').css({position:'absolute',});
	$('#work .gadget-ico').fadeOut();
	$('#navpara').stop().animate({right:'-800px'},500),
	$('#navpara4').stop().animate({left:'-800px'},500),
	$('#navpara2').stop().animate({right:'-800px'},500)
	$('#about .gadget-ico').fadeIn();;
	$('#contact .gadget-ico').fadeIn();
	$('#blog .gadget-ico').fadeIn();
	$('#nav5').addClass('open');
	$('.foo_nav li').removeClass('focus-select');
		$('#nav4').addClass('focus-select');
		$('.focus').addClass('focus-toggle');
		if ($('#nav5').hasClass("open")) {
			//alert('yes');
           
			$('#nav5').html('<a href="index.html"><i class="fa fa-times"></i></a>');
        } else {
			//alert('no');
            $('#nav5').html('<i class="fa fa-bars"></i>');
        }
});

$('#navpara3 #close').click(function(){
	$('#navpara3').animate({left:'-800px'},500);
	$('#work .gadget-ico').fadeIn();
	$('.foo_nav li').removeClass('focus-select');
		$('#nav5').addClass('focus-select');
		$('.focus').removeClass('focus-toggle');
		if ($('#nav5').hasClass("open")) {
			//alert('yes');
           
			$('#nav5').html('<i class="fa fa-bars"></i>');
        } else {
			//alert('no');
           
			$('#nav5').html('<a href="index.html"><i class="fa fa-times"></i></a>');
        }
		$('#nav5').removeClass('open');
});


$('#option1').click(function(){
	$('#navpara5').animate({left:'-50px'},500);
	$('#navpara5').css({position:'absolute',});
	$('#option1 .gadget-ico').fadeOut();
});

$('#navpara5').mouseleave(function(){
	$('#navpara5').animate({left:'-800px'},500);
    $('#option1 .gadget-ico').fadeIn();
});

$('#option2').click(function(){
	$('#navpara6').animate({right:'-50px'},500);
	$('#navpara6').css({position:'absolute',});
	$('#option2 .gadget-ico').fadeOut();
});

$('#navpara6').mouseleave(function(){
	$('#navpara6').animate({right:'-800px'},500);
	$('#option2 .gadget-ico').fadeIn();
});


$('#nav1').hover(function(){
	$('#navpara').stop().animate({right:'-50px'},500),
	$('#navpara2').stop().animate({right:'-800px'},500),
	$('#navpara4').stop().animate({left:'-800px'},500),
	$('#navpara3').stop().animate({left:'-800px'},500)
	$('#about .gadget-ico').fadeOut();
});
$('#nav1').mouseleave(function(){
	$('#about .gadget-ico').fadeIn();
	});


$('#nav3').hover(function(){
	$('#navpara2').stop().animate({right:'-50px'},500),
	$('#navpara').stop().animate({right:'-800px'},500),
	$('#navpara4').stop().animate({left:'-800px'},500),
	$('#navpara3').stop().animate({left:'-800px'},500)
	$('#contact .gadget-ico').fadeOut();

});
$('#nav3').mouseleave(function(){
	$('#contact .gadget-ico').fadeIn();
	});


$('#nav2').hover(function(){
	$('#navpara4').stop().animate({left:'-50px'},500),
	$('#navpara').stop().animate({right:'-800px'},500),
	$('#navpara2').stop().animate({right:'-800px'},500),
	$('#navpara3').stop().animate({left:'-800px'},500)
	$('#blog .gadget-ico').fadeOut();
	
});
$('#nav2').mouseleave(function(){
	$('#blog .gadget-ico').fadeIn();
	});



$('#nav4').hover(function(){
	$('#navpara3').stop().animate({left:'-50px'},500),
	$('#navpara').stop().animate({right:'-800px'},500),
	$('#navpara4').stop().animate({left:'-800px'},500),
	$('#navpara2').stop().animate({right:'-800px'},500)
	$('#work .gadget-ico').fadeOut();
});
$('#nav4').mouseleave(function(){
	$('#work .gadget-ico').fadeIn();
	});

$('#nav5').hover(function(){
	$('#navpara3').animate({left:'-800px'},500),
	$('#navpara').animate({right:'-800px'},500),
	$('#navpara4').animate({left:'-800px'},500),
	$('#navpara2').animate({right:'-800px'},500)
	$(this).addClass('focus-select');
});


$('#nav5').click(function(){
		$('.focus').toggleClass('focus-toggle');
		//$('.focus:nth-child(2)').addClass('focus-toggle');
		$('#nav5').toggleClass('open');
		var $this =$('#nav5');		
		if ($this.hasClass("open")) {
            $this.html('<a href="index.html"><i class="fa fa-times"></i></a>');
        } else {
            $this.html('<i class="fa fa-bars"></i>');
        }
		//$('.focus').css({'display':'inline-block'});
		//$(this).html('<i class="fa fa-times"></i>');

		
	});

	
	$('.foo_nav li').hover(function(){
			$('.foo_nav li').removeClass('focus-select');
			$(this).addClass('focus-select');
		});
		$('.foo_nav li:first-child').hover(function(){
			$('.foo_nav li:nth-child(2)').addClass('focus-select');
		});
		$('.foo_nav li:last-child').hover(function(){
			$('.foo_nav li:nth-child(2)').addClass('focus-select');
		});
		
		$('.foo_nav li:first-child').click(function(){
			$('.foo_nav li').removeClass('focus-select');
		});
		
		$('.foo_nav li:last-child').click(function(){
			$('.foo_nav li').removeClass('focus-select');
		});
		
		}
		else{
			$('#1').click(function(){
	
		$('.focus').toggleClass('focus-toggle');
		//$('.focus:nth-child(2)').addClass('focus-toggle');
		$('#1').toggleClass('open');
		var $this =$('#1');		
		if ($this.hasClass("open")) {
            $this.html('<i class="fa fa-times"></i>');
        } else {
            $this.html('<i class="fa fa-bars"></i>');
        }
		//$('.focus').css({'display':'inline-block'});
		//$(this).html('<i class="fa fa-times"></i>');

		
	});
			}
	
	});// window resize end
	
	var windh=$(window).height();
	var windw=$(window).width();
	
	if(windw>769){
		
		
$('#about').click(function(){
	$('#navpara').stop().animate({right:'-50px'},500);
	$('#navpara').css({position:'absolute',});
	$('#about .gadget-ico').fadeOut();
	$('#navpara2').stop().animate({right:'-800px'},500),
	$('#navpara4').stop().animate({left:'-800px'},500),
	$('#navpara3').stop().animate({left:'-800px'},500)
	$('#contact .gadget-ico').fadeIn();
	$('#blog .gadget-ico').fadeIn();
	$('#work .gadget-ico').fadeIn();
	$('#nav5').addClass('open');
	$('.foo_nav li').removeClass('focus-select');
		$('#nav1').addClass('focus-select');
		$('.focus').addClass('focus-toggle');
		
		if ($('#nav5').hasClass("open")) {
			//alert('yes');
           
			$('#nav5').html('<a href="index.html"><i class="fa fa-times"></i></a>');
        } else {
			//alert('no');
            $('#nav5').html('<i class="fa fa-bars"></i>');
        }
		
	
});

$('#close').click(function(){
	$('#navpara').animate({right:'-800px'},500);
	$('#about .gadget-ico').fadeIn();
	
	$('.foo_nav li').removeClass('focus-select');
		$('#nav5').addClass('focus-select');
		$('.focus').removeClass('focus-toggle');
		if ($('#nav5').hasClass("open")) {
			//alert('yes');
           
			$('#nav5').html('<i class="fa fa-bars"></i>');
        } else {
			//alert('no');
           
			$('#nav5').html('<a href="index.html"><i class="fa fa-times"></i></a>');
        }
		$('#nav5').removeClass('open');
});

$('#contact').click(function(){
	$('#navpara2').stop().animate({right:'-50px'},500);
	$('#navpara2').css({position:'absolute'});
	$('#contact .gadget-ico').fadeOut();
	$('#navpara').stop().animate({right:'-800px'},500),
	$('#navpara4').stop().animate({left:'-800px'},500),
	$('#navpara3').stop().animate({left:'-800px'},500)
	$('#about .gadget-ico').fadeIn();;
	$('#blog .gadget-ico').fadeIn();
	$('#work .gadget-ico').fadeIn();
	$('#nav5').addClass('open');
	$('.foo_nav li').removeClass('focus-select');
		$('#nav3').addClass('focus-select');
		$('.focus').addClass('focus-toggle');
		if ($('#nav5').hasClass("open")) {
			//alert('yes');
           
			$('#nav5').html('<a href="index.html"><i class="fa fa-times"></i></a>');
        } else {
			//alert('no');
            $('#nav5').html('<i class="fa fa-bars"></i>');
        }

});

$('#navpara2 #close').click(function(){
	$('#navpara2').animate({right:'-800px'},500);
	$('#contact .gadget-ico').fadeIn();
	$('.foo_nav li').removeClass('focus-select');
		$('#nav5').addClass('focus-select');
		$('.focus').removeClass('focus-toggle');
		
		if ($('#nav5').hasClass("open")) {
			//alert('yes');
           
			$('#nav5').html('<i class="fa fa-bars"></i>');
        } else {
			//alert('no');
           
			$('#nav5').html('<a href="index.html"><i class="fa fa-times"></i></a>');
        }
		$('#nav5').removeClass('open');
	
});

$('#blog').click(function(){
	$('#navpara4').stop().animate({left:'-50px'},500);
	$('#navpara4').css({position:'absolute',});
	$('#blog .gadget-ico').fadeOut();
	$('#navpara').stop().animate({right:'-800px'},500),
	$('#navpara2').stop().animate({right:'-800px'},500),
	$('#navpara3').stop().animate({left:'-800px'},500)
	$('#about .gadget-ico').fadeIn();;
	$('#contact .gadget-ico').fadeIn();
	$('#work .gadget-ico').fadeIn();
	$('#nav5').addClass('open');
	$('.foo_nav li').removeClass('focus-select');
		$('#nav2').addClass('focus-select');
		$('.focus').addClass('focus-toggle');
		if ($('#nav5').hasClass("open")) {
			//alert('yes');
           
			$('#nav5').html('<a href="index.html"><i class="fa fa-times"></i></a>');
        } else {
			//alert('no');
            $('#nav5').html('<i class="fa fa-bars"></i>');
        }
});

$('#navpara4 #close').click(function(){
	$('#navpara4').animate({left:'-800px'},500);
	$('#blog .gadget-ico').fadeIn();
	$('.foo_nav li').removeClass('focus-select');
		$('#nav5').addClass('focus-select');
		$('.focus').removeClass('focus-toggle');
		if ($('#nav5').hasClass("open")) {
			//alert('yes');
           
			$('#nav5').html('<i class="fa fa-bars"></i>');
        } else {
			//alert('no');
           
			$('#nav5').html('<a href="index.html"><i class="fa fa-times"></i></a>');
        }
		$('#nav5').removeClass('open');
});

$('#work').click(function(){
	$('#navpara3').stop().animate({left:'-50px'},500);
	$('#navpara3').css({position:'absolute',});
	$('#work .gadget-ico').fadeOut();
	$('#navpara').stop().animate({right:'-800px'},500),
	$('#navpara4').stop().animate({left:'-800px'},500),
	$('#navpara2').stop().animate({right:'-800px'},500)
	$('#about .gadget-ico').fadeIn();;
	$('#contact .gadget-ico').fadeIn();
	$('#blog .gadget-ico').fadeIn();
	$('#nav5').addClass('open');
	$('.foo_nav li').removeClass('focus-select');
		$('#nav4').addClass('focus-select');
		$('.focus').addClass('focus-toggle');
		if ($('#nav5').hasClass("open")) {
			//alert('yes');
           
			$('#nav5').html('<a href="index.html"><i class="fa fa-times"></i></a>');
        } else {
			//alert('no');
            $('#nav5').html('<i class="fa fa-bars"></i>');
        }
});

$('#navpara3 #close').click(function(){
	$('#navpara3').animate({left:'-800px'},500);
	$('#work .gadget-ico').fadeIn();
	$('.foo_nav li').removeClass('focus-select');
		$('#nav5').addClass('focus-select');
		$('.focus').removeClass('focus-toggle');
		if ($('#nav5').hasClass("open")) {
			//alert('yes');
           
			$('#nav5').html('<i class="fa fa-bars"></i>');
        } else {
			//alert('no');
           
			$('#nav5').html('<a href="index.html"><i class="fa fa-times"></i></a>');
        }
		$('#nav5').removeClass('open');
});


$('#option1').click(function(){
	$('#navpara5').animate({left:'-50px'},500);
	$('#navpara5').css({position:'absolute',});
	$('#option1 .gadget-ico').fadeOut();
});

$('#navpara5').mouseleave(function(){
	$('#navpara5').animate({left:'-800px'},500);
    $('#option1 .gadget-ico').fadeIn();
});

$('#option2').click(function(){
	$('#navpara6').animate({right:'-50px'},500);
	$('#navpara6').css({position:'absolute',});
	$('#option2 .gadget-ico').fadeOut();
});

$('#navpara6').mouseleave(function(){
	$('#navpara6').animate({right:'-800px'},500);
	$('#option2 .gadget-ico').fadeIn();
});


$('#nav1').hover(function(){
	$('#navpara').stop().animate({right:'-50px'},500),
	$('#navpara2').stop().animate({right:'-800px'},500),
	$('#navpara4').stop().animate({left:'-800px'},500),
	$('#navpara3').stop().animate({left:'-800px'},500)
	$('#about .gadget-ico').fadeOut();
});
$('#nav1').mouseleave(function(){
	$('#about .gadget-ico').fadeIn();
	});


$('#nav3').hover(function(){
	$('#navpara2').stop().animate({right:'-50px'},500),
	$('#navpara').stop().animate({right:'-800px'},500),
	$('#navpara4').stop().animate({left:'-800px'},500),
	$('#navpara3').stop().animate({left:'-800px'},500)
	$('#contact .gadget-ico').fadeOut();

});
$('#nav3').mouseleave(function(){
	$('#contact .gadget-ico').fadeIn();
	});


$('#nav2').hover(function(){
	$('#navpara4').stop().animate({left:'-50px'},500),
	$('#navpara').stop().animate({right:'-800px'},500),
	$('#navpara2').stop().animate({right:'-800px'},500),
	$('#navpara3').stop().animate({left:'-800px'},500)
	$('#blog .gadget-ico').fadeOut();
	
});
$('#nav2').mouseleave(function(){
	$('#blog .gadget-ico').fadeIn();
	});



$('#nav4').hover(function(){
	$('#navpara3').stop().animate({left:'-50px'},500),
	$('#navpara').stop().animate({right:'-800px'},500),
	$('#navpara4').stop().animate({left:'-800px'},500),
	$('#navpara2').stop().animate({right:'-800px'},500)
	$('#work .gadget-ico').fadeOut();
});
$('#nav4').mouseleave(function(){
	$('#work .gadget-ico').fadeIn();
	});

$('#nav5').hover(function(){
	$('#navpara3').animate({left:'-800px'},500),
	$('#navpara').animate({right:'-800px'},500),
	$('#navpara4').animate({left:'-800px'},500),
	$('#navpara2').animate({right:'-800px'},500)
	$(this).addClass('focus-select');
});


$('#nav5').click(function(){
		$('.focus').toggleClass('focus-toggle');
		//$('.focus:nth-child(2)').addClass('focus-toggle');
		$('#nav5').toggleClass('open');
		var $this =$('#nav5');		
		if ($this.hasClass("open")) {
            $this.html('<a href="index.html"><i class="fa fa-times"></i></a>');
        } else {
            $this.html('<i class="fa fa-bars"></i>');
        }
		//$('.focus').css({'display':'inline-block'});
		//$(this).html('<i class="fa fa-times"></i>');

		
	});

	
	$('.foo_nav li').hover(function(){
			$('.foo_nav li').removeClass('focus-select');
			$(this).addClass('focus-select');
		});
		$('.foo_nav li:first-child').hover(function(){
			$('.foo_nav li:nth-child(2)').addClass('focus-select');
		});
		$('.foo_nav li:last-child').hover(function(){
			$('.foo_nav li:nth-child(2)').addClass('focus-select');
		});
		
		$('.foo_nav li:first-child').click(function(){
			$('.foo_nav li').removeClass('focus-select');
		});
		
		$('.foo_nav li:last-child').click(function(){
			$('.foo_nav li').removeClass('focus-select');
		});
		
		}
		else{
			$('#1').click(function(){
	
		$('.focus').toggleClass('focus-toggle');
		//$('.focus:nth-child(2)').addClass('focus-toggle');
		$('#1').toggleClass('open');
		var $this =$('#1');		
		if ($this.hasClass("open")) {
            $this.html('<i class="fa fa-times"></i>');
        } else {
            $this.html('<i class="fa fa-bars"></i>');
        }
		//$('.focus').css({'display':'inline-block'});
		//$(this).html('<i class="fa fa-times"></i>');

		
	});
			}
		
	
	

});