/* eslint-disable prettier/prettier */
//START/SUBMIT Button variables
//variables for counters
// var rightCount = 0;
// var wrongCount = 0;
//Global variable to store user answer
var userAnswer;
var checkedAnswer=[];
//J variable counts through questions and tracks game progress
var j = -1;
//Restart triggered to restart the game when it ends
var restart = false;
//Button
var btn = document.getElementsByClassName("btn");
//Container for dynamic content. Used to change border color.
var qBody = document.getElementsByClassName("qBody");
//Horizontal row content, used to change border color
var qHr = document.getElementById("qHr");
//Dynamic text for questions/container label
var qHead = document.getElementById("qTitle");
//Dynamic text container
var qContent = document.getElementById("qContent");
//Creates a div that is added when questions load.
//Used to update dynamic question text.
var question = document.createElement("div");
//????
var qDisplay;
//Question array
var questions = [
    {
        answered: false,
        textVal: "Do you have a shelter in place plan?",
        a: "No Plan",
        b: "Limited Plan/No Rehers./No Docs.",
        c: "Limited Plan/Limited Rehers./Docs.",
        d: "Comprehensive Plan/Limited Rehers./ Docs.",
        e: "Comprehensive S@H Plan/Comprehensive Rehers./Docs."
    },
    {
        answered: false,
        textVal: "What evacuation plan do you have?",
        a: "No Plan",
        b: "Limited Plan/No Rehers./No Docs.",
        c: "Limited Plan/Limited Rehers./Docs.",
        d: "Comprehensive Plan/Limited Rehers./ Docs.",
        e: "Comprehensive/Practiced Evac. Plan"
    }
    ,{
        answered: false,
        textVal: "What is your level of vehicle preparedness?",
        a: "No Easy Vehicle Access ",
        b: "Way to access vehicle(s) NOT immediate",
        c: "Circuitous vehicle access requiring > 2 hours to acess vehicle. ",
        d: "Direct/immediate access to vehcile with limited long distance reliability ",
        e: "Long Distance Vehicle on Hand."
    // },{
    //     answered: false,
    //     textVal: "What is your level of vehicle preparedness?",
    //     1: "Little to no cash on hand",
    //     2: "$50-$100 cash on hand",
    //     3: "$100-$500 cash on hand",
    //     4: "$500-$5,000 cash on hand ",
    //     5: ">$5,000 cash on hand" 
    // },{
    //     answered: false,
    //     textVal: "What is your level of vehicle preparedness?",
    //     1: "Little to no cash on hand",
    //     2: "$50-$100 cash on hand",
    //     3: "$100-$500 cash on hand",
    //     4: "$500-$5,000 cash on hand ",
    //     5: ">$5,000 cash on hand" 
    }];
// var totalScore = ((parseInt(id)*1.25) + (user.evac*0.75) + (user.vehicle*0.75) + (user.cash*1.25) + (user.food*1.25) +
//                     user.medication + user.sanitizer + (user.toiletries*0.75) + 
//                     user.faceProtection + user.water)/10;
// function validateUser() {
//     var isValid = true;
//     $(".form-control").each(function () {
//         if ($(this).val() === "") {
//             isValid = false;
//         }
//     });
        
//     $(".custom-select").each(function () {
//         if ($(this).val() === "") {
//             isValid = false;
//         }
//     });
//     return isValid;
// }

// if (validateUser()) {
//     var dataUser = {
//     
//         questions: [
//             $("#q1").val(),
//             $("#q2").val(),
//             $("#q3").val(),
//             $("#q4").val(),
//             $("#q5").val(),
//             $("#q6").val(),
//             $("#q7").val(),
//             $("#q8").val(),
//             $("#q9").val(),
//             $("#q10").val()
//         ]
//     };
//     console.log(dataUser);
        
//     $.post("/api/profile", dataUser, function (data) {
        
//         // if a survey has data show matched modal
        
