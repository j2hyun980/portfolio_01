$(function () {


  //qna
  $(".qna_list:not(:first-child)").hide();
  $(".btn_list button").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let idx = $(this).index();
    $(".qna_list").eq(idx).show().siblings().hide();

  });

  $(".qna_depth2").hide();

});

