$(function(){
	var a=true;
	$(window).scroll(function(){
		if($(document).scrollTop()+$(window).height()>$(".goodat2").offset().top){
			$('.goodat2').find('li').addClass('addEffect');
		};
		if($(document).scrollTop()+$(window).height()>$(".advan2").offset().top){
			$('.advan2').addClass('addEffect');
		};
		if($(document).scrollTop()+$(window).height()>$(".picwall").offset().top){
			$('.picwall img').addClass('addEffect');
		};
		if($(document).scrollTop()+$(window).height()>$(".growTitle").offset().top){
			$('.friends li').find('img').eq(0).css('animation-delay','0.1s');
			$('.friends li').find('img').eq(1).css('animation-delay','2.5s');
			$('.friends li').find('img').eq(2).css('animation-delay','0.3s');
			$('.friends li').find('img').eq(3).css('animation-delay','1.9s');
			$('.friends li').find('img').eq(4).css('animation-delay','0.7s');
			$('.friends li').find('img').eq(5).css('animation-delay','0.9s');
			$('.friends li').find('img').eq(6).css('animation-delay','1.5s');
			$('.friends li').find('img').eq(7).css('animation-delay','2.7s');
			$('.friends li').find('img').eq(8).css('animation-delay','2.3s');
			$('.friends li').find('img').eq(9).css('animation-delay','1.3s');
			$('.friends li').find('img').eq(10).css('animation-delay','1.7s');
			$('.friends li').find('img').eq(11).css('animation-delay','0.2s')
			$('.friends li').find('img').eq(12).css('animation-delay','0.5s');
			$('.friends li').find('img').eq(13).css('animation-delay','1.1s');
			$('.friends li').find('img').eq(14).css('animation-delay','2.1s');
			$('.friends li').find('img').addClass('addEffect');
		};


	})

	$(".main02-content .square").mouseover(function(){
 		var i = $(".main02-content .square").index($(this));
 		$('.textBox p').eq(i).css('transform','translateY(0px)');
 	}).mouseleave(function(){
 		var i = $(".main02-content .square").index($(this));
 		$('.textBox p').eq(i).css('transform','translateY(100%)');
 	});


	$('.picwall img').mouseover(function(){
		var i = $(".picwall img").index($(this));
		// $(this).css('transform','scale(1.1)')
		$('.bar').eq(i).css('width','1150px');
	}).mouseleave(function(){
		var i = $(".picwall img").index($(this));
		$('.bar').eq(i).css('width','0');
	})
	$('.picwall img').eq(3).unbind();
	$('.picwall img').eq(5).unbind();

	var left=0;
	$('.leftArrow').on('click',function(){
		left+=202;
		$('.friends ul').css('marginLeft',left+'px');
		$('.rightArrow').fadeIn(500);
		if(left==0){
			$('.leftArrow').fadeOut(40);
		}

	})
	$('.rightArrow').on('click',function(){
		left-=202;
		$('.friends ul').css('marginLeft',left+'px');
		$('.leftArrow').fadeIn(500);
		if(left==-606){
			$('.rightArrow').fadeOut(40);
		}
	})


})//jieshu
