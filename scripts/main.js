$(document).ready(function(){

	var $header = $('header');
	var $sticky = $header.before($header.clone().addClass("sticky"));
	$(window).on("scroll", function(){
		var scrollFromTop = $(window).scrollTop();
		$("body").toggleClass("onScroll",(scrollFromTop > 250));
	});

	$('.gallery').masonry({
		//options
		columnWidth: 85,
		itemSelector: '.galleryItem',
		fitWidth: true,
		gutter: 0
	});

	//slick slider

	$('.slider').slick({
		autoplay: true,
		autoplaySpeed: 1500,
		centerMode:true,
		slidesToShow: 3,
		arrows:true,
		prevArrow: '<button type="button" class="slick-prev">Previous</button>',
		nextArrow: '<button type="button" class="slick-next">Next</button>',

		responsive: [

			{
				breakpoint:990,
				settings: {
					slidesToShow:2
				}
			},

			{
				breakpoint:760,
				settings: {
					slidesToShow:1
				}
			}
		]
	});

	/*SMOOTH SCROLLING*/
	$('.menu li a[href^="#"]').on('click', function(e){

		e.preventDefault();
		var target = $(this.hash);

		if(target.length){
			$('html, body').stop().animate({
				scrollTop: target.offset().top -60
			},1500);   
		}
	});

	/*RESPONSIVE MENU*/
	var body = $('body');
	var menuTrigger = $('.js-menu-trigger');
	var mainOverlay = $('.js-main-overlay');


	menuTrigger.on('click', function(){

		body.addClass('menu-is-active');
	});

	mainOverlay.on('click', function(){

		body.removeClass('menu-is-active');
	});

	$('.menu li a').on('click', function(){
		body.removeClass('menu-is-active');
	});
	
});