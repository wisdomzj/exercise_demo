$(function(){
	
	var c = 0,timer,t;

	//自动轮播
	function fun(){
		$("#box .img").eq(c).stop().fadeIn(300).siblings(".img").stop().fadeOut(300);
		$("#box .page ul li").eq(c).addClass("bgchange").siblings("li").removeClass("bgchange");
	}
	function autorun(){
		c++;
		c=c==5?0:c;
		fun();
	}
	
	timer = setInterval(autorun,2000);
	
	
	//移入移出停止或启动轮播
	$("#box").mouseenter(function(){
		clearInterval(timer);
	}).mouseleave(function(){
		timer = setInterval(autorun,2000);
	})
	
	
    //方向键控制轮播
	$("#box .l_icon").click(function(){
		c--;
		c=c==-1?4:c;
		fun();
	})
	$("#box .r_icon").click(function(){
		c++;
		c=c==5?0:c;
		fun();
	})
	
	//分页器控制轮播
	$("#box ul li").mouseenter(function(){
		//this的对象在每个特定的环境中所指的的当前事件源不同。
		var _this = $(this); 
		t = setTimeout(function(){
			c = _this.index();
			fun();
		},200)
	}).mouseleave(function(){
		clearTimeout(t);
	})
})