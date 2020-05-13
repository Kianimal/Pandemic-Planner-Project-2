$("").on("click", function(event) {
  event.preventDefault();
  var id = $(this).attr("data-id");
  var newImage = {
    devoured: true
  };
  $.ajax({
    url: "/api/images/" + id,
    method: "PUT",
    data: newImage
  }).then(function() {
    location.reload();
  });

  var newImage = {
    // eslint-disable-next-line camelcase
    Image_Url: $("")
      .val()
      .trim(),
    ImageId: id
  };
  $.ajax("/api/images/", {
    type: "POST",
    data: newImage
  }).then(function() {
    console.log("image:", newImage);
    location.reload();
  });
});
