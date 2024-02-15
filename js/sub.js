$(document).ready(function(){

  /* sub header */
  $(".gnbMenu").hover(function(){ 
    $(this).find("li>.smenu").stop().slideDown();
    $(".bg_box").stop().slideDown();
  },function(){
    $(this).find("li>.smenu").stop().slideUp();
    $(".bg_box").stop().slideUp();
  });


  /* ////////////////sub4-1//////////////////////// */
  /* /////////연도 슬라이드///////////*/

  let bnum = 0;

  //다음보기
  $(".abtn_rt").click(function(){
    if(bnum<4){
      $(".artyearslide").stop().animate({"left":"-=690px"},500);
      bnum++;

      if(bnum==4){
        $(".abtn_rt").css({"color":"#206dda","cursor":"default"})
      }else{
        $(".abtn_rt").css({"color":"#8baddf","cursor":"pointer"})
      }
    }
    
  });

  //이전보기

  $(".abtn_lt").click(function(){
    if(bnum>0){
      $(".artyearslide").stop().animate({"left":"+=690px"},500);
      bnum--;

      if(bnum==0){
        $(".abtn_lt").css({"color":"#206dda","cursor":"default"})
      }else{
        $(".abtn_lt").css({"color":"#8baddf","cursor":"pointer"})
      }
    }
  });

  //스크롤이벤트
  $(window).scroll(function(){
    let scrollpos = $(this).scrollTop();

    if(scrollpos>1100 && scrollpos<1700){
      

      $(".artslide").scrollLeft(scrollpos-1100, function(){
        
      });

      $(window).on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      });
      
      // $('html,body').css({"overflow":"hidden","height":"100%"});
      /* $(window).on('scroll', function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }); */
      
    }else{
      $(window).off('scroll touchmove mousewheel');
    }
  })
  
  /* ////////////////sub5-2////////////////////// */
  $(".gallerytab>div").click(function(){
    gnum = $(this).index()

    $(".gcon").eq(gnum).siblings().removeClass("active");
    $(".gcon").eq(gnum).addClass("active");
  })

  /* /////////////////sub6-1//////////////////// */

  $(".title").click(function(){
    $(this).siblings().removeClass("active"); 
    $(this).toggleClass("active");
    $(this).siblings(".desc").stop().slideUp();
    $(this).next().stop().slideToggle();
  });


});