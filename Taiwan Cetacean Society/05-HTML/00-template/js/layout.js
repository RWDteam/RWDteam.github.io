var nav_inside_1_classList = document.querySelector("#nav_outside_1.nav-link")
var nav_inside_2_classList = document.querySelector("#nav_outside_2.nav-link")
var nav_color=document.querySelector(".navbar")
$("#toggle").click(function () {
    $(this).toggleClass("on");
});
$("#nav_inside_1").mouseenter(function () {
    nav_inside_1_classList.classList.add("out_white");
});
$("#nav_inside_1").mouseleave(function () {
    nav_inside_1_classList.classList.remove("out_white");
});
$("#nav_inside_2").mouseenter(function () {
    nav_inside_2_classList.classList.add("out_white");
});
$("#nav_inside_2").mouseleave(function () {
    nav_inside_2_classList.classList.remove("out_white");
});
window.onscroll=function(){
    scorll_hight=$(this).scrollTop();
    console.log(scorll_hight);
    if(scorll_hight>1080){
        nav_color.classList.add("black");
    }
    else{
        nav_color.classList.remove("black");
    }
}