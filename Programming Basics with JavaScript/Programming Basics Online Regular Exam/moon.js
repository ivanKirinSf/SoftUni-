function moon(input){

    let speed = Number(input[0]);
    let fuelPer100 = Number(input[1]);
    let distance = 384400;
    let travelTime = 0;
    let totalTime = 0;
    let totalFuel = 0;
    
    travelTime = distance/speed;

    totalTime = Math.ceil(travelTime*2+3);

    totalFuel = ((distance*2)/100)*fuelPer100;

    console.log(totalTime)
    console.log(totalFuel)

}

moon([
    "5000", 
    "7"
])
