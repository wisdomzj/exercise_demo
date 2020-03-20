window.onload = function(){

    //获取元素
	var box = document.getElementById("box");	
	var win_w = document.documentElement.clientWidth;
	var win_h = document.documentElement.clientHeight;
	var max_l = win_w - box.offsetWidth;
	var max_t = win_h - box.offsetHeight;
	var l = 3,t = 4,timer;
	
	//运动函数
	function run(){
		var old_l = box.offsetLeft;
		var old_t = box.offsetTop;
		var new_l = old_l+l;
		var new_t = old_t+t;
		box.style.left = new_l+"px";
		box.style.top = new_t+"px";
		
		//解决速度调整问题
		if (new_l > max_l) {
			new_l = max_l;
		}
		if (new_l < 0) {
			new_l = 0;
		}
		
		if (new_t > max_t) {
			new_t = max_t;
		}
		if (new_t < 0) {
			new_t = 0;
		}
		
		if (new_t == max_t || new_t == 0) {
			t = -t;
		}
		if (new_l == max_l || new_l == 0) {
			l = -l;
		}
	}
	
	//运行定时器
	timer = setInterval(run,10)
	
	//解决窗口变化问题
	window.onresize = function(){
		//让广告重新归位
		box.style.left = 0;
		box.style.top = 0;
		l = Math.abs(l);
		t = Math.abs(t);
		//重新计算最大的left和top值
		max_t = document.documentElement.clientHeight - box.offsetHeight;
		max_l = document.documentElement.clientWidth - box.offsetWidth;
	}
	
	
	box.onmouseover = function(){
		clearInterval(timer);
	}
		
	box.onmouseout = function(){
		timer = setInterval(run,10);
	}
}