//         $("#pandemic-score").text(data.name);
//         $("#modal-results").modal("toggle");
//     });
// } else {
//     alert("Please fill out survey");
// }
                
            
//Populates question div one answer at a time <input class="with-gap" name="group1" type="radio"  /> name='answer'
function populateQuestion(answer,id){
    return (`<p> <label><input id=${id} class='with-gap' type='radio' name='group1' value=${answer}> <span class='txtAnswer'>${answer}</span></p></label><br>`);
}
//Gets the answer and checks it against the right value
function getAnswer(){
    for (i=1;i<6;i++){
        userAnswer = document.getElementById(i);
        console.log(userAnswer);
        if(userAnswer.checked){
            // if(userAnswer.value === qDisplay){
            checkedAnswer;
            j++;
            loadQuestions();
            break;
           
                
            // }

        }
    }
}

//Populates question container with questions from the array, in order.
function loadQuestions(){

    if (j<3){

        
        $(qBody).toggleClass("qBody",true);
        $(qBody).toggleClass("rBody",false);
        $(qBody).toggleClass("w_tBody",false);
        $(qHr).attr("id","qHr");

        // $(tBlock).css("visibility", "visible");
        qHead.textContent = "Question " + (j+1);
        $(qContent).empty();
        $(qContent).removeAttr("class");

        question.classList.add("txtQuestion");

        qDisplay = selectRandomQuestion(questions);
        qDisplay.answered = true;
        question.textContent = qDisplay.textVal;

        $(qContent).append(question);
        var a = populateQuestion(qDisplay.a,"1");
        $(qContent).append(a);
        var b = populateQuestion(qDisplay.b,"2");
        $(qContent).append(b);
        var c = populateQuestion(qDisplay.c,"3");
        $(qContent).append(c);
        var d = populateQuestion(qDisplay.d,"4");
        $(qContent).append(d);
        var e = populateQuestion(qDisplay.e,"5");
        $(qContent).append(e);

        $(btn).css("visibility", "visible");
        $(btn).text("SUBMIT");

    
    } 
    else {

        $(qBody).attr("class","qBody");
        $(qHr).attr("id","qHr");
        qHead.textContent = "Pandemic Survey";
        $(qContent).empty();
        $(qContent).removeAttr("class");
        $(qContent).html(`<p class='txtQuestion txtCenter'>Pandemic Results</p>
                            <p class='txtAnswer txtCenter'>Answers: ${checkedAnswer}</p>`);

        $(btn).css("visibility", "visible");
        $(btn).text("RESTART");
        
        
        j++;
        
        console.log("Ending J Value: " + j);
        restart = true;
    }

}

//Randomly selects splash page text from right/wrong prompt arrays
//Returns the value at a random index in the length of the array
function selectRandom(arr){
    var selected = Math.floor((Math.random()*arr.length));
    return arr[selected];
}
function selectRandomQuestion(qArr){
    var qSelected = selectRandom(qArr);
    if(qSelected.answered === false){
        return qSelected;
    } 
    else {
        return selectRandomQuestion(qArr);
    }
}
//Restart function resets all variables to necessary values to restart the game
function restartGame(){
    for(i=0;i<questions.length;i++){
        questions[i].answered = false;
    }
    restart = false;
    j = 0;
    loadQuestions();
}

//START/SUBMIT Button functionality

$(".btn").on("click", function (event) {
    event.preventDefault();
    //Avoids collecting answer when starting or restarting game
    if(j>-1 && restart !== true){
        getAnswer();
    }

    //Load first question when starting first game
    if(j===-1){
        j++;
        loadQuestions();
    }

    //Restart functionality resets all variables and restarts game
    if(restart === true){
        restartGame();
    }
});
    



// var user = {
//     name: "",
//     pass: "",
//     shelter: 5,
//     evac: 5,
//     vehicle: 5,
//     cash: 5,
//     food: 5,
//     medication: 5,
//     sanitizer: 5,
//     toiletries: 5,
//     faceProtection: 5,
//     water: 5
// }

// var totalScore = ((user.shelter*1.25) + (user.evac*0.75) + (user.vehicle*0.75) + (user.cash*1.25) + (user.food*1.25) +
//                 user.medication + user.sanitizer + (user.toiletries*0.75) + 
//                 user.faceProtection + user.water)/10;

// console.log(totalScore);