

$(function(){
	$('body').append('<a class="gettop"><img src="images/gettop.jpg" alt=""></a><a class="gettop2">联系客服</a>')
	var a=true;
	$(window).scroll(function(){
	if($(document).scrollTop()>100){
		$('.gettop').fadeIn();
			$('.gettop2').fadeIn();
	}else{
		$('.gettop').fadeOut();
		$('.gettop2').fadeOut();
	}

		if($(document).scrollTop()+$(window).height()>$("#register").offset().top){
			if (a==true) {
				var setTimeId=setTimeout(changeNum,10);
				var renum=0;
				function changeNum(){
					if (renum>=3658) {
						clearTimeout(setTimeId);
					}else{
						renum+=40;
						renum>3658?renum=3658:renum;
						$('#register p span').text(renum);
						setTimeId=setTimeout(changeNum,10);
					}
					a=false;
				}
			}
			
		};//数字切换事件	
	});//滚动事件


	$(".gettop").click(function () {
    $('html,body').animate({scrollTop: 0}, 800);
    return false;
 	});
})