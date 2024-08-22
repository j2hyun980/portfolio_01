$(function () { // 문서준비이벤트 (삭제X)

  // banner
  const mb = new Swiper('.mb', {
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false, },
    speed: 1000,
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev", },
  });

  //introduce
  $(".introduce ul li").mouseenter(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active").addClass("active_other");
  });
  $(".introduce ul li").mouseleave(function () {
    $(this).removeClass("active");
    $(this).siblings().removeClass("active_other");
  });

  //movie
  const movie_list = new Swiper('.movie_list', {
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false, },
    speed: 1000,
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev", },
  });

  //notice
  const notice_list = new Swiper('.notice_list', {
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false, },
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });

  //daily
  $(".daily .daily_area .img_box img").not(":first").hide();

  $(".daily .daily_area .txt_box .daily_list li").mouseenter(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let num = $(this).index();
    $(".daily .daily_area .img_box img").eq(num).show().siblings().hide();
  });

}); // 문서준비이벤트 (삭제X)