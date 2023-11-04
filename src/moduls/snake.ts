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
        this.head.style.left = value + 'px'
    }
    set Y(value){
        this.head.style.top = value + 'px'
    }
    //设置蛇增加身体的方法
    addBody(){
        this.element.insertAdjacentHTML("beforeend","<div></div>")
    }

}
export default snake