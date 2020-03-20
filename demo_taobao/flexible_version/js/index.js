$(function() {
	var mySwiper_01 = new Swiper('.swiper-container', {
		direction: 'horizontal',
		loop: true,
		autoplay: true,

		pagination: {
			el: '.swiper-pagination',
		},
	})

	var mySwiper_02 = new Swiper('.swiper-container_news', {
		direction: 'vertical',
		loop: true,
		autoplay: true,
	})
	
	
	$(window).scroll(function(){
		if($(this).scrollTop() > 3800){
			$(".totop").fadeIn(300);
		}else{
			$(".totop").hide();
		}
	})
	$(".totop").click(function() {
		$("html,body").animate({scrollTop:0},800); 
	})

})
