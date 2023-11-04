class snake{
    head:HTMLElement;
    bodies : HTMLCollection;
    element : HTMLElement;
    constructor() {
        this.element = document.getElementById('snake')!
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div')
    }

    get X(){
        return this.head.offsetLeft
    }
    get Y(){
        return this.head.offsetTop
    }
    set X(value){
        //如果新值与旧值相同，则直接返回。不在修改
        if(this.X === value) {
            return;
        }
        if (value<0 || value>740){
            //表明蛇撞墙了
            throw new Error('蛇撞墙了');
        }
        if(this.bodies[1]&&(this.bodies[1] as HTMLElement).offsetLeft === value){
            //如果发生掉头了，让蛇反方向继续移动
            if(value > this.X){
                value =  this.X - 20;
            }
            else {
                value = this.X + 20;
            }
        }
        this.moveBody();
        this.head.style.left = value + 'px';
        this.checkBody()
    }
    set Y(value){
        if(this.Y == value){
            return;
        }
        if(value < 0 || value > 500){
            throw new Error('蛇撞墙了')
        }
        this.moveBody();
        this.head.style.top = value + 'px'
        this.checkBody()
    }
    //设置蛇增加身体的方法
    addBody(){
        this.element.insertAdjacentHTML("beforeend","<div></div>")
    }

    moveBody(){
        //将后面的身体设置为前面的
        for (let i = this.bodies.length - 1 ; i>0; i --){
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;
            (this.bodies[i] as HTMLElement).style.left = X +'px';
            (this.bodies[i] as HTMLElement).style.top = Y +'px'
        }
    }

    checkBody(){
        for(let i = 1; i<this.bodies.length; i++){
            let a = this.bodies[i] as HTMLElement;
            if(this.X === a.offsetLeft && this.Y === a.offsetTop){
                throw new Error("撞到自己了")
            }
        }
    }

}
export default snake