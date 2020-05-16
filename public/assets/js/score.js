// eslint-disable-next-line no-unused-vars
$(document).ready(function() {
  var results = [
    {
      answer:
        "You are a full-on Zombie. Might as well dust off last year's Zombie Halloween costume and put it on now."
    },
    {
      answer:
        "This is Stage 3 - Transformation. Zombies awaken from their comas in a catatonic state. They are unresponsive to most stimuli as they shuffle about, trying to locate their prey."
    },
    {
      answer:
        "This is stage 2 Coma--but, good news -- Zombie comas are considerably more brief than vampiric comas."
    },
    {
      answer:
        "This is stage 1 of becoming a Zombie -- Symptoms of zombie infection appear quickly: within one or two hours"
    },
    {
      answer: "You are well prepared and you will remain human. Good job!"
    }
  ];

  var scorenumber = $("#scorenumber");
  function getScore() {
    $("#score").empty();
    if (scorenumber.text() === "0" || scorenumber.text() === "1") {
      $("#score").append("<p>" + results[0].answer + "<p>");
    }
    if (scorenumber.text() === "1" || scorenumber.text() === "2") {
      $("#score").append("<p>" + results[1].answer + "<p>");
    }
    if (scorenumber.text() === "2" || scorenumber.text() === "3") {
      $("#score").append("<p>" + results[2].answer + "<p>");
    }
    if (scorenumber.text() === "3" || scorenumber.text() === "4") {
      $("#score").append("<p>" + results[3].answer + "<p>");
    }
    if (scorenumber.text() === "4" || scorenumber.text() === "5") {
      $("#score").append("<p>" + results[4].answer + "<p>");
    }
  }

  getScore();

  var score = $("#scorenumber").text();
  var int = parseInt(score);
  var percent = (int / 5) * 100;
  $(".determinate").width(percent + "%");
  $("#percent").append(
    "<h5 class='col s2 right align'>" + percent + "%" + "</h5>"
  );
});
