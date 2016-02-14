if (Meteor.isClient) {
  var img_data = [{
    img_src: "facebook.jpg",
    img_alt: "Hey Facebook!"
  },
  {
    img_src: "twitter.jpg",
    img_alt: "Hey Twitter!"
  },
  {
    img_src: "instagram.jpg",
    img_alt: "Hey Instagram!"
  }];

  Template.images.helpers({images: img_data});

  Template.images.events({
    'click .js-image': function(event){
      $(event.target).css("width", "50px");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
