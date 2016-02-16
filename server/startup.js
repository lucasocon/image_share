Meteor.startup(function() {
  if (Images.find().count() == 0) {
    for(var i = 1;i<5;i++){
      Images.insert(
        {
          img_src: "img_"+i+".jpg",
          img_alt: "image numer "+i
        }
      );
    } // end of for insert images
  }// end of if have no images
})
