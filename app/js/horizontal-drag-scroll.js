// const slider = document.querySelector('.horizontal-scroll');
// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener('mousedown', (e) => {
//   isDown = true;
//   slider.classList.add('active');
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// });
// slider.addEventListener('mouseleave', () => {
//   isDown = false;
//   slider.classList.remove('active');
// });
// slider.addEventListener('mouseup', () => {
//   isDown = false;
//   slider.classList.remove('active');
// });
// slider.addEventListener('mousemove', (e) => {
//   if(!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const walk = (x - startX) * 1; //scroll-fast
//   slider.scrollLeft = scrollLeft - walk;
// });




import mCustomScrollbar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js'


(function ($) {
  $(window).on("load", function () {
    $(".horizontal-scroll").mCustomScrollbar({
      axis: "x",
      advanced: {
        autoExpandHorizontalScroll: true 
      }
    });
  });
})(jQuery);