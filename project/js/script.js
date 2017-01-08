$('.js-main-slider').slick({
  adaptiveHeight: true,
  draggable: false,
  swipe: false,
  arrows: false
});

$('.js-event-slider').slick({
  arrows: false,
  swipe: false
});

$('.js-benefits-slider').slick({
  arrows: false,
  dots: true
});

$('.js-news-slider, .js-lectures-slider').slick({
  arrows: true,
  infinite: false,
  initialSlide: 0,
  prevArrow: '<button type="button" class="arrow arrow--left"></button>',
  nextArrow: '<button type="button" class="arrow arrow--right"></button>'
});

$('.js-slide-left').on('click', function() {
  $('.js-main-slider').slick('slickPrev');
  $('.js-event-slider').slick('slickPrev');
});

$('.js-slide-right').on('click', function() {
  $('.js-main-slider').slick('slickNext');
  $('.js-event-slider').slick('slickNext');
});

$('.js-toggle-nav').on('click', function() {
  $('.nav__navigation').slideToggle();
});

$('.js-toggle-sub-nav').on('click', function() {
  $('.nav__slide-menu').slideToggle();
});

$(window).on('resize', function() {
  $('.nav__slide-menu').removeAttr('style')
});

$(window).on('scroll', function() {
  var $header = $('.nav').closest('.container--fixed');
  if(pageYOffset > 100) {
    if(!$('.container').data('fixed')) {
      $header.css({
        'padding-bottom': '20px',
        'background-color': '#fff'
      });
      $('.container').data('fixed', true);
    }
  } else {
    $header.css({
      'padding-bottom': '0',
      'background-color': 'transparent'
    });
    $('.container').data('fixed', false);
  }
});

$('.js-tabs > div').on('click', function() {
  var $element = $(this).index();
  $('.js-tabs > div').removeClass('active').eq($element).addClass('active');
  $('.js-tabs-content > div').removeClass('active').eq($element).addClass('active');
});
