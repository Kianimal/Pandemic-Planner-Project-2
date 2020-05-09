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