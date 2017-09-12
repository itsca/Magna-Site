global.jQuery = require('jquery');
var boostrap = require('bootstrap');


var revealElementsOnScroll = function() {
	var hiddenElements = jQuery('.scroll-hidden')
    for (var i = 0; i < hiddenElements.length; i++) {
    	if (jQuery(window).scrollTop() <= (jQuery(hiddenElements[i]).offset().top + 50) 
    		&& jQuery(window).scrollTop() + jQuery(window).height() >=  (jQuery(hiddenElements[i]).offset().top)) {
    		jQuery(hiddenElements[i]).addClass('showing');
    	}else {
    		jQuery(hiddenElements[i]).removeClass('showing');
    	};
    }
},
checkForFromUrl = function() {
  console.log("ckeck URL function");
  if (window.location.href.indexOf("#FormSubmittedCorrectly:)") > -1) {
      jQuery('html, body').animate({
          scrollTop: (jQuery("#form-submitted-correctly").offset().top - 100)
      }, 1000);
      jQuery("#form-submitted-correctly").addClass('open');
  }
};
checkForFromUrl();
revealElementsOnScroll();

/*Button-actions*/
jQuery('#submitted-correctly-closer').click(function(event) {
    jQuery('#form-submitted-correctly').removeClass('open');
});

/*Scroll Functions*/
jQuery(window).scroll(function () {
    revealElementsOnScroll();
});