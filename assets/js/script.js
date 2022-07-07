$(document).ready(function(){
	// toggle js
	$('.hamburger-menu').click(function(){
		$('body').addClass('tgl-active');
	});
	$('.tglCls').click(function(){
		$('body').removeClass('tgl-active');
	});
	// home slider js
	$('.single-item').slick({
		arrows: false,
		dots: true,
		infinite: true,
		autoplay: true
	});
	// testimonial js
	$('.testimonial-items').slick({
		arrows: false,
		dots: false,
		infinite: true,
		autoplay: true
	});
	// accordian js
	$('.accordian-wrap.active').find('.accordian-content').slideDown();
	$('.accordian-title').click(function(){
		$(this).next('.accordian-content').slideDown();
		$(this).parent('.accordian-wrap').siblings().find('.accordian-content').slideUp('slow');
		$(this).parent('.accordian-wrap').addClass('active').siblings().removeClass('active');
	});

	// modal video js
	$('.video-main').click(function(){
		$('body').addClass('active-modal');
		$('#video')[0].play();
	});
	$('.modal-cls').click(function(){
		$('body').removeClass('active-modal');
		$('#video')[0].pause();
	});

});

// header scroll js
$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('body').addClass('fixedHeader');
    } else {
       $('body').removeClass('fixedHeader');
    }
});

// counter js
var counted = 0;
$(window).scroll(function() {

  var oTop = $('.counter-wrap').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.counter-number').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});