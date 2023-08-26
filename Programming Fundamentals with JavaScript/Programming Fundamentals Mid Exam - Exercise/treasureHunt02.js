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
                        
                    };break;
                    case "Drop":
                        let index = Number(list);
                        if(index >= 0 && index < chest.length){
                        let item = chest[index];
                        chest.splice(index, 1);
                        chest.push(item);
                        }
                        

                        //console.log(chest)
                        


                    //console.log(items)
            }       
            
            //console.log(command);

            token = commands.shift()

            
            
        }
    }

    console.log(chest)
    


}

treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
//"Loot Wood Gold Coins",
//"Loot Silver Pistol",
"Drop 3",
//"Steal 3",
"Yohoho!"])
