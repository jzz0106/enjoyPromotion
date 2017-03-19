$(function(){
	$(window).scroll(function(){
		var top=$(window).scrollTop();
		if(top>= 300 &&top<= 1630){
				$(".threephone").css('animation','getR 1.5s ease forwards');
				$(".ggtg-textBox").css('animation','getShow 1.5s ease 1.5s forwards');
			}
			if(top>=1100 && top<= 2350 ){
				$(".mac").css('animation','getL 1.5s ease forwards');
				$(".hdch-textBox").css('animation','getShow 1.5s ease 1.5s forwards');
			}
			if(top>=1820 ){
				$(".people").css('animation','getR 1.5s ease forwards');
				$(".xszb-textBox").css('animation','getShow 1.5s ease 1.5s forwards');
			}
	})

	$('.a1').click(function(){
		$("body").animate({scrollTop:950},1000);
	})
	$('.a2').click(function(){
		$("body").animate({scrollTop:1650},1000);
	})
	$('.a3').click(function(){
		$("body").animate({scrollTop:2450},1000);
	})
})