import "../../assets/c__ImgExhibition/c__ImgExhibition.less";

import $ from "jquery"
import {Exhibition}  from "./c__Exhibition.js";

const imgExhibition = new Exhibition($(".c__Exhibition_container_img_container"),$(".c__Exhibition_container_img_content"),$(".c__ImgExhibition"),$(".c__Img_Exhibition_btn"),4000)
btnInit()
$(window).on("resize",function(){
    imgExhibition.creatWidth();
    imgExhibition.creatBtn();
    btnInit(imgExhibition)
    imgExhibition.count = 0;
    imgExhibition.index = 0;
})
// 绑定btn点击事件
function btnInit(){
    const len = imgExhibition.btns.length;
    for(let i = 0; i < len ; i++){
        imgExhibition.btns[i].index = i
        imgExhibition.btns[i].on("click",function(){
            const len = imgExhibition.sonLen()
            imgExhibition.count  = imgExhibition.btns[i].index * len;
            imgExhibition.index = imgExhibition.btns[i].index;
            imgExhibition.move();
        })
    }
}


