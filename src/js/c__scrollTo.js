import $ from "jquery"
// 获取定位
class Domlocation{
    constructor(){
        //顶部
        // Home
        this.DomTop = 0;
        //Projects 图片展示
        this.Projects = null;
        // Process app介绍
        this.Process = null;
        //Testimonials 人物介绍
        this.Testimonials = null;
        // Services 项目展示
        this.Services = null;
        //whybox
        this.why = null;
        //表单部分
        this.Contact = null;
        this.init()        
    }
    init(){
        this.Projects = this.obtainLoaction($(".c__exhibitionImg_container"));
        this.Process = this.obtainLoaction($(".l__introduce"));
        this.Testimonials = this.obtainLoaction($(".c__banner_people"));
        this.Services = this.obtainLoaction($(".c__projectExhibition_container"));
        this.why = this.obtainLoaction($(".l__why_container"));
        this.Contact = this.obtainLoaction($(".c__forms_container"));
    }
    //获取当前元素距顶部的距离
    obtainLoaction(dom){
        return dom.offset().top;
    }
}
const docuLoaction = new Domlocation();
$(window).on("resize",function(){
    docuLoaction.init();
});


function toLocation(loaction){
    var doctTop = $(document).scrollTop();
    var num = doctTop;
    var r = 1;
    var timer = setInterval(function(){
        r ++;
    
        if(loaction < doctTop){
            num -= r;
            $(document).scrollTop(num);
            if($(document).scrollTop() - loaction <= 10){
                console.log($(document).scrollTop() - loaction );
                  clearInterval(timer);
                }
        }else{
            num += r;
            $(document).scrollTop(num);
            if(loaction - $(document).scrollTop()  <= 10){
                console.log($(document).scrollTop() - loaction );
                  clearInterval(timer);
                }
        }

    },10)
}
$(".Home").on("click",function(){
    toLocation(docuLoaction.DomTop);
    $(".head__top_nav_F_item").removeClass("active");
    $(this).addClass("active")
})
$(".Projects").on("click",function(){
    toLocation(docuLoaction.Projects);
    $(".head__top_nav_F_item").removeClass("active");
    $(this).addClass("active")
})
$(".Process").on("click",function(){
    toLocation(docuLoaction.Process);
    $(".head__top_nav_F_item").removeClass("active");
    $(this).addClass("active")
})
$(".Testimonials").on("click",function(){
    toLocation(docuLoaction.Testimonials);
    $(".head__top_nav_F_item").removeClass("active");
    $(this).addClass("active")
})
$(".Services").on("click",function(){
    toLocation(docuLoaction.Services);
    $(".head__top_nav_F_item").removeClass("active");
    $(this).addClass("active")
})
$(".Why").on("click",function(){
    toLocation(docuLoaction.why);
})
$(".head__top_btn").on("click",function(){
    toLocation(docuLoaction.Contact);
})
$(".j__onTop").on("click",function(){
    toLocation(docuLoaction.DomTop);
})


