function dungeonestDark (input){

    let text = input[0];
    let rooms = text.split("|");
    let health = 100;
    let coins = 0;
    let roomNum = 0;

    for(let i = 0; i<rooms.length; i++){
        let room = rooms[i];
        roomNum ++;


        let commands = room.split(" ");
        let comand = commands[0];
        let volume = Number(commands[1]);

        switch(comand){
            case "potion": 
                let tempHealth = health;
                health += volume;
                if(health <= 100){
                console.log(`You healed for ${volume} hp.`)
                console.log(`Current health: ${health} hp.`)
            } else{
                let extra = health - 100;
                let temp = volume - extra;
                
                tempHealth += temp;
                health = tempHealth;
                console.log(`You healed for ${temp} hp.`)
                console.log(`Current health: 100 hp.`)
                
            };
            break;
            case "chest": coins += volume;
            if(volume>0 && health>0){
            console.log(`You found ${volume} coins.`);
            };
            break;

            default : health -= volume;
            if(health > 0){
                console.log(`You slayed ${comand}.`);
            } else {
                console.log(`You died! Killed by ${comand}.`)
                console.log(`Best room: ${roomNum}`);
                break;
            }break;
            


            
        }

        if(health > 0 && roomNum == rooms.length){   //if(health > 0 && roomNum == rooms.length){
            console.log("You've made it!")
            console.log(`Coins: ${coins}`)
            console.log(`Health: ${health}`);
            break;
        

        }



        
    }
    



    

}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])
