function muOnline(input){

    let rooms = input.split("|");
    let health = 100;
    let bitcoins = 0;
    let roomCounter = 0;
    let gameOver = false;

    for(let i = 0; i < rooms.length; i++){

        let temp = rooms[i].split(" ");
        let command = temp.shift();
        roomCounter = i+1;


        switch(command){
            case "potion":
                let heal = Number(temp.shift());
                let res = health + heal;
                if(res > 100){
                    let amount = 100 - health;
                    health = 100;                    
                    console.log(`You healed for ${amount} hp.`)
                } else {
                    health = res;
                    console.log(`You healed for ${heal} hp.`)
                }

                console.log(`Current health: ${health} hp.`);
                break;
                case "chest":
                    let foundCoins = Number(temp.shift());
                    bitcoins += foundCoins;
                    console.log(`You found ${foundCoins} bitcoins.`);
                    break;
                    default:
                        let monsterAttack = Number(temp.shift());
                        health -= monsterAttack; 
                        if(health > 0){
                            console.log(`You slayed ${command}.`)
                        }else {
                            gameOver = true;
                            console.log(`You died! Killed by ${command}.` + `\n` + `Best room: ${roomCounter}`);
                            break;                            
                        }
        }

        if(gameOver === true){
            break;
        }
        //console.log(command);
    }

    if(gameOver !== true){

        console.log("You've made it!"+`\n`+`Bitcoins: ${bitcoins}`+`\n`+`Health: ${health}`);
    }    
}
