function muOnline(string){

    let text = string.split("|");
    let health = 100;
    let bitcoins = 0;
    let roomCounter = 0;

    for(let i = 0; i < text.length; i++){
        let temp = text[i].split(" ");
        let command = temp[0];
        roomCounter += 1;
        
        if(command === "potion"){
            let number = Number(temp[1]);
            if(health < 100){
                let sum = health + number;
                if(sum > 100){
                    let amount = 100 - health;
                    console.log(`You healed for ${amount} hp.`);
                    health = 100;
                    console.log(`Current health: ${health} hp.`);
                    
                } else {
                    health = sum;
                    console.log(`You healed for ${number} hp.`);
                    console.log(`Current health: ${health} hp.`);
                }
            }            
        }else if (command === "chest"){
            let number = Number(temp[1]);
            bitcoins += number;
            console.log(`You found ${number} bitcoins.`);
        }else {
            let attack = Number(temp[1]);
            health -= attack;
            let monster = temp[0];
            if(health > 0){
                console.log(`You slayed ${monster}.`)
            }else{
             console.log(`You died! Killed by ${monster}.`)
             return console.log(`Best room: ${roomCounter}`)
            }
            
        }
    }

    console.log(`You've made it!`);
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
    

    
    //console.log(health)

}

//muOnline("boss 20")
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")
