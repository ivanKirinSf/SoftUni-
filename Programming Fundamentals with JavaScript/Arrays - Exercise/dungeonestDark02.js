function dungeonestDark(input){

    let text = input[0];
    let rooms = text.split("|");
    let health = 100;
    let coins = 0;

    for(let i = 0; i<rooms.length; i++){
        let temp = rooms[i];
        let room = temp.split(" ")
        let item = room[0];
        let num = Number(room[1]);

        if(item === "potion"){
            health += num;
            if(health <= 100){
            console.log(`You healed for ${num} hp.`);
            console.log(`Current health: ${health} hp.`);
            } else if (health > 100){
                let tempHealth = num - (health - 100);
                health = 100;
                console.log(`You healed for ${tempHealth} hp.`);
                console.log(`Current health: ${health} hp.`);

            }

        } else if( item === "chest"){
            coins += num;
            console.log(`You found ${num} coins.`)
        }else{
            health -= num;
            if(health > 0){
                console.log(`You slayed ${item}.`);

            } else if(health <= 0){
                console.log(`You died! Killed by ${item}.`);
                console.log(`Best room: ${i+1}`);
                break;
            }
        }

        
    }

    if(health > 0){
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);

    }




}

dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
