// Get references to page elements
var $userImage = $("#user_image");
var $usernameImage = $("#username_image")

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
  getImage: function(user) {
    return $.ajax({
      url: "api/users",
      type: "GET",
      data: JSON.stringify(user)
    });
  }
  //   deleteuser: function(id) {
  //     return $.ajax({
  //       url: "api/users/" + id,
  //       type: "DELETE"
  //     });
  //   }
};

// // refreshusers gets new images from the db and repopulates the list
// eslint-disable-next-line no-unused-vars
var refreshusers = function() {
  ImageAPI.getImage().then(function() {
    $userImage.attr("src", User.image_url);
  });
};

// handleFormSubmit is called whenever we submit a new user
// Save the new user to the db and refresh the list
// eslint-disable-next-line no-unused-vars
var handleImageSubmit = function(obj) {
  //   event.preventDefault();
  var icon = obj.options[obj.selectedIndex].getAttribute("data-icon");

  var image = {
    // eslint-disable-next-line camelcase
    // username: $usernameImage.text(),
    // eslint-disable-next-line camelcase
    image_url: icon
  };

  console.log(image);

  ImageAPI.saveImage(image).then(function() {
    
  });
};

// Add event listeners to the submit and delete buttons

// eslint-disable-next-line no-unused-vars
function enableWager(obj) {
  var icon = obj.options[obj.selectedIndex].getAttribute("data-icon");
  alert(icon);
}
// eslint-disable-next-line no-unused-vars
// function LoadImages() {
//   searchPic = new Image(100, 100);
//   searchPic.src = "";
//   // This is correct and the path is correct
// }
