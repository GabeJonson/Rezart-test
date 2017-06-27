$(document).ready(function() {
  Rezart.init();
});

var Rezart = (function() {
  return {
    init: function() {
      this.owl();
      this.lightbox();
      this.sandwitch();
      this.tabs();
      this.smooth();
      this.scroll();
      this.headerNav();
      this.scrollProgress();
    },

    owl: function() {
      $('.owl-carousel').owlCarousel({
        items: 1,
        dots: !0,
        loop: !0
      })
    },

    lightbox: function() {
      $("[data-fancybox]").fancybox({
        selector : '[data-fancybox="images"]',
    		loop: !0,
        thumbs: !0,
        hash: !0
    	});
    },

    sandwitch: function() {
      $('.sandwitch').click(function() {
        $(this).toggleClass('active');

        $('.nav').slideToggle('fast');
      });
    },

    tabs: function() {
      $('#tab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
      })
    },

    smooth: function() {
      $('a.smooth').bind('click', function(e){
      	e.preventDefault();

      	$('html, body').stop().animate({
      		scrollTop: $( $(this).attr('href')).offset().top
      	}, 500);
      });
    },

    scroll: function() {
      $(window).on('scroll', function() {
        var sTop = $(this).scrollTop();

        if(sTop > 0) $('header').addClass('squash');
        else $('header').removeClass('squash');
      });
    },

    headerNav: function() {
      $('.smooth').each(function(key, item) {
        $('.move-on-hover').css({
          width: $(item).parent().context.offsetWidth + 'px',
          opacity: 0,
          left: $(item).parent().context.offsetLeft + 'px'
        });

        $(item).on('mouseenter', function() {
          $('.move-on-hover').css({
            width: $(item).parent().context.offsetWidth + 'px',
            opacity: 1,
            left: $(item).parent().context.offsetLeft + 'px'
          });
        });

        $(item).on('mouseleave', function() {
          $('.move-on-hover').css({
            opacity: 0,
            left: $(item).parent().context.offsetLeft + 'px'
          });
        })
      })
    },

    scrollProgress: function() {
      var scroll = new Scroll('.progress-line');
      scroll.init();
    }
  }
})();
