function treasureHunt(input){

    let chest = input.shift().split("|");

    let commands = input;

    let sum = 0;

    for(let i = 0; i<commands.length; i++){
        let temp = commands[i].split(" ");
        let command = temp.shift();


        if(command === "Loot"){
            

            while(temp.length !== 0){

                let item = temp.shift();

                if(chest.indexOf(item) === -1){

                    chest.unshift(item)
                }
                
            }
        }else if(command === "Drop"){

            let index = Number(temp.shift());

            if(index < chest.length && index >= 0){

                let item = chest[index];

                chest.splice(index, 1);
                chest.push(item);

            }

            //console.log(index)

        }else if(command === "Steal"){

            let count = Number(temp.shift());

            if(count > chest.length){
                count = chest.length
            }

            let lastItems = chest.slice(chest.length-count);

            chest.splice((chest.length - count), count)

            console.log(lastItems.join(", "))

        }else if(command === "Yohoho!"){
            break;
        }

       // console.log(command)
    }


    for(let i = 0; i<chest.length; i++){
        let temp = chest[i];

        sum += temp.length;

    }

    let averageTreasureGain = sum / chest.length

    if(chest.length !== 0){

        console.log(`Average treasure gain: ${averageTreasureGain.toFixed(2)} pirate credits.`)

    }else{

        console.log(`Failed treasure hunt.`)

    }

    //console.log(chest)   

}

treasureHunt([
"Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"
])
