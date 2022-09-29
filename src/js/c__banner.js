import "../assets/c__banner/c__banner.less";
import "../assets/c__banner_top/c__banner_top.less";
import "../assets/c__banner_people/c__banner_people.less"
import $ from "jquery"


class createDomWdith{
    constructor(dealy,grandFather,fatherContent,sonItem){
        this.grandFather = grandFather
        this.dealy = dealy;
        this.fatherContent = fatherContent;
        this.sonItem = sonItem;
        this.sonlen = sonItem.length;
        this.index = 0;
        this.timer = null;
        this.init();
    }
    //初始化启动
    init(){
        $(this.sonItem[this.index]).addClass("active")
        this.createElementWidth();
        this.timeMove()
    }
    //改变father和son的宽度
    createElementWidth(){
        const grandFatherWidth = $(this.grandFather[0]).innerWidth();
        this.fatherContent.css({width:`${this.sonlen * grandFatherWidth}px`}); 
        this.sonItem.css({width:`${this.sonlen * grandFatherWidth / this.sonlen}px`})
        return this.sonItem.width()
    }
    //定时运动
    timeMove(){
      this.timer = setInterval(() => {
            this.moveDirection(">")
        }, this.dealy);
    }
    //判断运动方向
    moveDirection(direction){
        const sonItemWidth = this.createElementWidth();
        switch(direction){
            case ">" : {
                this.index ++
               this.move(sonItemWidth)
                break;
            }
            case "<" :{
                this.index --
                this.move(sonItemWidth)
                break;
            }
        }
    }
    //运动
    move(moveSonWidth){
       if(this.index < 0){
        this.index = this.sonlen - 1;
       }else if(this.index >= this.sonlen){
        this.index = 0;
       }
       this.activeToMove(this.index,moveSonWidth)
    }
    //active + moveto
    activeToMove(index,moveSonWidth){
        this.sonItem.removeClass("active")
        $(this.sonItem[this.index]).addClass("active")
        $(this.fatherContent).css({left:`${-moveSonWidth * index}px`})
    }
    
}
const c_banner_top_bg = new createDomWdith(3000,$(".c__banner_top_content_rg_bg"),$(".c__banner_top_content_rg_bg_content"),$(".c__banner_top_content_rg_bg_content_item"));
const c_banner_top_text = new createDomWdith(3000,$(".c__banner_top_content_lf"),$(".c__banner_top_content_lf_content"),$(".c__banner_top_content_lf_content_item"));
$(window).on("resize",function(){
    c_banner_top_bg.createElementWidth();
    c_banner_top_text.createElementWidth();
    c_banner_people_bg.createElementWidth();
    c_banner_people_text.createElementWidth();
});
$(".j__banner_top_content_btn_lf").on("click",function(){
    c_banner_top_bg.moveDirection("<");
    c_banner_top_text.moveDirection("<");
})
$(".j__banner_top_content_btn_rg").on('click',function(){
    c_banner_top_bg.moveDirection(">");
    c_banner_top_text.moveDirection(">");
})

const c_banner_people_bg = new createDomWdith(3000,$(".c__banner_people_container"),$(".c__banner_people_content"),$(".c__banner_people_item"))
const c_banner_people_text = new createDomWdith(3000,$(".c__banner_people_text_container"),$(".c__banner_people_text_content"),$(".c__banner_people_text_item"))
$(".c__banner_people_btn_lf").on("click",function(){
    c_banner_people_bg.moveDirection("<");
    c_banner_people_text.moveDirection("<");
})
$(".c__banner_people_btn_rg").on("click",function(){
    c_banner_people_bg.moveDirection("<");
    c_banner_people_text.moveDirection("<");
})



