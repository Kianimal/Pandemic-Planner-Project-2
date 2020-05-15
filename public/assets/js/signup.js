// Get references to page elements
var $username = $("#user_name");
var $email = $("#email");
var $password = $("#password");
var $submitBtn = $("#submit");

// The API object contains methods for each kind of request we'll make
var API = {
  saveUser: function(user) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/users",
      data: JSON.stringify(user)
    });
  }
  //   getusers: function() {
  //     return $.ajax({
  //       url: "api/users",
  //       type: "GET"
  //     });
  //   },
  //   deleteuser: function(id) {
  //     return $.ajax({
  //       url: "api/users/" + id,
  //       type: "DELETE"
  //     });
  //   }
};

// // refreshusers gets new users from the db and repopulates the list
// var refreshusers = function() {
//   API.getusers().then(function(data) {
//     var $users = data.map(function(user) {
//       var $a = $("<a>")
//         .text(user.text)
//         .attr("href", "/user/" + user.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": user.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $userList.empty();
//     $userList.append($users);
//   });
// };

// handleFormSubmit is called whenever we submit a new user
// Save the new user to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();
  console.log("Handling Form");

  var user = {
    username: $username.val().trim(),
    email: $email.val().trim(),
    userpass: $password.val().trim()
  };

  console.log(user);

  if (!(user.username && user.email && user.userpass)) {
    alert("You must enter a username, email and password!");
    return;
  }

  API.saveUser(user).then(function() {
    refreshUsers();
  });

  $username.val("");
  $email.val("");
  $password.val("");
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
