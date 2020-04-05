$(function(){
	$(".cover").mousemove(function(e){
		var ev = window.event || e;
		var m_l = ev.layerX || ev.offsetX;
		var m_t = ev.layerY || ev.offsetY;
		
		//计算移动方块位置
		var movesqu_l = m_l - $(".movesquare").width()/2;
		var movesqu_t = m_t - $(".movesquare").height()/2;
		
		//限制移动方块活动范围
		if (movesqu_l < 0) {
			movesqu_l = 0;
		}
		if (movesqu_l > 145) {
			movesqu_l = 145;
		}
		if (movesqu_t < 0) {
			movesqu_t = 0;
		}
		if (movesqu_t > 145) {
			movesqu_t = 145;
		}
		
		//监控移动方块的位置实时赋值回来
		$(".movesquare").css({position:"absolute",top:movesqu_t,left:movesqu_l});
		
		//计算放大图的位置
		var larversion_l = movesqu_l*-2;
		var larversion_t = movesqu_t*-2;
		
		//监控放大图的位置实时赋值回来
		$(".larversion").css({position:"absolute",top:larversion_t,left:larversion_l});
	})
})
