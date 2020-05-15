// Get references to page elements
var $userImage = $("#user_image");
var $usernameImage = $("#username_image");
var $profileImage = $("#profile_image");

// The API object contains methods for each kind of request we'll make
var ImageAPI = {
  saveImage: function(user) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "PUT",
      url: "api/users/" + $usernameImage.text(),
      data: JSON.stringify(user)
    });
  },
  getImage: function() {
    return $.ajax({
      url: "api/users",
      type: "GET"
    });
  }
};
//post image post img to db on load
var handlePlaceholderImage = function() {
  var image = "./assets/images/avataaars.png";
  var placeholder = {
    // eslint-disable-next-line camelcase
    image_url: image
  };
  ImageAPI.saveImage(placeholder);
};
handlePlaceholderImage();
// // refreshusers gets new images from the db and repopulates the list
// eslint-disable-next-line no-unused-vars
var refreshusers = function() {
  ImageAPI.getImage().then(function(userImage) {
    console.log(userImage);
    $userImage.attr("src", userImage[0].image_url);
    $profileImage.attr("src", userImage[0].image_url);
  });
};
refreshusers();
// handleFormSubmit is called whenever we submit a new user
// Save the new user to the db and refresh the list
// eslint-disable-next-line no-unused-vars
var handleImageSubmit = function(obj) {
  //   event.preventDefault();
  var icon = obj.options[obj.selectedIndex].getAttribute("data-icon");
  var image = {
    // eslint-disable-next-line camelcase
    image_url: icon
  };

  console.log(image);

  ImageAPI.saveImage(image).then(function() {
    refreshusers();
  });
};

// Add event listeners to the submit and delete buttons

// eslint-disable-next-line no-unused-vars
function enableWager(obj) {
  var icon = obj.options[obj.selectedIndex].getAttribute("data-icon");
  alert(icon);
}
