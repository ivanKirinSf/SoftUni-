function counterStrike(input){

    let initialEnergy = Number(input.shift());

    let distanceArr = input;

    let battlesWon = 0;

    let counter = 0;

    for(let i = 0 ; i < distanceArr.length; i++){
        let distance = distanceArr[i];

        if(distance === "End of battle"){

            console.log(`Won battles: ${battlesWon}. Energy left: ${initialEnergy}`);

            break;

        }else if( Number(distance)) {

            if(initialEnergy > 0){

                initialEnergy = initialEnergy - Number(distance);

            }else{
                initialEnergy = 0;
                console.log(`Not enough energy! Game ends with ${battlesWon} won battles and ${initialEnergy} energy`)
                break;
            }           

            if(initialEnergy >= 0){

                battlesWon += 1;
                counter += 1
                if(counter === 3){

                    initialEnergy += battlesWon

                    counter = 0;

                }

            }
            
              
                           
              
        } 
               
        
    }    

    //console.log(battlesWon)

}

counterStrike(["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"])
