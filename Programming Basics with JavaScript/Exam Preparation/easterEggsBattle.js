function easterEggsBattle(input){

    let firstPlayerEggs = Number(input[0]);
    let secondPlayerEggs = Number(input[1]);

    for(let i = 2; i < input.length; i++){

        let command = input[i];

        switch(command){
            case "one": {
                secondPlayerEggs -= 1; 
                if(secondPlayerEggs <= 0) {
                    break;
                }              
                
            } break;
            case "two": {

                firstPlayerEggs -= 1;
                if(firstPlayerEggs <= 0) {
                    break;
                }

            }break;
            case "end": {
                break;
            }
        }

    }

    if(firstPlayerEggs === 0){

        console.log(`Player one is out of eggs. Player two has ${secondPlayerEggs} eggs left.`);       

    }
    
    if(secondPlayerEggs === 0){

        console.log(`Player two is out of eggs. Player one has ${firstPlayerEggs} eggs left.`); 

    }

    if(secondPlayerEggs > 0 && firstPlayerEggs > 0){

        console.log(`Player one has ${firstPlayerEggs} eggs left.`);

        console.log(`Player two has ${secondPlayerEggs} eggs left.`);

    }
}

easterEggsBattle([
    "6",
    "3",
    "one",
    "two",
    "two",  
    "one",
    "one",  
    ])
