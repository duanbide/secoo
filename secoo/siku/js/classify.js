$(function(){

   $(".uls li").click(function(){
      var t = $(this).index();
      console.log(t);
      $(".sec-right .box-big").eq(t).css("display","block");
      $(".sec-right .box-big").eq(t).siblings().css("display","none");
   })
  
  

})

$(function(){
   // $("#big-right-1").css("diaplay","block");
   // $(".big-right").css("display","none");



})