$(function(){
	//定义变量
	var c = 0,s = 0,k,n;
	var timer_01,timer_02,timer_03;
	
	
	//搜索框
	$(".search").mouseenter(function(){
		$(this).find("input").addClass("inpsty");
		$(this).find(".hot_wordhide").show();
	}).mouseleave(function(){
		$(this).find("input").removeClass("inpsty");
		$(this).find(".hot_wordhide").hide();
	})


	//内容导航栏隐藏显示
	$(".contain_nav").hover(function(){
		$(this).find(".goodshide").stop().slideDown(500).addClass("borshow");
	},function(){
		$(this).find(".goodshide").stop().slideUp(500).removeClass("borshow");
	})
	$(".contain_nav ul li.goodslisty").mouseenter(function(){
		$(".goodshide ul").eq($(this).index()).show().siblings("ul").hide();
		//防止鼠标快速移动图片切换过快用户体验不好
//		var goodslisty = $(this); 
//		timer_03 = setTimeout(function(){
//			n = goodslisty.index();
//			$(".goodshide ul").eq(n).show().siblings("ul").hide();	
//		},200)
	}).mouseleave(function(){
		clearTimeout(timer_03);
	})

	
	//小米轮播图
	function fun(){
		$("#shuffing_img .shf_img").eq(c).stop().fadeIn(300).siblings(".shf_img").stop().fadeOut(300);
		$("#shuffing_img .circle li").eq(c).addClass("bgchange").siblings("li").removeClass("bgchange")
	}
	function autorun(){
		c++;
		c=c==6?0:c;
		fun();
	}
	timer_01 = setInterval(autorun,2000);
	
	$("#shuffing_img").mouseenter(function(){
		clearInterval(timer_01);
	}).mouseleave(function(){
		timer_01 = setInterval(autorun,2000);
	})
	
	$("#shuffing_img .toleft").click(function(){
		c--;
		c=c==-1?5:c;
		fun();
	})
	$("#shuffing_img .toright").click(function(){
		c++;
		c=c==6?0:c;
		fun();
	})
	
	$("#shuffing_img .circle li").mouseenter(function(){
		//this的对象在每个特定的环境中所指的的当前事件源不同。
		var lis = $(this); 
		timer_02 = setTimeout(function(){
			c = lis.index();
			fun();
		},300)
	}).mouseleave(function(){
		clearTimeout(timer_02);
	})
	
	
	//小米闪购滑动
	$("#misalestol").click(function(){
		$(".product ul").animate({"left":"14px"},200);
	})
	$("#misalestor").click(function(){
		$(".product ul").animate({"left":"-482px"},200);
	})
	
	
	//为你推荐滑动
	var good_count = $("#test_ul").find("li").length;
	var page = good_count/5;
	var w = page*1240;
	var start_page = 0;
	$("#test_ul").width(w);
	$("#recoml").css({"color":"#E0E0E0"});


	//向左滑
	$("#recoml").click(function(){
		start_page--;
		if(start_page<0){
			start_page = 0;
		}else{
			var new_l = start_page*-1240;		
			$("#test_ul").animate({"left":new_l+"px"},300);
			if(start_page == 0){
				//失去焦点
				$(this).css({"color":"#E0E0E0"});
			}else{
				//获得焦点
				$("#recomr").css({"color":"#B4B0B0"});
			}
		}	
	})
	
	//向右滑
	$("#recomr").click(function(){
		start_page++;
		if(start_page > page-1){
			start_page = page-1;
		}else{
			var new_l = start_page*-1240;		
			$("#test_ul").animate({"left":new_l+"px"},300);
			if(start_page == page-1){
				//失去焦点
				$(this).css({"color":"#E0E0E0"});
			}else{
				//获得焦点
				$("#recoml").css({"color":"#B4B0B0"});
			}
		}	
	})
	

	//table选项卡::通过关系来消除代码的冗余
	$(".samediv_ul li").mouseenter(function(){
		$(this).parents(".cur-same").find(".ulbox ul").eq($(this).index()).show().siblings("ul").hide();
	})
	
		
	//内容滑动 :: 通过jq和js的对象转换，对每个对象挂载相对应的变量，消除代码冗余。	
	$(".bigbox").each(function(){
		var bigbox_js = $(this)[0];
		var bigbox_jq = $(this);
		bigbox_js.k = 0;
		var count = bigbox_jq.find(".rel-info").length;
		var page = count/1;
		var w = page*296;
		bigbox_jq.width(w);
		
		bigbox_js.torunl = function(){
			if(bigbox_js.k <= 0){
				bigbox_js.k = 0;
			}else{
				bigbox_js.k--;
				var l = bigbox_js.k*-296;
				$(this).animate({"left":l},300);
				$(this).parent(".reibox").siblings(".ulstybox").find(".ulsty li").eq(bigbox_js.k).addClass("borsty").siblings("li").removeClass("borsty");	
			}
		}
		
		bigbox_js.torunr = function(){
			if(bigbox_js.k >= page-1){
				bigbox_js.k = page-1;
			}else{
				bigbox_js.k++;
				var l = bigbox_js.k*-296;
				$(this).animate({"left":l},300);
				$(this).parent(".reibox").siblings(".ulstybox").find(".ulsty li").eq(bigbox_js.k).addClass("borsty").siblings("li").removeClass("borsty");	
			}
		}
	})
	
	$(".buzzleft").click(function(){
		var this_js = $(this).siblings(".reibox").find(".bigbox")[0];
		this_js.torunl();
	})
	$(".buzzright").click(function(){
		var this_js = $(this).siblings(".reibox").find(".bigbox")[0];
		this_js.torunr();
	})
	
		
	//视频遮罩层显示
	$(".vedio-img").click(function(){
		var num = $(this).parent("li").index();
		var win_h = $(window).height();
		var h = $(".container").height();
		var t = (win_h - h) / 2;
		$("#mask").fadeIn(500,function(){
			$("#mask .container").eq(num).animate({"top":t},500).show();
		})
	})
	

	//关闭遮罩层：：关闭父元素子元素也会随之关闭,注意逻辑。
	$(".close").click(function(){
		var num = $(this).parent(".container").index();
		$("#mask").fadeOut(500);
		$("#mask .container").eq(num).animate({"top":"-536px"},500);
		$(this).siblings(".con-play").find("video")[0].pause();
		$(this).siblings(".con-play").find("video")[0].currentTime = 0;
		$(this).siblings(".con-play").find(".videobg").fadeIn(500);
		$(this).siblings(".con-play").find(".click").show();
	})
	
	
	//控制视频播放
	$(".click").click(function(){
		$(this).hide();
		$(this).siblings(".videobg").fadeOut(500);
		$(this).parent(".con-play").find("video")[0].play();
	})
	
	
	//滚动条滚动最后显示返回顶部
	$(window).scroll(function(){
//		$("title").html($(this).scrollTop());
		if($(this).scrollTop() > 7000){
			$("#service ul").css("height","160px");
			$("#returntop").fadeIn(300);
		}else{
			$("#service ul").css("height","120px");
			$("#returntop").fadeOut(300);
			
		}
	})
	
	//点击返回顶部
	$("#returntop").click(function(){
		$("html,body").animate({"scrollTop":0},500);
	})
})
