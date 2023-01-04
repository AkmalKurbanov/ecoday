$('.mobile-nav li').on('click', function () {
$(this).find('ul').slideToggle();
  $('.mobile-nav li').not(this).find('ul').slideUp();
  $('.mobile-nav li').not(this).removeClass('open');
  $(this).toggleClass('open');
});

$('.header__nav li').on('click', function () {
  $('.header__nav li').not(this).removeClass('open')
  $(this).toggleClass('open');
});


$('.header__hamburger').on('click', function () {
  $('.mobile-nav').addClass('open')
});

$('.close').on('click', function () {
  $('.mobile-nav').removeClass('open')
});



$('.submenu-having .footer__title').on('click', function(){
  $(this).parent().toggleClass('active').find('ul').slideToggle();
  
});