//定义记分牌
class scorePanel{
    score = 0;
    level = 1;
    maxLevel;
    accelerateLevel;
    scoreEle:HTMLElement;
    levelEle:HTMLElement;

    constructor(maxLevel = 10,accelerateLevel = 10) {
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel
        this.accelerateLevel = accelerateLevel
    }
    //设置加分数
    grade(){
        this.scoreEle.innerHTML = ++this.score + '';//最后这个东西是为了变成字符串
        //然后就应该假如说是吃了十分之后，然后增加一个等级
        if(this.score % this.accelerateLevel == 0){
            this.levelEle.innerHTML = ++this.level + '';
        }
    }

    //设置提升等级
    updateLevel(){
        if(this.level <= this.maxLevel) {
            this.grade();
        }
    }
}
// const ScorePanel = new scorePanel();
// ScorePanel.grade();
export default scorePanel;