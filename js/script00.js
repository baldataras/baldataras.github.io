$(function(){
	function pageloadone(){
		$(".service_two.notactive").removeClass('notactive')
    	$(".service_two").animate({
			width: '210px'
		},1000);
	}
	function pageloadtwo(){
		$(".service_three.notactive").removeClass('notactive')
    	$(".service_three").animate({
			width: '210px'
		},1000);
	}
	function pageloadthree(){
		$(".service_four.notactive").removeClass('notactive')
    	$(".service_four").animate({
			width: '210px'
		},1000);
	}
	function pageloadfour(){
		$(".service_five.notactive").removeClass('notactive')
    	$(".service_five").animate({
			width: '210px'
		},1000);
	}
	$( document ).ready(function() {
    	$(".service.notactive").removeClass('notactive')
    	$(".service").animate({
			width: '210px'
		},1000);
		setTimeout(function(){
			pageloadone();
		},1100);
		setTimeout(function(){
			pageloadtwo();
		},2200);
		setTimeout(function(){
			pageloadthree();
		},3300);
		setTimeout(function(){
			pageloadfour();
		},4400);
	});
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