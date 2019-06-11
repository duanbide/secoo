$(function(){

   //  $("#btn2").click(function(){
   //     $("#big-right-2").css("display","block");
   //     $("#big-right-1").css("display","none");
   //     $("#big-right-3").css("display","none");
   //     $("#big-right-4").css("display","none");
   //     $("#big-right-5").css("display","none");
   //     $("#big-right-6").css("display","none");
   //  })
   //  $("#btn3").click(function(){
   //      $("#big-right-2").css("display","none");
   //      $("#big-right-1").css("display","none");
   //      $("#big-right-3").css("display","block");
   //      $("#big-right-4").css("display","none");
   //      $("#big-right-5").css("display","none");
   //      $("#big-right-6").css("display","none");
   //   })
   //   $("#btn4").click(function(){
   //      $("#big-right-2").css("display","none");
   //      $("#big-right-1").css("display","none");
   //      $("#big-right-3").css("display","none");
   //      $("#big-right-4").css("display","block");
   //      $("#big-right-5").css("display","none");
   //      $("#big-right-6").css("display","none");
   //   })
   //   $("#btn5").click(function(){
   //      $("#big-right-2").css("display","none");
   //      $("#big-right-1").css("display","none");
   //      $("#big-right-3").css("display","none");
   //      $("#big-right-4").css("display","none");
   //      $("#big-right-5").css("display","block");
   //      $("#big-right-6").css("display","none");
   //   })
   //   $("#btn6").click(function(){
   //      $("#big-right-2").css("display","none");
   //      $("#big-right-1").css("display","none");
   //      $("#big-right-3").css("display","none");
   //      $("#big-right-4").css("display","none");
   //      $("#big-right-5").css("display","none");
   //      $("#big-right-6").css("display","block");
   //   })
   //   $("#btn1").click(function(){
   //      $("#big-right-1").css("display","block"); 
   //      $("#big-right-2").css("display","none");
   //      $("#big-right-3").css("display","none");
   //      $("#big-right-4").css("display","none");
   //      $("#big-right-5").css("display","none");
   //      $("#big-right-6").css("display","none");
   //   })
   //   $(".uls li").click(function(){
   //      var t = $(this).index();
   //      console.log(t);
   //      $(".big-right").eq(t).css("display","block");
   //    //   $(".big-right:not(:checked)").eq(t).css("display","none");
   //      console.log($(".big-right").eq(t));

   //   })


   $(".uls li").click(function(){
      var t = $(this).index();
      console.log(t);
      $(".box .big-right").eq(t).css("display","block");
      $(".box .big-right").eq(t).siblings().css("display","none");
   })
  
  

})

$(function(){
   


})