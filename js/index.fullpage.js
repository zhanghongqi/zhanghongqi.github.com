//fullpage
	$(document).ready(function(){
		$('#fullpage').fullpage({
			anchors:['page1','page2','page3','page4','page5','page6'],		//设置锚点
			verticalCentered:false,		//不居中
			navigation:true,		//打开小圆点导航
			navigationPosition:'right',		//右边圆点
			navigationTooltips:['首页','关于我','专业技能','我的作品'],
			fixedElements:'#header,header',
			afterLoad:function(link,index){
				switch(index){
					case 1:
					move('#home_countent').set('margin-top','0')
		.duration('2s').end();
					move('#home_info1').set('margin-top','60px').duration('2s').end();
					move('#home_info2').set('margin-top','15px').duration('3s').end();
					move('#home_info3').set('margin-top','15px').duration('4s').end();
					move('#home_info4').set('margin-top','15px').duration('4.5s').end();
					
					break
				}
			}
			
		});
	});
