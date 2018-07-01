$(document).ready(function() {

    //Variable Define
    var slider = $(".slideshow ul");
    var slide = $(".slideshow ul li");
    var slideshow = $(".slideshow");

    //Previous Slide
    $('.prev').click(function() {
      slideshow.animate({
        scrollLeft:"-=1400px"
      });

      var currentPage = $('.current');
      var prevPage = currentPage.prev();

      if(prevPage.length){
        prevPage.addClass('current').siblings().removeClass('current');
      }
    });

    //Next Slide
    $('.next').click(function() {
      slideshow.animate({
        scrollLeft:"+=1400px"
      });

      var currentPage = $('.current');
      var nextPage = currentPage.next();

      if(nextPage.length){
        nextPage.addClass('current').siblings().removeClass('current');
      }
    });

    //Dynamic pager == number of images
    count = 0;
    $('.slideshow .slide').each(function () {
      count++;
      li = '<li id="' + count + '"> ' + count + '</li>';
      $('.pager ul').append(li);
    });


    //Adding active on pager
    $('.pager ul li:first-child').addClass('current');

    //Get same id of pager and slide when clicked
    $('.pager ul li').click(function () {
        id = $(this).attr('id');

        var $this = $(this);
        $(this).closest('li').addClass('current').siblings().removeClass('current');

        $('.slide').removeClass('slide-active');

        pagerCurrent = $('.slide:nth-of-type('+id+')').offset().left;

        $(slideshow).animate({
          scrollLeft: '+='+pagerCurrent
        });
      });

    //Back to top button
    var webHeight = $(document).height();

    $('.back_top').click(function () { // back to top
      $("html, body").animate({
        scrollTop: 0
      }, 900);
      return false;
    });

    $(window).scroll(function(){  // fade in fade out button
    var windowScroll = $(this).scrollTop();

      if (windowScroll > (webHeight * 0.5) ) {
        $(".back_top").fadeIn();
      } else{
        $(".back_top").fadeOut()
      };

    });

});
