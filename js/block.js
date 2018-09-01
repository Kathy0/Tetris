function Block(game){
	//获取所有的类型
	this.type = ["L","J","S","Z","T","O","I"][parseInt(Math.random()*7)];
	//一个类型中所有的方向数量
	this.directionAmount = blocktypes[this.type].length;
	//获取所有的方向
	this.direction = parseInt(Math.random()*this.directionAmount);
	//获取某个方向的矩形数组
	this.code = blocktypes[this.type][this.direction];
	

	//获取自己
	this.game = game;
	//设置从顶部并从中间开始落下
	this.row = 0;
	this.col = 4;
}
//渲染颜色
Block.prototype.render = function(){
	//只要不是0，就上色, 这里小于4是因为矩形阵有四个
	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 4; j++){
			if(this.code[i][j] != 0){
				this.game.setClass(i+this.row,j+this.col,"c"+this.code[i][j]);
			}
		}
	}
}
Block.prototype.update = function(){
	this.row++;
}
Block.prototype.goLeft = function(){
	this.col--;
}
Block.prototype.goRight = function(){
	this.col++;
}
Block.prototype.goRotate = function(){
	if(this.direction === this.directionAmount -1){
		this.direction = 0;
	}else{
		this.direction++;
	}
	this.code = blocktypes[this.type][this.direction];
}








































//******************************************************************************************************

// function Block(game){
// 	//获取数组中的所有类型
// 	//设置随机数，以便获取这个类型
// 	this.type = ["J","Z","S","O","T","I","L"][parseInt(Math.random()*7)];
// 	//获取当前类型的类型数量
// 	this.direAmount = blocktypes[this.type].length;
	
// 	//当前类型的所有方向
// 	this.direction = parseInt(Math.random()*this.direAmount);

// 	//获取当前类型的其中一个方向
// 	this.code = blocktypes[this.type][this.direction];
	
// 	//获取自己
// 	this.game = game;
	
// 	//定义砖块出现的位置
// 	this.row = 0;
// 	this.col = 4;
// 	this.render();	 
// }
// Block.prototype.render = function(){
// 	 for(var i = 0 ; i < 4 ; i++){
// 		for(var j = 0; j < 4;j++){
// 			if(this.code[i][j] != 0){
// 				this.game.setClass(this.row + i,this.col + j,"c" + this.code[i][j])
// 			}
// 		} 
// 	}
// }
// Block.prototype.update = function(){
// 	this.row++;
// }