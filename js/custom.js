$(document).ready(function(){
    
    //<!-- jQuery -->
    //<!-- FlexSlider -->
    var $ = jQuery.noConflict();
            $(window).load(function() {
            $('.flexslider').flexslider({
                  animation: "fade"
            });

            $(function() {
                $('.show_menu').click(function(){
                        $('.menu').fadeIn();
                        $('.show_menu').fadeOut();
                        $('.hide_menu').fadeIn();
                });
                $('.hide_menu').click(function(){
                        $('.menu').fadeOut();
                        $('.show_menu').fadeIn();
                        $('.hide_menu').fadeOut();
                });
            });
          });
    
    var $scrollStatus = $('.scroll-status');
            $('.nav').navScroll({
              mobileDropdown: true,
              mobileBreakpoint: 768,
              scrollSpy: true,
              onScrollStart: function() {
                $scrollStatus.show();
                $scrollStatus.text('Started scrolling');
              },
              onScrollEnd: function() {
                $scrollStatus.text('Scrolling ended');
                setTimeout(function() {
                  $scrollStatus.fadeOut(200);
                }, 1000);
              }
            });

            $('.click-me').navScroll({
              navHeight: 0
            });

            $('.nav').on('click', '.nav-mobile', function (e) {
              e.preventDefault();
              $('.nav ul').slideToggle('fast');
            });
    
    
    
});
