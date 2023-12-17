function goldMine(input){

    let locations = input[0];
    let totalGold = 0;
    
    

    for(let i = 1; i < input.length; i++){

        let averageExpected = Number(input[i]);

        let time = Number(input[i+1]);

        for(let k = i+2; k < i+2+time; k++){
            let temp = Number(input[k]);
            totalGold += temp;          

        }

        let averageGold = totalGold/time;
            let diffrence = Math.abs(averageExpected - averageGold)
            
            if(averageExpected <= averageGold){

                console.log(`Good job! Average gold per day: ${averageGold.toFixed(2)}.`)

            } else {

                console.log(`You need ${diffrence.toFixed(2)} gold.`)

            }

            totalGold = 0

        i += 1 + time

        //console.log(time)

    }

}

goldMine([
"1",
"5",
"3",
"10",
"1",
"3"
])
