$(document).ready(function(){

  $(".main>img").hide().css({left:"-100px"});
  $(".main>hr").hide();
  $(".main>p").hide().css({right:"-100px"});

  $(".main>img").fadeIn(1500).animate({left:"0px"},1500);
  $(".main>hr").fadeIn(3000);
  $(".main>p").fadeIn(1500).animate({right:"0"},1500);
  $("#scroll_btn ul .scb1").addClass("active");
  

  /* ////사이드 퀵메뉴 ///// */
  $(window).scroll(function(){
    let scrollpos = $(this).scrollTop();
    $("#txt1").text(scrollpos);

    if(scrollpos <925){
      $(".main>img").fadeIn(1500).animate({left:"0px"},1500);
      $(".main>hr").fadeIn(3000);
      $(".main>p").fadeIn(1500).animate({right:"0"},1500);
      $("#scroll_btn ul .scb1").addClass("active");
    }else{
      $("#scroll_btn ul .scb1").removeClass("active");
    }

    ///925
    if(scrollpos > 924 && scrollpos <1880){
      $("#scroll_btn ul .scb2").addClass("active");
    }else{
      $("#scroll_btn ul .scb2").removeClass("active");
    }

    //1880
    if(scrollpos >= 1880){
      $("#scroll_btn ul .scb3").addClass("active");
    }else{
      $("#scroll_btn ul .scb3").removeClass("active");
    }

  });

  

  /* ////사이드 퀵메뉴 클릭///// */
  $("#scroll_btn ul .scb1").click(function(){
    $("html, body").stop().animate({scrollTop:0}, 700);
  })

  $("#scroll_btn ul .scb2").click(function(){
    $("html, body").stop().animate({scrollTop:925}, 700);
  })

  $("#scroll_btn ul .scb3").click(function(){
    $("html, body").stop().animate({scrollTop:1880}, 700);
  })

  /* ////// 모달 사이트맵 ////// */
  let now = true;
  
  $(".trigger").click(function(){
    
    if(now){
      $(this).addClass("active");
      $("nav").fadeIn();
      $("#scroll_btn").hide();
      now = false;
    }else{
      $(this).removeClass("active");
      $("nav").fadeOut();
      $("#scroll_btn").show();
      now = true;
    };
  });

  /* 메인메뉴 호버효과 */

  $(".main_menu").hover(function(){
    $(this).find("span").css({"width":"100%","text-shadow":"0 0 5px #7cfdff"})
  }, function(){
    $(this).find("span").css({"width":"0"})
  });
  

  /* 오늘의 공연 */
  let conslide_w= 285;
  
  $(".con_slide .tcontent:last-child").prependTo(".con_slide");
  $(".con_slide").css({left:-conslide_w});

  /* 이전버튼 */
  $(".con_left").click(function(){
    $(".tcontent").removeClass("active");
    $(".tcon_back").removeClass("active");
    $(".tcontent:nth-child(3)").addClass("active");
    $(".tcontent:nth-child(3) .tcon_back").addClass("active");
    
    $(".con_slide").stop().animate({left:"+="+conslide_w+"px"},500, function(){
      $(".tcontent:last-child").prependTo(".con_slide");
      $(this).css({left:-conslide_w});
    })
  });

  /* 다음버튼 */
  $(".con_right").click(function(){
    $(".tcontent").removeClass("active");
    $(".tcon_back").removeClass("active");

    $(".tcontent:nth-child(5)").addClass("active");
    $(".tcontent:nth-child(5) .tcon_back").addClass("active");
    $(".con_slide").stop().animate({left:"-="+conslide_w+"px"},500, function(){
      $(".tcontent:first-child").appendTo(".con_slide");
      $(this).css({left:-conslide_w});
    })
  });














});