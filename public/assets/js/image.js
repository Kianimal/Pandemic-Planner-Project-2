// Get references to page elements
// var $image = $(".selected");
var $submitBtn = $("#image_submit");

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

// // refreshusers gets new users from the db and repopulates the list
// var refreshImage = function() {
//   API.getImage().then(function(data) {
//     var $imageUrl = data.map(function(image) {
//       var $a = $("<a>").attr("href", "/user/" + user.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": user.id
//         })
//         .append($a);

//       return $li;
//     });

//     $userList.empty();
//     $userList.append($imageUrl);
//   });
// };

// handleFormSubmit is called whenever we submit a new user
// Save the new user to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var image = {
    // eslint-disable-next-line camelcase
    image_url: icon
  };

  console.log(image);

  if (!user.image) {
    alert("You must select an image!");
    return;
  }

  API.saveImage(user).then(function() {
    refreshImage();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);

