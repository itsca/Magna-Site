// Dot Navigation
// ==============
var goToDotSection = function(dot) {
  var dotTargets = jQuery(".dot-link");
  var sectionTargets = jQuery(".dot-nav-section");
  for (var i = 0; i < dotTargets.length; i++) {
    if (dot === dotTargets[i]) {
      jQuery('html, body').animate({
          scrollTop: (jQuery(sectionTargets[i]).offset().top - 10)
      }, 1000);
    }; 
  };
};


jQuery(window).scroll(function () {
  if (jQuery(".dot-nav-section").length > 0) {
    var dotTargets = jQuery(".dot-link"),
        sectionTargets = jQuery(".dot-nav-section"),
        numberOfSections = (sectionTargets.length - 1),
        windowTop = jQuery(window).scrollTop(),
        firstDivTop = jQuery(sectionTargets[0]).offset().top,
        lastDivBottom = jQuery(sectionTargets[numberOfSections]).offset().top + jQuery(sectionTargets[numberOfSections]).height();

    if (windowTop >= firstDivTop - 100 &&
        windowTop <= lastDivBottom - jQuery(sectionTargets[numberOfSections]).height() + 50) {
        jQuery('#dot-nav-wrapper').fadeIn(200);
    }else {
      jQuery('#dot-nav-wrapper').fadeOut(200);
    }
    for (var i = 0; i < sectionTargets.length; i++) {
      if (windowTop >= jQuery(sectionTargets[i]).offset().top - 200) {
        jQuery('.current').removeClass('current');
        jQuery(dotTargets[i]).addClass('current');
      };
    };
  }
});

jQuery('#dot-nav-wrapper li').click(function(event){
  event.preventDefault();
  jQuery('.current').removeClass('current');
  jQuery(this).addClass('current');
  goToDotSection(this);
});


