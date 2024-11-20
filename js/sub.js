$(function () { // 문서준비이벤트 (삭제X)

  //depth2
  $(".depth2, .depth2_bg").hide();
  $(".gnb > li").mouseenter(function () {
    $(this).find(".depth2").stop().fadeIn();
    $(".depth2_bg").stop().fadeIn();
  });
  $(".gnb > li").mouseleave(function () {
    $(this).find(".depth2").stop().fadeOut();
    $(".depth2_bg").stop().fadeOut();
  });

  // mobile-menu
  $(".mmenu").hide();

  $("#header .ham").click(function () {
    $(".mmenu").stop().fadeIn();
    // 스크롤바 hidden
    $("body").css({ "overflow": "hidden" });
  });

  $(".mheader .mmenu_close").click(function () {
    $(".mmenu").stop().fadeOut();
    location.reload();
  });

  $(".mgnb > li").click(function () {

    var $this = $(this);
    var $mdepth2 = $this.find(".mdepth2");

    if ($this.hasClass("active")) {
      // 활성화
      $this.removeClass("active");
      $mdepth2.slideUp();
      $this.find(".mdepth1").removeClass("active");
    } else {
      // 활성화X
      $this.addClass("active");
      $mdepth2.slideDown();
      $this.siblings().removeClass("active").find(".mdepth2").slideUp();
    }
  });

  //quick-menu
  $(window).scroll(function () {
    let btnScroll = $(this).scrollTop();
    if (btnScroll > 750) {
      $(".quick_area").addClass("active");
    } else {
      $(".quick_area").removeClass("active");
    }
  });

  $(".gotop").click(function () {
    $(window).scrollTop(0);
  });

  // fab-btn
  $(".mbtn_list").hide();
  $(".btn_fab").click(function () {
    $(".mbtn_list").stop().fadeIn().css({ "transform": "translateY(0)" });
  });
  $(".btn_fab_close, .mbtn_gotop").click(function () {
    $(".mbtn_list").stop().fadeOut().css({ "transform": "translateY(0)" });
  });

  $(".btn_fab_close").hide();
  $(".btn_fab").click(function () {
    $(".btn_fab_close").stop().fadeIn();
    $(".btn_fab").stop().fadeOut();
  });
  $(".btn_fab_close, .mbtn_gotop").click(function () {
    $(".btn_fab_close").stop().fadeOut();
    $(".btn_fab").stop().fadeIn();
  });

  $(".mbtn_gotop").click(function () {
    $(window).scrollTop(0);
  });

  $(window).scroll(function () {
    let mbtnScroll = $(this).scrollTop();
    if (mbtnScroll > 600) {
      $(".fab").addClass("active");
    } else {
      $(".fab").removeClass("active");
    }
  });

  //qna
  $(".qna_list:not(:first-child)").hide();
  $(".btn_list button").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let idx = $(this).index();
    $(".qna_list").eq(idx).show().siblings().hide();

  });

  $(".qna_depth2").hide();
  $(".qna_box").click(function () {
    $(this).toggleClass("active");
    $(this).next(".qna_depth2").stop().slideToggle();
  });

}); // 문서준비이벤트 (삭제X)