/* eslint-disable prettier/prettier */
//Question array
var questions = [
    {
        answered: false,
        textVal: "Do you have a shelter in place plan?",
        1: "No Plan",
        2: "Limited Plan/No Rehers./No Docs.",
        3: "Limited Plan/Limited Rehers./Docs.",
        4: "Comprehensive Plan/Limited Rehers./ Docs.",
        5: "Comprehensive S@H Plan/Comprehensive Rehers./Docs."
    },
    {
        answered: false,
        textVal: "What evacuation plan do you have?",
        1: "No Plan",
        2: "Limited Plan/No Rehers./No Docs.",
        3: "Limited Plan/Limited Rehers./Docs.",
        4: "Comprehensive Plan/Limited Rehers./ Docs.",
        5: "Comprehensive/Practiced Evac. Plan"
    },{
        answered: false,
        textVal: "What is your level of vehicle preparedness?",
        1: "No Easy Vehicle Access ",
        2: "Way to access vehicle(s) NOT immediate",
        3: "Circuitous vehicle access requiring > 2 hours to acess vehicle. ",
        4: "Direct/immediate access to vehcile with limited long distance reliability ",
        5: "Long Distance Vehicle on Hand."
    },{
        answered: false,
        textVal: "What is your level of vehicle preparedness?",
        1: "Little to no cash on hand",
        2: "$50-$100 cash on hand",
        3: "$100-$500 cash on hand",
        4: "$500-$5,000 cash on hand ",
        5: ">$5,000 cash on hand" 
    },{
        answered: false,
        textVal: "What is your level of vehicle preparedness?",
        1: "Little to no cash on hand",
        2: "$50-$100 cash on hand",
        3: "$100-$500 cash on hand",
        4: "$500-$5,000 cash on hand ",
        5: ">$5,000 cash on hand" 
    }];

    
    //Populates question div one answer at a time
function populateQuestion(answer,id){
    return ("<input id='" + id + "' class='btnAnswer' type='radio' name='answer' value='" + answer + 
            "'> <span class='txtAnswer'>" + answer + "</span><br>");
};

//START/SUBMIT Button functionality

$(".btn").click(function(){

    //Avoids collecting answer when starting or restarting game
    if(j>-1 && restart != true){
        getAnswer();
    };

    //Load first question when starting first game
    if(j==-1){
        j++;
        loadQuestions();
    };

    //Restart functionality resets all variables and restarts game
    if(restart == true){
        restartGame();
    };
});
    



var user = {
    name: "",
    pass: "",
    shelter: 5,
    evac: 5,
    vehicle: 5,
    cash: 5,
    food: 5,
    medication: 5,
    sanitizer: 5,
    toiletries: 5,
    faceProtection: 5,
    water: 5
}

var totalScore = ((user.shelter*1.25) + (user.evac*0.75) + (user.vehicle*0.75) + (user.cash*1.25) + (user.food*1.25) +
                user.medication + user.sanitizer + (user.toiletries*0.75) + 
                user.faceProtection + user.water)/10;

console.log(totalScore);