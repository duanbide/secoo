$(function(){

    $(".uls li").click(function(){
        var t = $(this).index();
        console.log(t);
        $(".box .hide").eq(t).css("display","block");
        $(".box .hide").eq(t).siblings().css("display","none");
     })
    
    
    })
    