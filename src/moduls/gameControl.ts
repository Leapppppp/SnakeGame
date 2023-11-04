//控制器
import Food from "./food";
import ScorePanel from "./scorePanel";
import Snake from "./snake";
class GameControl{
    //定义三个属性
    snake:Snake;
    food:Food;
    scorePanel:ScorePanel;
    //创建一个属性存储蛇的方向
    direction:string = '';
    //用来记录游戏是否结束
    isLive = true
    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();

    }
    init(){
        document.addEventListener('keydown',this.keydownHandler.bind(this))
        this.run();

    }

    //创建一个响应函数
    keydownHandler(event:KeyboardEvent){
        //需要检查key的值是否合法
        this.direction = event.key
        console.log(this.direction)


    }
    run(){
        //根据this.direction的值来修改蛇移动的方向
        let X = this.snake.X;
        let Y = this.snake.Y;
        //这个真的没有想到qwq,好巧妙
        switch (this.direction){
            case "ArrowUp":
                Y -= 20;
                break;
            case "ArrowDown":
                Y += 20;
                break;
            case "ArrowLeft":
                X -= 20;
                break;
            case "ArrowRight":
                X += 20;
                break;
        }
        //检查蛇是否吃到食物
        this.checkEat(X,Y)
        //修改蛇的坐标
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        }
        catch(e:any) {
            alert(e.message)
            this.isLive = false
        }


        //开启一个定时，让蛇不停的移动
        this.isLive && setTimeout((this.run.bind(this)),300 - (this.scorePanel.level-1)*30); //这是一个条件语句，先检查isLive的属性或变量是否为真，
    }
    checkEat(X:number,Y:number){
        if( X=== this.food.X && Y === this.food.Y){
            console.log("吃到食物了")
            this.food.change();
            this.scorePanel.grade();
            this.snake.addBody();
        }

}

}
export default GameControl