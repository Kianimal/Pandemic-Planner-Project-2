// Get references to page elements
// var $icon = $("#eventopponet").attr("onchange");
var $usernameImage = $("#username_image");
// eslint-disable-next-line camelcase
var image_url = data.image_url;

// The API object contains methods for each kind of request we'll make
var API = {
  saveImage: function(user) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/users",
      data: JSON.stringify(user)
    });
  },
  getusers: function() {
    return $.ajax({
      url: "api/users",
      type: "GET"
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
  API.getusers().then(function() {
    $usernameImage.attr("src", image_url);
  });
};

// handleFormSubmit is called whenever we submit a new user
// Save the new user to the db and refresh the list
// eslint-disable-next-line no-unused-vars
var handleFormSubmit = function(obj) {
  //   event.preventDefault();
  var icon = obj.options[obj.selectedIndex].getAttribute("data-icon");

  var image = {
    // eslint-disable-next-line camelcase
    username: $usernameImage.text(),
    // eslint-disable-next-line camelcase
    image_url: icon
  };

  console.log(image);

  API.saveImage(image).then(function() {
    refreshusers();
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
