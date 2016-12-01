
	//home

	//头像文字
	var oDp = document.getElementById('div_p');

	oDp.onmouseover=function(){
		oDp.innerHTML="Mr.Sandman";
		move('#div_p')
		.set('color','red')
		.end()
	};
	oDp.onmouseout=function(){
		oDp.innerHTML="张红旗个人简历";
		move('#div_p')
		.set('color','#000')
		.duration('2s')
		.end()
	};


	//photo淡入淡出
	$('#photo1').hover(function(){
		$(this).fadeTo(800,1)
	},function(){
		$(this).stop(true,false).fadeTo(800,0);
	})
	
	
	
