$(function() {
  // topSectionTitleHorizontalLineを縦中心に配置
  $topSectionTitle = $('.topSection__title');
  $topSectionTitleHorizontalLine = $('.topSection__title__horizontal-line');
  $topSectionTitleHorizontalLine.css('margin-top', $topSectionTitle.height() / 2);


  // topSectionTitleHorizontalLineのslide-in
  /*$('.js-topSection-title-line-h-slide-in').click(function() {$(this).fadeOut('slow');});
  var $window = $(window);
  var $topSectionTitleLineHOffset = $('.topSection__title__line--h').scrollTop();
  $window.scroll(function() {
    if ($window > $topSectionTitleLineHOffset) {

    }
  });*/

  // ネガティブマージンによってずれたtopProjectLeftの右端位置を調整
  /*$topProjectLeft = $('.topProject__left');
  $topProjectLeftNegativeMargin =  - parseInt($topProjectLeft.css('margin-left'));
  $topSection = $('.topSection');
console.log($topProjectLeftNegativeMargin);
  console.log(50 + $topProjectLeftNegativeMargin / $topSection.width());
  $topProjectLeft.css('width', '+=' + $topProjectLeftNegativeMargin);*/

  // topNewsのホバーアニメーション
  $('.js-topNews-hover-animation').on('hover', function(){
    // transitionで！！！
  });

  // hamburger
  $(".hamburger").on("click", ()=> {
      $(".topHeader__hamburger__menu").slideToggle(300);
      $(this).toggleClass("active");
      $(".hamburger__open").toggle();
      $(".hamburger__close").toggle();
  });
});
