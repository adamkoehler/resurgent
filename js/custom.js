(function($) {
    "use strict";
	
    /* Preloader */
    $(window).load(function() {
        $('.loader').fadeOut();
        $('.page-loader').delay(350).fadeOut('slow');
    });

	/* STICKY NAVIGATION */
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
            $('.header').addClass("sticky");
        } else {
            $('.header').removeClass("sticky");
        }
    });
	
    /* Go up */
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 700) {
            jQuery(".go-up").css("bottom", "10px");
        } else {
            jQuery(".go-up").css("bottom", "-60px");
        }
    });
    jQuery(".go-up").click(function() {
        jQuery("html,body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
    
	/* --- WOW Animation --- */
	var wow = new WOW({
			mobile: false
		});
	wow.init();
    
	/* --- Scroll Animation ---*/
    $('.section_scroll').bind('click', function(e) {
           var anchor = $(this);
          if($(window).outerWidth() < 768){
              $('html, body').stop().animate({
                  scrollTop: $(anchor.attr('href')).offset().top  - 62
              }, 1200);
          }
          else{
              $('html, body').stop().animate({
                  scrollTop: $(anchor.attr('href')).offset().top - 80
              }, 1200);
          }
           e.preventDefault();
       });
    
    
    /**/
    $("div[id^='learn']").each(function(){
  
      var currentModal = $(this);

      //click next
      currentModal.find('.btn-next').click(function(){
        currentModal.modal('hide');
        currentModal.closest("div[id^='learn']").nextAll("div[id^='learn']").first().modal('show'); 
      });

      //click prev
      currentModal.find('.btn-prev').click(function(){
        currentModal.modal('hide');
        currentModal.closest("div[id^='learn']").prevAll("div[id^='learn']").first().modal('show'); 
      });

    });
    $("div[id^='team']").each(function(){
  
      var currentModal = $(this);

      //click next
      currentModal.find('.btn-next').click(function(){
        currentModal.modal('hide');
        currentModal.closest("div[id^='team']").nextAll("div[id^='team']").first().modal('show'); 
      });

      //click prev
      currentModal.find('.btn-prev').click(function(){
        currentModal.modal('hide');
        currentModal.closest("div[id^='team']").prevAll("div[id^='team']").first().modal('show'); 
      });

    });

    
})(jQuery);
