import "../assets/head__top_nav/head__top_nav.less";
import $ from "jquery";

// $("body").html()
initResize();
inScroll();
$(window).on("scroll",function(){
    inScroll()
})

function inScroll(){
    const documentWdith = $(document).innerWidth()
    if(documentWdith >= 1220){
        $(".woyaobeishanchu").remove();
    }
    if ($(document).scrollTop() >= 100) {
        $(".j__onTop").addClass("active")
        $(".head__top").addClass("active")
        $(".head__top_zhedie").css({color:"black"})
    } else {
        $(".head__top").removeClass("active")
        $(".j__onTop").removeClass("active")
        if(documentWdith <= 980 && !$('.head__top_nav_F').hasClass("active")){
            $(".head__top_zhedie").css({color:"white"})
        }
    }  
}
function initResize() {
    const documentWdith = $(document).innerWidth()
    if (documentWdith <= 1203  ) {
        $(" .Why").appendTo($(".head__top_nav_F"));
        $(" .head__top_btn").appendTo($(".head__top_nav_F"));
    } else {
        $(".woyaobeishanchu").remove();
        $(".head__top_nav_F .Why").appendTo($(".head__top_nav_right"));
        $(".head__top_nav_F .head__top_btn").appendTo($(".head__top_nav_right"));
    }
    if(documentWdith <= 1220  && documentWdith >= 980){
        $(".head__top_zhedie").css({color:"black"})
    }else{
        $(".head__top_zhedie").css({color:"white"})
    }
}

$(window).on("resize",function(){
    
    initResize()
})

$(".head__top_zhedie").on("click", function () {
    if (!this.key) {
        $(".head__top_nav_F").addClass("active");
        $(".head__top_zhedie").removeClass("icon-hanbaocaidanzhedie");
        $(".head__top_zhedie").addClass("icon-guanbi").css({ color: "black" });
        var div = $("<div>").css({ height: `${$("body").innerHeight()}px`, width: "100%", backgroundColor: "#0000005e", position: "absolute", top: 0, left: 0 ,zIndex:2}).addClass("woyaobeishanchu");
        div.appendTo($("body"))
        this.key = true
    } else {
        $(".head__top_nav_F").removeClass("active");
        $(".head__top_zhedie").addClass("icon-hanbaocaidanzhedie")
                if($(document).innerWidth() <= 980){
            $(".head__top_zhedie").css({ color: "#fff" });
        }
        $(".head__top_zhedie").removeClass("icon-guanbi");
        $(".woyaobeishanchu").remove();
        this.key = false
    }
})

