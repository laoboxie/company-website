
window.onload=function(){ 


	myFocus.set({
	    id:'boxID',//焦点图盒子ID
	    pattern:'mF_fancy',//风格应用的名称
	    time:3,//切换时间间隔(秒)
	    trigger:'click',//触发切换模式:'click'(点击)/'mouseover'(悬停)
	    width:1000,//设置图片区域宽度(像素)
	    height:310,//设置图片区域高度(像素)
	    txtHeight:'default'//文字层高度设置(像素),'default'为默认高度，0为隐藏
	});


	

	var table = document.getElementById("table");
	var lis = table.getElementsByTagName('li');
	var divs = table.getElementsByClassName('block');
		for ( var i=0,len=lis.length;i<len;i++ ){
			lis[i].index=i;
			lis[i].onclick=function(){
                for ( var j=0;j<len;j++){
                    lis[j].className ="";
                    divs[j].className="block tab_hide";
                }
				this.className ="tab_on";
				divs[this.index].className="block";
			}
		}

		action();

}

function action(){
		 var area = document.getElementsByClassName("area")[0];
		 var con1 = area.getElementsByClassName('lists')[0];
		 con1.innerHTML += con1.innerHTML;
		 area.scrollTop = 0;
		 var lineheight = 31;
		 var speed = 50;
		 var time;
		 var delay=500;
		 function startscroll(){
		 	time=setInterval(scrollUp,speed);
		 	area.scrollTop ++;
		 }
		 function scrollUp(){
		 	if (area.scrollTop%lineheight==0) {
		 		clearInterval(time);
		 		setTimeout(startscroll,delay);
		 	}else{
			 	if (area.scrollTop>=area.scrollHeight/2) {
			 		area.scrollTop = 0;
			 	}
			 	area.scrollTop ++;
			}

		 }
		setTimeout(startscroll,delay);
		area.onmouseover=function(){
			clearInterval(time);
	   	 }
		area.onmouseout=function(){
			time = setInterval(scrollUp,speed);
		 }
	}