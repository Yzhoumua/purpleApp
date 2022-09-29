import $ from "jquery";
import { Exhibition } from "./c__Exhibition.js";
import "../../assets/c__projectExhibition/c__projectExhibition.less";

const projectExhibition = new Exhibition($(".c__prejectExhibition_container_img_container"),$(".c__prejectExhibition_container_img_content"),$(".c__projectExhibition"),$(".c__projectExhibition_btn"),4000)
btnInit()
$(window).on("resize",function(){
    projectExhibition.creatWidth();
    projectExhibition.creatBtn();
    btnInit(projectExhibition)
    projectExhibition.count = 0;
    projectExhibition.index = 0;
})
// 绑定btn点击事件
function btnInit(){
    const len = projectExhibition.btns.length;
    for(let i = 0; i < len ; i++){
        projectExhibition.btns[i].index = i
        projectExhibition.btns[i].on("click",function(){
            const len = projectExhibition.sonLen()
            projectExhibition.count  = projectExhibition.btns[i].index * len;
            projectExhibition.index = projectExhibition.btns[i].index;
            projectExhibition.move();
        })
    }
}