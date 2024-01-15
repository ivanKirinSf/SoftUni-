function blackFlag(input){

    let days = Number(input.shift());
    let plunderPerDay = Number(input.shift());
    let expetedPlunder = Number(input.shift());
    let sum = 0;

    //console.log(expetedPlunder)

    for(let i = 1; i<=days; i++){

        if(i % 3 === 0){

            let additionalPlunder = plunderPerDay*0.5;
            sum += plunderPerDay + additionalPlunder;

        }else if( i % 5 === 0 ){

            let lose = sum*0.3;
            
            sum -= lose;

        }else{

            sum += plunderPerDay;

        }
        
    }

    let percentage = (sum/expetedPlunder)*100;

    if(sum >= expetedPlunder){
        
        console.log(`Ahoy! ${sum} plunder gained.`)

    }else if(sum < expetedPlunder){


        
        console.log(`Collected only ${percentage}% of the plunder.`)

    }

    //console.log(sum)

}

blackFlag(["5",
"40",
"100"])
