//라이트 갤러리 팝업
$("#lightgallery").lightGallery();

//윈도우 팝업
$(".window").click(function(e) {
  e.preventDefault();
  //window.open("파일명", "팝업이름", "옵션");
  //옵션 : left, top, width, height, status, toolbar, location, menubar, scrollbars, fullscreen
  window.open(
    "sample_popup.html",
    "popup01",
    "width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0"
  );
});

//레이어 팝업
$(".layer").click(function(e) {
  e.preventDefault();
  //$("#layer").css("display","block");
  //$("#layer").show();
  //$("#layer").fadeIn();
  $("#layer").slideDown();
});

$("#layer .close").click(function(e) {
  e.preventDefault();
  //$("#layer").css("display","block");
  //$("#layer").show();
  //$("#layer").fadeIn();
  $("#layer").slideUp();
});

// 탭메뉴
const $tab_list = $(".tab_menu");
$tab_list.find("ul ul").hide();
$tab_list.find("li.active > ul").show();

function tabMenu(e) {
  e.preventDefault();
  const $this = $(this);
  $this
    .next("ul")
    .show()
    .parent("li")
    .addClass("active")
    .siblings("li")
    .removeClass("active")
    .find(">ul")
    .hide();
}

$tab_list
  .find("ul>li>a")
  .click(tabMenu)
  .focus(tabMenu);

//배너 slick 효과 주기
// html 마크업 셋팅 -> css 연동 -> jQuery연동 -> jQuery 호출
$(".banner").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  dots: true
});

//갤러리 slick 효과 주기
$(".gallery_img").slick({
  arrows: false,
  fade: true,
  pauseOnHover: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 300,
  slidesToShow: 1
});

$(".play").click(function() {
  $(".gallery_img").slick("slickPlay");
});

$(".pause").click(function() {
  $(".gallery_img").slick("slickPause");
});

$(".prev").click(function() {
  $(".gallery_img").slick("slickPrev");
});

$(".next").click(function() {
  $(".gallery_img").slick("slickNext");
});

//아래 버튼 클릭시 전체 메뉴를 보이게 설정
$(".tit .btn").click(function(e) {
  e.preventDefault();
  // $("#cont-nav").css("display","block");
  //$("#cont-nav").show();
  //$("#cont-nav").fadeIn();
  //$("#cont-nav").slideDown();
  //$("#cont-nav").fadeToggle();
  $("#cont-nav").slideToggle(300);
  $(this).toggleClass("on");
});
