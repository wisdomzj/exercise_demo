$(function(){
	var c = 0,s = 0;
	var timer_01 = null,timer_02=null,t = null;
	
	//轮播图
	function run(){
		$(".img_box").eq(c).stop().fadeIn(500).siblings(".img_box").stop().fadeOut(500);
		$(".tabpage li").eq(c).addClass("bgcor").siblings("li").removeClass("bgcor");
	}
	function autorun(){
		c++;
		c = c==4?0:c;
		run();
	}
	timer_01 = setInterval(autorun,2000);
	
	$("#shuffing").mouseenter(function(){
		clearInterval(timer_01);
	}).mouseleave(function(){
		timer_01 = setInterval(autorun,2000);
	})
	
	$(".tabpage li").mouseenter(function(){
		var $this = $(this);
		t = setTimeout(function(){
			c = $this.index();
			run();
		},200)
	}).mouseleave(function(){
		clearTimeout(t);
	})
	
	
	//无缝滑动
	function fun(){
		s++;
		if(s == 3){
			$(".card_box").css({"left":0});
			s = 1;
		}
		var l = -1000*s;
		$(".card_box").stop().animate({"left":l},1500);
		$(".circle_box .circle").eq(s).addClass("chcor").siblings(".circle").removeClass("chcor");
	}
	timer_02 = setInterval(fun,3000);
	
	$(".slide").mouseenter(function(){
		clearInterval(timer_02);
	}).mouseleave(function(){
		timer_02 = setInterval(fun,3000);
	})
	
	$(".circle_box span").click(function(){
		s = $(this).index();
		var l = s*-1000;
		$(".card_box").stop().animate({"left":l},1500);
	})
	
	
	//tab选项卡
	$(".tabcon").height($(".tabcon .first").height());
	$(".tabnav li").click(function(){
		$(".tabcon .listcon").eq($(this).index()).show().siblings(".listcon").hide();
		$(".tabcon").height($(".tabcon .listcon").eq($(this).index()).height());
		$(this).addClass("addinstr").siblings("li").removeClass("addinstr");
	})
	
	
	//返回顶部
	$(window).scroll(function(){
		$("#black").click(function(){
			$("html,body").stop().animate({scrollTop:0},500);
		})
	})
})