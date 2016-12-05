//fullpage
	$(document).ready(function(){
		$('#fullpage').fullpage({
			anchors:['page1','page2','page3','page4','page5','page6'],		//设置锚点
			verticalCentered:false,		//不居中
			navigation:true,		//打开小圆点导航
			navigationPosition:'right',		//右边圆点
			navigationTooltips:['首页','关于我','专业技能','我的作品','我的经历','联系我'],
			fixedElements:'#header,header',
			afterRender:function(link,index){
				move('header').set('opacity','1').duration('1.5s').end();
				move('#header').set('opacity','0.5').duration('1.5s').end();
				
			},
			

			afterLoad:function(link,index){
				switch(index){
					case 1:
	
					move('#home_countent').set('margin-top','0').duration('0.7s').end(function(){
						move('#home_info1').set('margin-top','60px').duration('0.7s').end(function(){
							move('#home_info2').set('margin-top','15px').duration('0.7s').end(function(){
								move('#home_info3').set('margin-top','15px').duration('0.7s').end(function(){
									move('#home_info4').set('margin-top','15px').duration('0.7s').end();
								});
							});
						});
					});
					

					break

					case 2:

					move('#about .title').scale(2).end(function(){
						move('#about_p').set('opacity','1').duration('0.7s').end()
					});
					
					break

					case 3:
					move('#skill .title').scale(2).end();
					break

					case 4:
					move('#works .title').scale(2).end();
					break

					case 5:
					move('#experience .title').scale(2).end();
					break




					case 6:
					move('#contact .title').scale(2).end();
					move('.contact_content').set('opacity','1').duration('1.5s').end()
					break


				}
			},

			onLeave:function(link,index){
				switch(index){
					case 1:
					break

					case 2:
					move('#about .title').scale(1).end();
					break

					case 3:
					move('#skill .title').scale(1).end();
					break

					case 4:
					move('#works .title').scale(1).end();
					break

					case 5:
					move('#experience .title').scale(1).end();
					break

					case 6:
					move('#contact .title').scale(1).end();
					break
				}
			}


		});
	});
