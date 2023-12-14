function familyTrip(input){

    let budget = Number(input[0]);
    let nights = Number(input[1]);
    let pricePerNight = Number(input[2]);
    let spendingsPercents = Number(input[3]);

    let nightsPrice = 0;
    let spendings = 0;
    let moneyLeft = 0;

    if(nights > 7){

        nightsPrice = (nights*pricePerNight)*0.95;


    }else {

        nightsPrice = nights*pricePerNight;

    }

    let index = 100/spendingsPercents;
    //console.log(index)

    spendings = budget/index;
    //console.log(spendings)

    let total = nightsPrice + spendings;
    //console.log(total);
    moneyLeft = Math.abs(budget - total);

    if(total <= budget){
        console.log(`Ivanovi will be left with ${moneyLeft.toFixed(2)} leva after vacation.`)
    }else {
        console.log(`${moneyLeft.toFixed(2)} leva needed.`)
    } 






}

familyTrip([
"800.50",
"8",
"100",
"2"
])
