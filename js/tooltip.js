$(document).ready(function(){
	
$(document).mousemove(function(e) {
    window.x = e.pageX;
    window.y = e.pageY;
});
$('#all').show();

$('#all_btn').click(function(){
	
	$('#all').show();
	$('#ongoing').hide();
	$('#completed').hide();
	
	});
	$('#on_btn').click(function(){
	
	$('#ongoing').show();
	$('#all').hide();
	$('#completed').hide();
	
	});
	$('#com_btn').click(function(){
	
	$('#completed').show();
	$('#all').hide();
	$('#ongoing').hide();
	
	});
            			 
			  $("ul.tooltip > li:nth-child(1)").hover(function(){
				  
					  $("div#tooltip_con").show(); //this happens when you mouse in
				 		 $("div#tooltip_con").css({left:x-200,top:y-150});
				  }, 
				  function(){
					  $("div#tooltip_con").hide(); //this happens when you mouse out
			  });
			  
			   $("ul.tooltip > li:nth-child(2)").hover(function(){
					  $("div#tooltip_con1").show(); //this happens when you mouse in
				 		 $("div#tooltip_con1").css({left:x-200,top:y-150});
					  
				  }, 
				  function(){
					  $("div#tooltip_con1").hide(); //this happens when you mouse out
					 
			  });
			    $("ul.tooltip > li:nth-child(3)").hover(function(){
					  $("div#tooltip_con2").show(); //this happens when you mouse in
				 		 $("div#tooltip_con2").css({left:x-200,top:y-150});
					 
					 
				  }, 
				  function(){
					  $("div#tooltip_con2").hide(); //this happens when you mouse out
					   
			  });
			    $("ul.tooltip > li:nth-child(4)").hover(function(){
					  $("div#tooltip_con3").show(); //this happens when you mouse in
				 		 $("div#tooltip_con3").css({left:x-200,top:y-150});
				  }, 
				  function(){
					  $("div#tooltip_con3").hide(); //this happens when you mouse out
			  });
			  $("ul.tooltip > li:nth-child(5)").hover(function(){
					  $("div#tooltip_con4").show(); //this happens when you mouse in
				 		 $("div#tooltip_con4").css({left:x-200,top:y-150});
				  }, 
				  function(){
					  $("div#tooltip_con4").hide(); //this happens when you mouse out
			  });
        });// JavaScript Document