var row=document.getElementsByClassName("row");
var detail_row=document.getElementsByClassName("detail_row");
var ranking_list=document.getElementsByClassName("ranking_list")[0];
var arr=[
		"解密：关于地球与人类的一千零一问",
		"经典传奇：探索全世界重大历史事件",
		"眼界：展现普通人的曲折命运和动人故事",
		"档案（BTV）：惊人事件和传奇背后真相",
		"世纪之最：30个震惊世界的Top榜单",
		"身边的毛泽东：警卫员解密毛泽东秘史",
		"新电影传奇：每一部电影都有自己的风格与魅力",
		"档案(（上视纪实频道）：解密档案中的奥秘",
		"探寻传世国宝的千古传奇",
		"纪实系列：讲述社会百态，透视事实真相"
];
for(var i=0;i<row.length;i++){
	row[i].setAttribute("index",i);
	row[i].onmouseover=function(){	
		var index=Number(this.getAttribute("index"));		
		for(var j=0;j<row.length;j++){
			row[j].className="row";
			row[j].innerHTML="<button class='ranking'>\
						<span class='num'>"+(j+1)+"</span>\
						</button>\
						<span class='name'>"+arr[j]+"</span>";												
		}
		addClass(this,"detail_row");
		this.innerHTML="<button class='ranking'>\
							<span class='num'>"+(index+1)+"</span>\
						</button>\
						<img class='photos' src='images/img_"+(index+1)+".jpeg' alt='photos'/>\
						<p class='desc'>"+arr[index]+"</p>\
						<button class='play_btn'>播放</button>";										
	}
}
//添加类
function addClass(element,value){
	if(!element.className){
		element.className=value;
	}else{
		element.className=element.className.concat(" "+value);
	}
}