import $ from "jquery";
import "../../assets/c__Exhibition/c__Exhibition.less"
export class Exhibition {
    constructor(grandFather, father, son, btn, delay) {
        this.grandFather = grandFather;
        this.btn = btn;
        this.father = father;
        this.son = son;
        this.delay = delay;
        this.count = 0;
        this.index = 0;
        this.timer = null;
        this.sonlen = son.length;
        this.btns = [];
        this.init();
    }
    //创建父元素和子元素的宽度
    init() {
        this.creatWidth()
        this.creatBtn()
        $(this.btn.find('span')[0]).addClass('active');
        this.Timemove();
    }
    creatWidth() {
        // 获取文档的宽度
        const margin = this.margin()
        const len = this.sonLen()
        const grandWidth = this.grandFather.innerWidth() + margin * this.sonlen;
        this.son.css({ width: `${(grandWidth - margin * this.sonlen) / len}px` })
        this.father.css({ width: `${this.fatherWidth(grandWidth, len)}px` });
    }
    margin(){
        const margin = parseFloat(getComputedStyle(this.son[0]).marginRight);
        return margin;
    }
    // 父元素的宽度
    fatherWidth(width, len) {
        return width * this.sonlen / len;
    }
    //根据屏幕宽度更改son的宽度
    sonLen() {
        const documentWidth = $(document).innerWidth();
        if (documentWidth >= 1220) {
            return 4
        } else if (documentWidth >= 557) {
            return 2
        } else if (documentWidth <= 557) {
            return 1
        }
    }
    // 生成按钮
    creatBtn() {
        this.btn.html(" ");
        this.btns = [];
        // 获取生成几个按钮
        const len = this.sonlen / this.sonLen();
        for (let i = 0; i < len; i++) {
           const span =  $("<span>").appendTo(this.btn);
           this.btns.push(span);
        }
    }
    // 计时运动
    Timemove() {
        this.timer = setInterval(() => {
            this.count ++;
            this.move()
        }, this.delay);
    }
    move() {
        // 获取子元素的宽度
        const margin = this.margin();
        const len = this.sonLen();
       if(len == 1 && this.count >= this.sonlen){
        this.count = 0;
       }
       if(len == 2 || len == 4){
        this.count > this.sonlen - len ? this.count = this.sonlen - len : this.count = this.count;
       }
       
        const sonwidth = this.son.innerWidth();
        this.father.css({ left: `${this.count * -(sonwidth + margin)}px` })
        this.isBtn(len)
    }
    //判断btn的激活状态
    isBtn(len){
        if(len == 4 || len == 2 ){
            if(this.count %len == 0 || this.count >= this.sonlen - len ){
                this.index = Math.floor(this.count / len)
                if(this.count >= this.sonlen - len){
                    this.index = this.index + 1;
                }
            }
        }
        if(len == 1){
            this.index = this.count;
        }
        this.active(len)
    }
    active(len){
        this.btn.find("span").removeClass("active");
       $(this.btn.find("span")[this.index]).addClass("active");
       if(len == 4 && this.count >= this.sonlen - len){
        this.count = 0;
        this.index = 0
       }
       if(len == 2 && this.count >= this.sonlen - len){
        this.count = 0;
        this.index = 0
       }
       if(len == 1){
        if(this.count >= this.sonlen - 1){
            this.index = 0;
        }
       }
    }
}