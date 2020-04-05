window.onload = function(){
	
	var timer,t,c = 0;
	var fk = document.getElementById("box");
	var imgs = fk.getElementsByClassName("img");
	var lis = fk.getElementsByTagName("li");
	var l_icon = fk.getElementsByClassName("l_icon")[0];
	var r_icon = fk.getElementsByClassName("r_icon")[0];
	
	//淡入淡出
	function fade(el,stu = 1){
		var timer,step,ori_opacity,new_opacity;
		if(stu == 1){
			el.style.opacity = 1;
			step = -0.1;
		}else{
			el.style.display = "block";
			el.style.opacity = 0;
			step = 0.1;
		}
		timer = setInterval(function(){
			if(document.all){
				ori_opacity = parseFloat(el.currentstyle.opacity);
			}else{
				ori_opacity = parseFloat(window.getComputedStyle(el,null).opacity);	
			}
			
			new_opacity = ori_opacity + step;
			el.style.opacity = new_opacity;
			
			if(new_opacity <= 0){
				el.style.display = "none";
				clearInterval(timer);
			}
			if(new_opacity >= 1){
				clearInterval(timer);
			}
		},50)
	}
	
	//自动轮播	
	function autorun(){
		for(var i = 0;i<imgs.length;i++){
			if(i == c){
				fade(imgs[c],2);
				lis[c].style.backgroundColor = "#088BBF";
			}else{
				fade(imgs[i],1);
				lis[i].style.backgroundColor = "#DDDDDD";
			}	
		}
	}
	
	timer = setInterval(function(){
		c == 4 ? c = 0 : c++;
		autorun();
	},2000)
	
	
	//移入移出停止或启动轮播
	fk.onmouseenter = function(){
		clearInterval(timer);
	}
	
	fk.onmouseleave = function(){
		timer = setInterval(function(){
			c == 4 ? c = 0 : c++;
			autorun();
		},2000)
	}
	
	//方向键控制轮播
	l_icon.onclick = function(){
		c--;
		c=c==-1?4:c;
		autorun();
	}
	r_icon.onclick = function(){
		c++;
		c=c==5?0:c;
		autorun();
	}
	
	//分页器控制轮播	
	for(var i=0;i<lis.length;i++){ 
		lis[i].xuhao = i; 
		lis[i].onmouseenter = function(){
			var _this = this;
			t = setTimeout(function(){
				c = _this.xuhao;
				autorun();
			},200)
		}
		lis[i].onmouseleave = function(){
			clearTimeout(t);
		}
	}
}
