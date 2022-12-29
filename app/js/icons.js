$('.icon').each(function (index) {
  var iconWrapSize = $(this).outerWidth();
  var iconSvg = $(this).find('svg');
  var iconUseSize = iconSvg.children('use').width();
  console.log(iconUseSize);
});