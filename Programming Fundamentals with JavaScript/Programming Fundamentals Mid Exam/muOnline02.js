function muOnline(input){

    let health = 100;
    let bitcoins = 0;
    let roomNum = 0;

    let rooms = input.split("|");

    index = 0;
    while(index < rooms.length){
        let temp = rooms[index].split(" ");
        let command = temp.shift();
        roomNum += 1;

        if(command === "potion"){
            let healed = Number(temp.shift());
            let res = health + healed;
            if(res > 100){
                let amount = 100 - health;
                health = 100;
                console.log(`You healed for ${amount} hp.`);
                console.log(`Current health: ${health} hp.`);
            }else {
                health = res;
                console.log(`You healed for ${healed} hp.`);
                console.log(`Current health: ${health} hp.`);
            }

            //console.log(healed)
        }else if (command === "chest"){
            let bitcoinsAmount = Number(temp.shift());
            console.log(`You found ${bitcoinsAmount} bitcoins.`);
            bitcoins += bitcoinsAmount;           

        }else {
            let monster = command;
            let attack = Number(temp.shift());
            health -= attack;
            if(health > 0){
                console.log(`You slayed ${monster}.`)
            }else {
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${roomNum}`);
                break;
            }
            //console.log(attack)
        }

        //console.log(command)

        index++
    }

    if(health > 0){

        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);

    }

    




}
