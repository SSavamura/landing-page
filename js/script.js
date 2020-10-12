/// <Reference href="js/jquery-3.5.1.min.js" >

$(document).ready(function () {

	$('.menu-btn').click(function() {
        $('.menu-block').toggleClass('menu-block-active');
    });

	const slider = document.querySelector('.swiper-container');
	const nextBtn = document.querySelector('.swiper-button-next');
	const prevBtn = document.querySelector('.swiper-button-prev');
	const pagination = document.querySelector('.swiper-pagination');

	let mySwiper = new Swiper(slider, {
		slidesPerView: 1,
		spaceBetween: 10,
		loop: true,
		navigation: {
			nextEl: nextBtn,
			prevEl: prevBtn,
		},
		pagination: {
			el: pagination,
			type: 'bullets',
			clickable: true,
		},
		autoplay: {
			delay: 4000,
		},
		breakpoints: {

			768: {
				slidesPerView: 3,
			},

			1240: {
			  slidesPerView: 4,
			},
		}
	});

	function mobileSlider() {
		if(window.innerWidth <= 768) {
			$('.swiper-container').removeClass("swiper-no-swiping");
		}
		else {
			$('.swiper-container').addClass("swiper-no-swiping");
		}
	};

	mobileSlider();

	window.addEventListener('resize', () =>  {
		mobileSlider();
	});

});


