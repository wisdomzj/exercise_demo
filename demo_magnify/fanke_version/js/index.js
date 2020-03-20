window.onload = function(){
	
	//获取元素
	var box = document.getElementById("box");
	var insetsbox = box.getElementsByClassName("insetsbox")[0];
	var movesquare = insetsbox.getElementsByClassName("movesquare")[0];
	var cover = insetsbox.getElementsByClassName("cover")[0];
	var larversionbox = box.getElementsByClassName("larversionbox")[0];
	var larversion = larversionbox.getElementsByTagName("img")[0]; 
	
	//移入操作放大镜过程
	cover.onmousemove = function(e){
		var ev = window.event || e;
		var m_l = ev.layerX || ev.offsetX;
		var m_t = ev.layerY || ev.offsetY;
		
		//计算移动方块位置
		var movesqu_l = m_l - movesquare.offsetWidth/2;
		var movesqu_t = m_t - movesquare.offsetHeight/2;
		
		//限制移动方块活动范围
		if (movesqu_l < 0) {
			movesqu_l = 0;
		}
		if (movesqu_l > 180) {
			movesqu_l = 180;
		}
		if (movesqu_t < 0) {
			movesqu_t = 0;
		}
		if (movesqu_t > 200) {
			movesqu_t = 200;
		}
		
		//监控移动方块的位置实时赋值回来
		movesquare.style.left = movesqu_l + "px";
		movesquare.style.top = movesqu_t + "px";
		
		//计算放大图的位置
		var larversion_l = movesqu_l*-2;
		var larversion_t = movesqu_t*-2;
		
		//监控放大图的位置实时赋值回来
		larversion.style.left = larversion_l + "px";
		larversion.style.top = larversion_t + "px";
		
	}
}
