console.log("Assessment.js loaded");

// Get references to page elements
var $shelter = $("#q1");
var $evac = $("#q2");
var $vehicle = $("#q3");
var $cash = $("#q4");
var $food = $("#q5");
var $medication = $("#q6");
var $sanitizer = $("#q7");
var $toiletries = $("#q8");
var $masks = $("#q9");
var $water = $("#q10");

var $answerButton = $("#submitAnswers");

var API = {
  saveAssessment: function(answers) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/users",
      data: JSON.stringify(answers)
    });
  }
};

var handleFormSubmit = function(event) {
  event.preventDefault();
  console.log("CLICKED");

  var totalScore =
    (parseInt($shelter.children("option:selected").val()) * 1.25 +
      parseInt($evac.children("option:selected").val()) * 0.75 +
      parseInt($vehicle.children("option:selected").val()) * 0.75 +
      parseInt($cash.children("option:selected").val()) * 1.25 +
      parseInt($food.children("option:selected").val()) * 1.25 +
      parseInt($medication.children("option:selected").val()) +
      parseInt($sanitizer.children("option:selected").val()) +
      parseInt($toiletries.children("option:selected").val()) * 0.75 +
      parseInt($masks.children("option:selected").val()) +
      parseInt($water.children("option:selected").val())) /
    10;

  var answers = {
    shelter: $shelter.children("option:selected").val(),
    evac: $evac.children("option:selected").val(),
    vehicle: $vehicle.children("option:selected").val(),
    cash: $cash.children("option:selected").val(),
    food: $food.children("option:selected").val(),
    medication: $medication.children("option:selected").val(),
    sanitizer: $sanitizer.children("option:selected").val(),
    toiletries: $toiletries.children("option:selected").val(),
    masks: $masks.children("option:selected").val(),
    water: $water.children("option:selected").val(),
    score: totalScore
  };

  console.log(answers);
  console.log(totalScore);

  API.saveAssessment(answers);
};

$answerButton.on("click", handleFormSubmit);

// console.log(totalScore);
