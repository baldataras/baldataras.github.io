$(function(){
	$(".button_open").click(function() {
		$(".modal").addClass('active')
		$(".modal").animate({
			height: '87%'
		},1000);
		$(this).addClass('clos');
		$(this).removeClass('button_open');
	});

	$('.mod_tl').hover(function() {
 			 $(".line", this).animate({
				width: '70px'
			},1000);
	}, function() {
		 $(".line", this).animate({
				width: '0px'
			},1000);
	});

	

	

	$(".close").click(function() {
		$(".modal").animate({
			height: '0%'
		},1000);
		setTimeout(function(){
 			 $('.modal').removeClass("active");
		}, 1000);
	});
});