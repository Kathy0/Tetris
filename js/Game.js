//定义整体
function Game(){
	//调用自己的init方法
	this.init();
	//砖块实例
	this.b = new Block(this);
	this.m = new Map(this);
	//调用定时器
	this.start();
	this.bindEvent();
}
//定义init方法
Game.prototype.init = function(){
	//设置dom
	this.dom = document.createElement("table");
	for(var i = 0; i< 20 ; i++){
		//插入tr
		var tr = document.createElement("tr")
		for(var j = 0; j < 12; j++){
			var td = document.createElement("td");
			tr.appendChild(td)
		}
		this.dom.appendChild(tr);
	}
	//上树
	document.getElementById("box").appendChild(this.dom)
}
//定义一个切换类名的方法
Game.prototype.setClass = function(row,col,className){
	this.dom.getElementsByTagName("tr")[row].getElementsByTagName("td")[col].className=className;
}
Game.prototype.start = function(){
	var self = this;
	var z = 0;
	var timer = setInterval(function(){
		z++;
		//清屏
		for(var i = 0; i< 20 ; i++){
			for(var j = 0; j < 12; j++){
				self.setClass(i,j,"")
			}
		}
		if(z % 20 === 0){
			if(self.checkCanDown()){
				self.b.update();
			}else{
				self.yinshiti();
				self.m.xiaohang();
				self.b = new Block(self);
				if(!self.checkCanDown()){
					document.getElementById("mask").style.display = "block"
					clearInterval(timer)
				}
			}


		}
		//渲染
		self.b.render();
		self.m.render();

	},20)
}

//如果b的code和m的code不为0，那么就定在那
Game.prototype.checkCanDown = function(){
	// console.log(true)
	for(var i = 0 ; i < 4 ; i++){
		for(var j = 0 ; j < 4 ; j++){
			if(this.b.code[i][j] != 0 && this.m.code[this.b.row + i + 1][this.b.col + j + 5] != 0){
				return false;
			}
		}
	}
	return true;
}
Game.prototype.yinshiti = function(){
	for(var i = 0; i < 4 ; i++){
		for(var j = 0; j < 4; j++){
			if(this.b.code[i][j] != 0){
				this.m.code[this.b.row + i][this.b.col + j + 5] = this.b.code[i][j]
			}
		}
	}
}
//判断能否左右移动
Game.prototype.checkCanLeft = function(){
	for(var i = 0 ; i < 4 ; i++){
		for(var j = 0 ; j < 4 ; j++){
			if(this.b.code[i][j] != 0 && this.m.code[this.b.row + i][this.b.col + j + 5 - 1] != 0){
				return false;
			}
		}
	}
	return true;
}
Game.prototype.checkCanRight = function(){
	for(var i = 0 ; i < 4 ; i++){
		for(var j = 0 ; j < 4 ; j++){
			if(this.b.code[i][j] != 0 && this.m.code[this.b.row + i][this.b.col + j + 5 +1] != 0){
				return false;
			}
		}
	}
	return true;
}
Game.prototype.checkCanRotate = function(){
	//存储下一个方向
	var rDirection = this.b.direction + 1;
	if(rDirection >= this.b.directionAmount){
		rDirection = 0;
	}

	//存储现在的code
	var _code = blocktypes[this.b.type][rDirection];
	//循环遍历
	for(var i = 0 ; i < 4 ; i++){
		for(var j = 0 ; j < 4 ; j++){
			if(_code[i][j] != 0 && this.m.code[this.b.row + i][this.b.col + j + 5] != 0){
				return false;
			}
		}
	}
	return true;
}
//绑定监听
Game.prototype.bindEvent = function(){
	var self = this;
	window.onkeydown = function(ev){
		if(ev.keyCode === 37 && self.checkCanLeft()){
			self.b.goLeft();
			document.getElementById("anjian").load();
			document.getElementById("anjian").play();
		}else if(ev.keyCode === 39 && self.checkCanRight()){
			self.b.goRight();
			document.getElementById("anjian").load();
			document.getElementById("anjian").play();
		}else if(ev.keyCode === 38 && self.checkCanRotate()){
			self.b.goRotate();
		}else if(ev.keyCode === 32){
			while(self.checkCanDown()){
				self.b.update();
			}
		}
	}
}






















//*****************************************************************************************
// //game类
// function Game(){
// 	//创建节点
// 	this.dom = document.createElement("table");
// 	//上树
// 	document.body.appendChild(this.dom)
// 	//调用自己的init方法
// 	this.init();
// 	this.start();
// 	this.b = new Block(this);
// }
// Game.prototype.init = function(){
// 	//插入表格
// 	for(var i = 0; i < 20 ; i++){
// 		var tr = document.createElement("tr")
// 		for(var j = 0; j < 12 ; j++){
// 			var td = document.createElement("td");
// 			tr.appendChild(td);
// 		}
// 		this.dom.appendChild(tr);
// 	}
// }
// Game.prototype.setClass = function(row,col,className){
// 	document.getElementsByTagName("tr")[row].getElementsByTagName("td")[col].className = className;
// }

// Game.prototype.start = function(){
// 	//添加定时器，让砖块动起来
// 	var self = this;
// 	setInterval(function(){
// 		// 清空
// 		for(var i = 0; i < 20 ; i++){
// 			for(var j = 0; j < 12 ; j++){
// 				document.getElementsByTagName("tr")[i].getElementsByTagName("td")[j].className = "";
// 			}
// 		}
// 		//更新
// 		self.b.update()
// 		//渲染
// 		self.b.render()
// 	},300)
// }