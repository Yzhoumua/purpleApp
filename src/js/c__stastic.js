import "../assets/c__statistic/c__statistic.less";
import $ from "jquery"
class statisticNumber{
    constructor(total,dealy,dom){
        this.total = total;
        this.dom = dom;
        this.dealy = dealy * 1000;
        this.timer = null;
        this.num = 0;
        this.timeStistic = 100;
    }
    init(){
        this.timer = setInterval(() => {
            this.num ++;
            this.dom.text(this.num)
            if(this.num === this.total){
                clearInterval(this.timer);
                this.timer = null;
            }
        }, this.dealy /= this.timeStistic);
    }
}
const shuaxin = new statisticNumber(360,5,$(".icon-shuaxin h1"));
const xiazai = new statisticNumber(4500,1,$(".icon-xiazai h1"));
const diannao = new statisticNumber(120,3,$(".icon-diannao h1"));
const duihua = new statisticNumber(3913,2,$(".icon-duihua h1"));
$(window).on('scroll',function(){
    if($(".icon-shuaxin h1").offset().top - $(document).scrollTop() <= 1000 && !shuaxin.key){
        shuaxin.init()
        xiazai.init()
        diannao.init()
        duihua.init()
        shuaxin.key = true;
    }
})
