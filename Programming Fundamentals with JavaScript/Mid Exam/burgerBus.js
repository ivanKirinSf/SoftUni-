function burgerBus(input){

    let cities = Number(input.shift());

    let cityCounter = 0;

    let profit = 0;

    let totalProfit = 0;   



    for(let i = 0; i < input.length; i+= 3){
        let city = input[i];

        cityCounter +=1;

        let income = input[i+1];

        let expenses = input[i+2];

        if(cityCounter % 3 === 0 && cityCounter % 5 !== 0){
            expenses = expenses*1.5
        }

        if(cityCounter % 5 === 0 && cityCounter % 3 !== 0){
            income = income * 0.9
        }

        if(cityCounter % 5 === 0 && cityCounter % 3 === 0){
            income = income * 0.9
        }

        profit = income - expenses;

        totalProfit += profit;

        console.log(`In ${city} Burger Bus earned ${profit.toFixed(2)} leva.`)


        //console.log(profit)
    }

    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`)

    //console.log(cities)

}

burgerBus([
"5",
"Lille",
"2226.00",
"1200.60",
"Rennes",
"6320.60",
"5460.20",
"Reims",
"600.20",
"452.32",
"Bordeaux",
"6925.30",
"2650.40",
"Montpellier",
"680.50",
"290.20"])
