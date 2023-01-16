(function($) {
    "use strict";
     $(document).on('ready', function() {	
		
		$('.nftmax__sicon').on( "click", function(){
			$('.nftmax-smenu ,.nftmax-header ,.nftmax-adashboard').toggleClass('nftmax-close');
		});	
		
		/*====================================
			Header Sticky JS
		======================================*/ 
		$(window).on('scroll', function() {
			if ($(this).scrollTop() > 1) {
				$('.nftmax-sidebar').addClass("sticky");
			} else {
				$('.nftmax-sidebar').removeClass("sticky");
			}
		});
		
		/*====================================
			Checkbox JS
		======================================*/ 
		$('input[type="checkbox"]').change(function(){
			if($(this).is(':checked')){
				$(this).parent("label").addClass("checked");
			} else {
				$(this).parent("label").removeClass("checked");
			}
		});
		
		
		$(".dashboard-banner__slider").slick({
			autoplay:false,
			speed: 800,
			autoplaySpeed: 3500,
			slidesToShow: 1,
			pauseOnHover: true,
			centerMode: true,
			cssEase: 'linear',
			infinite: true,
			centerPadding: '0px',
			dots: true,
			arrows:false,
			cssEase: 'ease',
			speed: 700,
			draggable: true,
			prevArrow: '<button class="Prev"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>',
			nextArrow: '<button class="Next"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>',
		});
		
		$(".trending-action__slider").slick({
			autoplay:false,
			speed: 800,
			autoplaySpeed: 3500,
			slidesToShow: 4,
			pauseOnHover: true,
			dots: false,
			center:false,
			arrows:true,
			cssEase: 'ease',
			speed: 700,
			draggable: true,
			prevArrow: '<button class="Prev"><svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.09766 1.1499L1.13307 9.11449L9.09766 17.0791" stroke="url(#paint0_linear_220_23410)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><defs><linearGradient id="paint0_linear_220_23410" x1="9.09766" y1="1.1499" x2="-4.2474" y2="7.96749" gradientUnits="userSpaceOnUse"><stop stop-color="#F539F8"></stop><stop offset="0.416763" stop-color="#C342F9"></stop><stop offset="1" stop-color="#5356FB"></stop></linearGradient></defs></svg></button>',
			nextArrow: '<button class="Next"><svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.34766 17.0801L9.31224 9.11549L1.34766 1.15091" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>',
				responsive: [
				{
					breakpoint: 2000,
					settings: {
						slidesToShow: 4,
					}
				},
				{
					breakpoint: 1600,
					settings: {
						slidesToShow: 4,
					}
				},
				{
					breakpoint: 812,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 800,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 500,
					settings: {
						slidesToShow: 1,
					}
				},
			]
		});
		$(".seller-list__slider").slick({
			autoplay:false,
			speed: 800,
			autoplaySpeed: 3500,
			slidesToShow: 4,
			pauseOnHover: true,
			centerMode: true,
			cssEase: 'linear',
			infinite: true,
			centerPadding: '0px',
			dots: false,
			arrows:true,
			cssEase: 'ease',
			speed: 700,
			draggable: true,
			prevArrow: '<button class="Prev"><svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.34766 17.0801L9.31224 9.11549L1.34766 1.15091" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>',
			nextArrow: '<button class="Next"><svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.09766 1.1499L1.13307 9.11449L9.09766 17.0791" stroke="url(#paint0_linear_220_23410)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><defs><linearGradient id="paint0_linear_220_23410" x1="9.09766" y1="1.1499" x2="-4.2474" y2="7.96749" gradientUnits="userSpaceOnUse"><stop stop-color="#F539F8"></stop><stop offset="0.416763" stop-color="#C342F9"></stop><stop offset="1" stop-color="#5356FB"></stop></linearGradient></defs></svg></button>',
				responsive: [{
					breakpoint: 1500,
					settings: {
						slidesToShow: 4,
					}
				},
				{
					breakpoint: 800,
					settings: {
						slidesToShow: 4,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 500,
					settings: {
						slidesToShow:2,
					}
				},
			]
		});
		
		$(".marketplace-single__slider").slick({
			autoplay:false,
			speed: 800,
			autoplaySpeed: 3500,
			slidesToShow: 4,
			pauseOnHover: true,
			centerMode: true,
			cssEase: 'linear',
			infinite: true,
			centerPadding: '0px',
			dots: false,
			arrows:true,
			cssEase: 'ease',
			speed: 700,
			draggable: true,
			prevArrow: '<button class="Prev"><svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.09766 1.1499L1.13307 9.11449L9.09766 17.0791" stroke="url(#paint0_linear_220_23410)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><defs><linearGradient id="paint0_linear_220_23410" x1="9.09766" y1="1.1499" x2="-4.2474" y2="7.96749" gradientUnits="userSpaceOnUse"><stop stop-color="#F539F8"></stop><stop offset="0.416763" stop-color="#C342F9"></stop><stop offset="1" stop-color="#5356FB"></stop></linearGradient></defs></svg></button>',
			nextArrow: '<button class="Next"><svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.34766 17.0801L9.31224 9.11549L1.34766 1.15091" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>',
				responsive: [
				{
					breakpoint: 2000,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 1600,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 800,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 500,
					settings: {
						slidesToShow: 1,
					}
				},
			]
		});
		
		$(".nftmax-inner__created-slider").slick({
			autoplay:false,
			speed: 800,
			autoplaySpeed: 3500,
			slidesToShow: 4,
			pauseOnHover: true,
			cssEase: 'linear',
			infinite: true,
			centerPadding: '0px',
			dots: false,
			arrows:true,
			cssEase: 'ease',
			speed: 700,
			draggable: true,
			prevArrow: '<button class="Prev"><i class="fa-solid fa-angle-left"></i></button>',
			nextArrow: '<button class="Next"><i class="fa-solid fa-angle-right"></i></button>',
				responsive: [
				{
					breakpoint: 2000,
					settings: {
						slidesToShow: 4,
					}
				},
				{
					breakpoint: 1600,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 800,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 500,
					settings: {
						slidesToShow: 1,
					}
				},
			]
		});
		
		$(".nftmax-inner__created-sliderv2").slick({
			autoplay:false,
			speed: 800,
			autoplaySpeed: 3500,
			slidesToShow: 4,
			pauseOnHover: true,
			centerMode: true,
			cssEase: 'linear',
			infinite: true,
			centerPadding: '0px',
			dots: false,
			arrows:true,
			cssEase: 'ease',
			speed: 700,
			draggable: true,
			prevArrow: '<button class="Prev"><i class="fa-solid fa-angle-left"></i></button>',
			nextArrow: '<button class="Next"><i class="fa-solid fa-angle-right"></i></button>',
				responsive: [
				{
					breakpoint: 2000,
					settings: {
						slidesToShow: 4,
					}
				},
				{
					breakpoint: 1600,
					settings: {
						slidesToShow: 4,
					}
				},
				{
					breakpoint: 1500,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 800,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 500,
					settings: {
						slidesToShow: 1,
					}
				},
			]
		});
		
		/*====================================
			Active Effect
		======================================*/ 
		$('.single-shift').on('click', function(){
			$('.single-shift').removeClass('active');
			$(this).addClass('active');
		})
		$('.single-payment').on('click', function(){
			$('.single-payment').removeClass('active');
			$(this).addClass('active');
		})
		
		/*====================================
			Password Icon
		======================================*/ 
		 var showPass = 0;
		$('.nftmax-wc__icon').on('click', function(){
			if(showPass == 0) {
				$(this).next('input').attr('type','text');
				$(this).find('i').removeClass('fa-eye');
				$(this).find('i').addClass('fa-eye-slash');
				showPass = 1;
			}
			else {
				$(this).next('input').attr('type','password');
				$(this).find('i').removeClass('fa-eye-slash');
				$(this).find('i').addClass('fa-eye');
				showPass = 0;
			}
			
		});
		
		
		
	});
})(jQuery);