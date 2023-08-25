function treasureHunt(input){

    let state = input.shift().split("|");
    let command = input.shift();
    while(command !== "Yohoho!"){
        let tokens = command.split(" ");
        let action = tokens.shift();
        switch(action){
            case "Loot":
                for(let el of tokens){
                    if(state.includes(el)){
                        continue;
                    }
                    state.unshift(el);
                }
                break;
                case"Drop":
                let index = Number(tokens[0]);
                if(index < 0 || index > state.length-1){
                    continue;
                }
                let el = state.splice(index,1);
                state.push(el); 
        }

        command = input.shift();
    }

    console.log(state.join(" "))

}

treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"])
