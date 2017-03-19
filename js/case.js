$(function(){
	
	$(window).scroll(function(){
		var TopHeight=$(document).scrollTop()+$(window).height();
		if(TopHeight>$(".finance-content img").offset().top&&TopHeight<2120){
			$('.finance-content img').css('animation','getR 1.5s ease forwards');
			$('.finance-text').css('animation','getShow 1.5s ease 1.5s forwards');
		};
		if(TopHeight>$(".insurance-content img").offset().top&&TopHeight<2710){
			$('.insurance-content img').css('animation','getL 1.5s ease forwards');
			$('.insurance-text').css('animation','getShow 1.5s ease 1.5s forwards');
		};
		if(TopHeight>$(".travel-content img").offset().top&&TopHeight<3300){
			$('.travel-content img').css('animation','getR 1.5s ease forwards');
			$('.travel-text').css('animation','getShow 1.5s ease 1.5s forwards');
		};
		if(TopHeight>$(".business-content img").offset().top&&TopHeight<3890){
			$('.business-content img').css('animation','getL 1.5s ease forwards');
			$('.business-text').css('animation','getShow 1.5s ease 1.5s forwards');
		};
		if(TopHeight>$(".medical-content img").offset().top&&TopHeight<4480){
			$('.medical-content img').css('animation','getR 1.5s ease forwards');
			$('.medical-text').css('animation','getShow 1.5s ease 1.5s forwards');
		};
		if(TopHeight>$(".education-content img").offset().top&&TopHeight<5070){
			$('.education-content img').css('animation','getL 1.5s ease forwards');
			$('.education-text').css('animation','getShow 1.5s ease 1.5s forwards');
		};
		if(TopHeight>$(".media-content img").offset().top&&TopHeight<5660){
			$('.media-content img').css('animation','getR 1.5s ease forwards');
			$('.media-text').css('animation','getShow 1.5s ease 1.5s forwards');
		};



	});//滚动事件
	function scrollDown(i,evt){
		var abc=$(evt).offset().top;
		$(".picwall img").eq(i).click(function(){
			$("body").animate({scrollTop:abc},1000);
		});
	}
	scrollDown(0,$('.media-title'))

















	$(".picwall img").eq(1).click(function(){
		$("body").animate({scrollTop:725},1000);
	});
	$(".picwall img").eq(2).click(function(){
		$("body").animate({scrollTop:1435},1000);
	});
	$(".picwall img").eq(3).click(function(){
		$("body").animate({scrollTop:4381},1000);
	});
	$(".picwall img").eq(4).click(function(){
		$("body").animate({scrollTop:2020},1000);
	});
	$(".picwall img").eq(6).click(function(){
		$("body").animate({scrollTop:2611},1000);
	});
	$(".picwall img").eq(7).click(function(){
		$("body").animate({scrollTop:3201},1000);
	});
	$(".picwall img").eq(8).click(function(){
		$("body").animate({scrollTop:3800},1000);
	});
})