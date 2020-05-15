// Get references to page elements
// var $icon = $("#eventopponet").attr("onchange");
var $usernameImage = $("#username_image");

// The API object contains methods for each kind of request we'll make
var API = {
  saveImage: function(user) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/user",
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
var refreshusers = function() {
  API.getusers().then(function(data) {
    var $users = data.map(function(user) {
      var $a = $("<a>")
        .text(user.text)
        .attr("href", "/user/" + user.id);
    });
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
    username: $usernameImage.val(),
    // eslint-disable-next-line camelcase
    image_url: icon
  };

  console.log(image);

  API.saveImage(user).then(function() {
    refreshImage();
  });
};

// Add event listeners to the submit and delete buttons

// eslint-disable-next-line no-unused-vars
function enableWager(obj) {
  var icon = obj.options[obj.selectedIndex].getAttribute("data-icon");
  alert(icon);
}
