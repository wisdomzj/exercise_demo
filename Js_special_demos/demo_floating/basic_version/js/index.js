window.onload = function(){

    //获取元素
	var box = document.getElementById("box");	
	var win_w = document.documentElement.clientWidth;
	var win_h = document.documentElement.clientHeight;
	var max_l = win_w - box.offsetWidth;
	var max_t = win_h - box.offsetHeight;
	var l = 1,t = 1;
	
	//运动函数
	function run(){
		var old_l = box.offsetLeft;
		var old_t = box.offsetTop;
		var new_l = old_l+l;
		var new_t = old_t+t;
		box.style.left = new_l+"px";
		box.style.top = new_t+"px";
		
		if (new_t == max_t || new_t == 0) {
			t = -t;
		}
		if (new_l == max_l || new_l == 0) {
			l = -l;
		}
	}
	
	//运行定时器
	setInterval(run,10)
}


