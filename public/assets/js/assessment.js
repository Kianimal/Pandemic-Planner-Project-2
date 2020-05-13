/* eslint-disable prettier/prettier */
//START/SUBMIT Button variables
//variables for counters
// var rightCount = 0;
// var wrongCount = 0;

var totalScore = ((user.shelter*1.25) + (user.evac*0.75) + (user.vehicle*0.75) + (user.cash*1.25) + (user.food*1.25) +
                user.medication + user.sanitizer + (user.toiletries*0.75) + 
                user.faceProtection + user.water)/10;

console.log(totalScore);