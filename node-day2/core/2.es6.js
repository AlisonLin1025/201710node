class Parent{
    constructor(){
        this.smoking = '抽烟';
    }
    sleep(){
        return '睡觉'
    }
}
class Child extends Parent{ //Child.prototype = Object.create(Parent.prototype)
    constructor(){
        super(); // Parent.call(this) super中的this指向的是child
        this.drink = '喝酒';
    }
}
let child = new Child();
console.log(child.drink);
