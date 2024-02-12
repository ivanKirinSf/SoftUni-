function blackFlag(input){

    let days = Number(input.shift());

    let dailyPlunder = Number(input.shift());

    let expectedPlunder = Number(input.shift());

    let totalPlunder = 0;

    for(let i = 1 ; i <= days; i++){
        let day = i;

        totalPlunder += dailyPlunder;

        if(day % 3 === 0){

            totalPlunder += dailyPlunder*0.5;

        }

        if(day % 5 === 0){
            totalPlunder = totalPlunder*0.7
        }
    
    }
    
    if(expectedPlunder <= totalPlunder){

        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`)

    }else {

        let value = totalPlunder/expectedPlunder*100

        console.log(`Collected only ${value.toFixed(2)}% of the plunder.`)

    }

    //console.log(totalPlunder)

}

blackFlag([
"10",
"20",
"380"
])
