$(document).ready(function() {
  Rezart.init();
});

var Rezart = (function() {
  return {
    init: function() {
      this.owl();
      this.sandwitch();
    },

    owl: function() {
    },

    sandwitch: function() {
      $('.sandwitch').click(function() {
        $(this).toggleClass('active');

        $('.nav').slideToggle('fast');
      });
    },

    smooth: function() {
      $('a[href=#]').bind('click', function(e){
      	e.preventDefault();

      	$('html, body').stop().animate({
      		scrollTop: $( $(this).attr('href')).offset().top
      	}, 500);
      });
    }
  }
})();
