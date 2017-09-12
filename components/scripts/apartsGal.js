// Apartments Gallery
// ==============

var galleryLocations = [["images/aparments/A/1.jpg",
						"images/aparments/A/2.jpg",
						"images/aparments/A/3.jpg",
						"images/aparments/A/4.jpg"],
						["images/aparments/B/1.jpg",
						"images/aparments/B/2.jpg",
						"images/aparments/B/3.jpg"],
						["images/aparments/C/1.jpg",
						"images/aparments/C/2.jpg",
						"images/aparments/C/3.jpg",
						"images/aparments/C/4.jpg"],
						["images/aparments/C1/1.jpg",
						"images/aparments/C1/2.jpg",
						"images/aparments/C1/3.jpg",
						"images/aparments/C1/4.jpg"],
						["images/aparments/C2/1.jpg",
						"images/aparments/C2/2.jpg",
						"images/aparments/C2/3.jpg",
						"images/aparments/C2/4.jpg",
						"images/aparments/C2/5.jpg"]],
	currApartmentUrls,
	hiddenGal = jQuery(".hidden-gal"),
	currGalIndex;		
	showGallery = function(element) {
		currGalIndex = 0;
		var apartmentTypes = jQuery(".aparment-type"),
			currApartment  = element,
		    firstImageDiv = hiddenGal.find(".current");
		hiddenGal.fadeIn();
		for (var i = 0; i < apartmentTypes.length; i++) {
		   	if (currApartment === apartmentTypes[i]) {
		   		currApartmentUrls = galleryLocations[i];
		   	}
		}
		console.log(firstImageDiv);
		jQuery(firstImageDiv).css('background-image', 'url(' + currApartmentUrls[currGalIndex] + ')');						
	},
	hideGallery = function() {
		hiddenGal.fadeOut();						
	},
	changeGalIamge = function(nextIndex) {
		var nextGalIndex = currGalIndex + nextIndex,
			currDiv = hiddenGal.find(".current"),
			nextDiv = hiddenGal.find(".next");
			currGalIndex = nextGalIndex;
			console.log(nextGalIndex);
			if (nextGalIndex < 0) {
				nextGalIndex = currApartmentUrls.length - 1;
				currGalIndex = nextGalIndex;
				console.log(nextGalIndex);
			}else if (nextGalIndex > currApartmentUrls.length - 1) {
				nextGalIndex = 0;
				currGalIndex = nextGalIndex;
				console.log(nextGalIndex);
			}
			jQuery(nextDiv).css('background-image', 'url(' + currApartmentUrls[nextGalIndex] + ')');
			jQuery(currDiv).removeClass("current").addClass("next");
			jQuery(nextDiv).removeClass("next").addClass("current");
	}


jQuery('.aparment-type').click(function(event){
  event.preventDefault();
  showGallery(this);
});

jQuery('.slider-left').click(function(){
  changeGalIamge(-1);
});

jQuery('.slider-right').click(function(){
  changeGalIamge(1);
});

jQuery('.gallery-closer').click(function(){
  hideGallery();
});

/*
if (jQuery(".aparment-type").length > 0) {

}*/