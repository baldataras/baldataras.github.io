$(window).scroll(function(){
	    if ($(window).scrollTop() >= 100) {
	       $('.header').addClass('fixed-header');
	    }
	    else {
	       $('.header').removeClass('fixed-header');
	    }
	});


    var sections = $('section')
    , nav = $('nav')
    , nav_height = nav.outerHeight();
   
  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
   
    sections.each(function() {
      var top = $(this).offset().top - nav_height-300,
          bottom = top + $(this).outerHeight();
   
      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('active');
        sections.removeClass('active');
   
        $(this).addClass('active');
        nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
      }
    });
  });

  $(document).ready(function () {
    $('.sections1').addClass('active1')
  });