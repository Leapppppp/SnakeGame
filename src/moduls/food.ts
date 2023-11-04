//定义一个食物类
class Food{
    element:HTMLElement;
    constructor() {
        //获取页面中的食物元素
        //因为可能是空，所以会有红色提示，但是这个不可能是空的，所以直接加上一个！表示不可能是空的
        this.element = document.getElementById('food')!;
    }

    //获取坐标
    get X(){
        return this.element.offsetLeft;
    }
    get Y(){
        return this.element.offsetTop;
    }
    //修改食物的位置
    change(){
        //然后在生成一个随机数
        //蛇移动一格的距离是20，然后现在总的长度是760.其中math.round是一个取值
        let left = Math.round(Math.random()*76)*10
        let top = Math.round(Math.random()*52)*10
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}

// const food = new Food();
// console.log(food.X,food.Y)
// food.change();
// console.log(food.X,food.Y)
export default Food;