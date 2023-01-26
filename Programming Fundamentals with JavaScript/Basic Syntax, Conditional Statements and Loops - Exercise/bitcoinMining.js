function bitcoin(input){

    let dailyMinedGold = 0;
    let days = 0;
    let totalMinedGold = 0;
    let coin = 0;
    let buyDay = 0;
    let bitcoins = 0;
    let moneyLeft = 0;
    
    for(let i = 0; i < input.length; i++){
        dailyMinedGold = input[i];
        days++;

        if(days % 3 === 0){
            dailyMinedGold *= 0.7;
        }

        totalMinedGold += dailyMinedGold;

        if(totalMinedGold >= 176.998){
            coin++;
        } 

        if (coin === 1){
            buyDay = days
        }
    }

    bitcoins = parseInt(totalMinedGold / 176.998);


    console.log(`Bought bitcoins: ${bitcoins}`)

    if( bitcoins >= 1){
    console.log(`Day of the first purchased bitcoin: ${buyDay}`)
    }

    moneyLeft = (totalMinedGold*67.51)-bitcoins*11949.16;

    console.log(`Left money: ${moneyLeft.toFixed(2)} lv.`)

}
