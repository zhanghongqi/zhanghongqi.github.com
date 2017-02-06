
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

	// 技能明细切换
	$(".skill_icon").click(function(){
		$(".skill_textbox").each(function(){
			if($(this).is(":visible")){
				$(this).slideUp(200);
				$(this).prev().removeClass("skill_flag_rotate");
			}
		});
		if($(this).siblings(".skill_textbox").is(":hidden")){
			$(this).siblings(".skill_textbox").slideDown(400);
			$(this).siblings(".skill_flag").addClass("skill_flag_rotate");
		}else{
			$(this).siblings(".skill_textbox").slideUp(200);
			$(this).siblings(".skill_flag").removeClass("skill_flag_rotate");
		}
	});
	//我的作品

	


	
	
	
