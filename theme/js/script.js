/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

(function ($) {
	'use strict';

	// Preloader js    
	$(window).on('load', function () {
		$('.preloader').fadeOut(700);
	});

	// Sticky Menu
	$(window).scroll(function () {
		var height = $('.top-header').innerHeight();
		if ($('header').offset().top > 10) {
			$('.top-header').addClass('hide');
			$('.navigation').addClass('nav-bg');
			$('.navigation').css('margin-top', '-' + height + 'px');
		} else {
			$('.top-header').removeClass('hide');
			$('.navigation').removeClass('nav-bg');
			$('.navigation').css('margin-top', '-' + 0 + 'px');
		}
	});
	// navbarDropdown
	if ($(window).width() < 992) {
		$('.navigation .dropdown-toggle').on('click', function () {
			$(this).siblings('.dropdown-menu').animate({
				height: 'toggle'
			}, 300);
		});
	}

	// Background-images
	$('[data-background]').each(function () {
		$(this).css({
			'background-image': 'url(' + $(this).data('background') + ')'
		});
	});

	//Hero Slider
	$('.hero-slider').slick({
		autoplay: true,
		autoplaySpeed: 7500,
		pauseOnFocus: false,
		pauseOnHover: false,
		infinite: true,
		arrows: true,
		fade: true,
		prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-angle-left\'></i></button>',
		nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-angle-right\'></i></button>',
		dots: true
	});
	$('.hero-slider').slickAnimation();

	// venobox popup
	$(document).ready(function () {
		$('.venobox').venobox();
	});


	// filter
	$(document).ready(function () {
		var containerEl = document.querySelector('.filtr-container');
		var filterizd;
		if (containerEl) {
			filterizd = $('.filtr-container').filterizr({});
		}
		//Active changer
		$('.filter-controls li').on('click', function () {
			$('.filter-controls li').removeClass('active');
			$(this).addClass('active');
		});
	});

	//  Count Up
	function counter() {
		var oTop;
		if ($('.count').length !== 0) {
			oTop = $('.count').offset().top - window.innerHeight;
		}
		if ($(window).scrollTop() > oTop) {
			$('.count').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				}, {
					duration: 1000,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
					}
				});
			});
		}
	}
	$(window).on('scroll', function () {
		counter();
	});
	document.addEventListener("DOMContentLoaded", function() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const courses = document.querySelectorAll(".row > .col-lg-3");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", function() {
      const filter = this.dataset.filter;
      courses.forEach(course => {
        if(filter === "all" || course.classList.contains(filter)) {
          course.style.display = "block";
        } else {
          course.style.display = "none";
        }
      });
    });
  });
});


})(jQuery);
/* =========================================
   EVENT FLIP CARDS – SEQUENTIAL SCROLL FLIP
========================================= */

var $cards = $('.flip-card');
if ($cards.length && 'IntersectionObserver' in window) {

  var delayIndex = 0;

  var observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

      if (entry.isIntersecting && !$(entry.target).hasClass('flipped')) {

        (function (card, delay) {
          setTimeout(function () {
            $(card).addClass('flipped');
          }, delay);
        })(entry.target, delayIndex * 800);

        delayIndex++;
        observer.unobserve(entry.target);
      }

    });

  }, {
    threshold: 0.4
  });

  $cards.each(function () {
    observer.observe(this);
  });
}

/* Click behavior */
$cards.each(function () {

  var clickedOnce = false;
  var link = $(this).data('link');

  $(this).on('click', function () {

    if (!clickedOnce) {
      $(this).toggleClass('flipped');
      clickedOnce = true;
    } else if (link) {
      window.location.href = link;
    }

  });

});
