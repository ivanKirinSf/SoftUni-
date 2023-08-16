function treasureHunt(input){

    let arr = input.shift().split("|");
    let arrStolen = [];
    let gameOver = false;

    //console.log(arr)

    for(let i = 0; i < input.length; i++){
        let temp = input[i].split(" ");
        let command = temp.shift();

        switch(command){
            case "Loot":
                let items = temp;
                index = 0;
                while(index < items.length){
                    let tempItem = items[index];
                    let indexLootItem = arr.indexOf(tempItem);
                    if(indexLootItem === -1){
                        arr.unshift(tempItem) 
                    }     
                  index++
                };
                break;
                case "Drop":
                    let indexDrop = Number(temp.shift());
                    if(indexDrop >= 0 && indexDrop < arr.length){
                        let itemToDrop = arr[indexDrop];
                        //console.log(itemToDrop)
                        arr.splice(indexDrop, 1);
                        arr.push(itemToDrop)
                    };
                    break;
                    case "Steal":
                        let count = Number(temp.shift());
                        let indexSteal = arr.length - count;
                        if(indexSteal <= 0){
                            arrStolen = arr.splice(0, arr.length)
                        } else {
                            arrStolen = arr.splice(indexSteal, count);
                        }
                        
                        console.log(arrStolen.join(", "));
                        break; 
                        case "Yohoho!": 
                        gameOver = true;                        
                        break;        
                                                             
                //console.log(items)
        }

        if(gameOver === true){
            break;
        }
        //console.log(command)
    }
    //console.log(arr)

    if(arr.length > 0){

        let sum = 0;
    let averageTresureGain = 0;

    for(let j = 0; j<arr.length; j++){
        let tempJ = arr[j];
        
        sum += tempJ.length;    
    }

    averageTresureGain = sum / arr.length;
    console.log(`Average treasure gain: ${averageTresureGain.toFixed(2)} pirate credits.`);

    } else {
        console.log("Failed treasure hunt.")
    }
    
    
}
