function treasureHunt(input){

    let chest = input.shift().split("|");
    let commands = input;

    for(let el of commands){
        let token = commands.shift()
        while ( token !== "Yohoho!"){
            let list = token.split(" ");  
            let command = list.shift();
            switch(command){
                case "Loot":
                    let items = list;
                    for(let el of items){
                        if(chest.includes(el)){
                            continue;
                        } else {
                            chest.unshift(el);
                        }                        
                    };
                    break;
                    case "Drop":
                        let index = Number(list);
                        if(index >= 0 && index < chest.length){
                        let item = chest[index];
                        chest.splice(index, 1);
                        chest.push(item);
                        };
                        break;
                        case "Steal":
                            let count = Number(list.shift());
                            let start = chest.length - count;
                            let lastItems = [];
                            if(start >= 0){
                                lastItems = chest.splice(start, count); 
                            }else {
                                lastItems = chest.splice(0, count); 
                            }
                            console.log(lastItems.join(", ")); 
                            break;
                            case "Yohoho!":
                                break;                     

                                      

                        

            }      
                     
            token = commands.shift();        
            
        }
    }

    let sumItems = 0 ;
    let avg = 0;

    for(let i = 0; i < chest.length; i++){
        let temp = chest[i];
        sumItems += temp.length;
    }

    if(chest.length > 0){
        avg = sumItems / chest.length;
        console.log(`Average treasure gain: ${avg.toFixed(2)} pirate credits.`)
    }else {
        console.log("Failed treasure hunt.")
    }

    //console.log(sumItems)  

}

treasureHunt(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])
