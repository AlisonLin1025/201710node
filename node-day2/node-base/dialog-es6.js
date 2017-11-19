class Dialog {
    constructor(){
        this.time = 3000;
    }
    static title(){
        return '标题'
    }
    $show(){
        console.log('show')
    }
    $hide(){
        console.log('hide')
    }
}
module.exports = Dialog;