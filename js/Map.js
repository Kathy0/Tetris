function Map(game){
	this.game = game;
	this.code = [
		[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
		[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
		[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
		[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
		[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
		[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
		[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
		[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
		[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
		[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
		[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
		[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
		[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
		[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
		[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
		[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
		[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
		[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
		[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
		[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
		[1,1,1,1,1,9,9,9,9,9,9,9,9,9,9,9,9,1,1,1,1,1],
		[1,1,1,1,1,9,9,9,9,9,9,9,9,9,9,9,9,1,1,1,1,1],
		[1,1,1,1,1,9,9,9,9,9,9,9,9,9,9,9,9,1,1,1,1,1],
		[1,1,1,1,1,9,9,9,9,9,9,9,9,9,9,9,9,1,1,1,1,1],
		[1,1,1,1,1,9,9,9,9,9,9,9,9,9,9,9,9,1,1,1,1,1]
	]
}
//渲染
Map.prototype.render = function(){
	for(var i = 0; i < 20 ; i++){
		for(var j = 0; j < 12; j++){
			if(this.code[i][j + 5] != 0){
				this.game.setClass(i,j,"c"+this.code[i][j + 5])
			}
		}
	}
}

//设置消行
var score = 0;
Map.prototype.xiaohang = function(){
	
	for(var i = 0; i < 20; i++){
		if(this.code[i].indexOf(0) == -1){
			
			if(score > 5){
				score+=2;
			}else{
				score++;
			}
			document.getElementById("df").innerText = "得分：" + score;
			document.getElementById("xh").load();
			document.getElementById("xh").play();
			this.code.splice(i,1);
			this.code.unshift([1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1])
		}
	}
}