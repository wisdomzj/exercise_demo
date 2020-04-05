$(function(){
	var c = 0 ,s = 0,timer;
	var slide_con = ["60周年校庆系列活动之闽江学院县域经济发展研究中心揭","栉风沐雨 砥砺前行｜闽江学院建校60周年大会召开","王宁莅校调研指导校地共建工作","我校举行60周年校庆校友捐赠签约仪式","60周年校庆系列活动之“应用型大学创新与发展纪念纪念纪念纪念"]
	var shuffing_con = ["60周年庆","迎新直播","60周年直播倒计时6天","60周年直播倒计时4天","霜降","秋分"]
	
	//二级菜单
	$(".nulsty li").hover(function(){
		$(this).find("a").addClass("hover");
		$(this).find("ul.mulsty").stop().slideDown(300);
	},function(){
		$(this).find("a").removeClass("hover");
		$(this).find("ul.mulsty").stop().slideUp(300);
	})
	
	
	//轮播图
	function change(){
		$(".shuffing .shf_img").eq(c).stop().fadeIn(500).siblings(".shf_img").stop().fadeOut(500);
		$(".season").html(shuffing_con[c]);
	}
	
	function autorun(){
		c++;
		c=c==6?0:c;
		change();	
	}
	timer = setInterval(autorun,2000);
	
	$(".shuffing").mouseenter(function(){
		clearInterval(timer);
	}).mouseleave(function(){
		timer = setInterval(autorun,2000);	
	})
	
	$(".shuffing .toleft").click(function(){
		c--;
		c=c==-1?5:c;
		change();
	})
	$(".shuffing .toright").click(function(){
		c++;
		c=c==6?0:c;
		change();
	})
	
	
	//滑动轮播图
	function run(){
		s++;
		s = s==5?0:s;
		var l = s*-334;
		$(".imgbox").animate({"left":l},500)
		$(".squarebox li").eq(s).addClass("addbg").siblings("li").removeClass("addbg")
		$(".scon").html(slide_con[s]);
	}
	setInterval(run,2000);
	
	
	//时间格式化
	function formatDate(time){
	    var date = new Date(time);
	    var year = date.getFullYear(),
	        month = date.getMonth()+1,
	        day = date.getDate();
	    var newTime = year + '.' +
	                (month < 10? '0' + month : month) +"."+
	                (day < 10? '0' + day : day);
	    return newTime;         
	}
	$(".time").html(formatDate(new Date().getTime()));
})