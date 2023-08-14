function manOWar (input){

    let pirateShip = input.shift().split(">").map(Number);
    let warship = input.shift().split(">").map(Number);
    let maxHealth = Number(input.shift());
    let gameOver = false

    //console.log(pirateShip)

    

    for(let i = 0; i<input.length; i++){
        let temp = input[i].split(" ");
        let command = temp.shift();

        switch(command){
            case "Fire": 
            let amountFire01 = Number(temp.shift());
            let amountFire02 = Number(temp.shift());
            let attackTokWarship = fire(warship, amountFire01, amountFire02);
            if(gameOver === true){
                break;
            }
            break;
            case "Defend":
            let amountDefend01 = Number(temp.shift());
            let amountDefend02 = Number(temp.shift());
            let amountDefend03 = Number(temp.shift());
            let attackToPirateShip = defend(pirateShip, amountDefend01, amountDefend02, amountDefend03);
            if(gameOver === true){
                break;
            }
            break;
            case "Repair":
            let amountRepair01 = Number(temp.shift());
            let amountRepair02 = Number(temp.shift());
            let repairPirateShip = repair(pirateShip, amountRepair01, amountRepair02, maxHealth);
            break;
            case "Status":
                let statusPirateShip = status(pirateShip, maxHealth);
        }
        //console.log(command)

        if(gameOver === true){
            break;
        }
    }

    //console.log(pirateShip)

    if(gameOver !== true){
        let pirateShipSum = 0;
        let warshipSum = 0;

        for(let p = 0; p < pirateShip.length; p++){
            let tempP = Number(pirateShip[p]);
            pirateShipSum += tempP;
        }

        for(let w = 0; w < warship.length; w++){
            let tempW = Number(warship[w]);
            warshipSum += tempW;
        }

        console.log(`Pirate ship status: ${pirateShipSum}`+`\n`+`Warship status: ${warshipSum}`)
    }


    function fire(warship, index, damage){
        if(index >= 0 && index < warship.length){
            let sectionHealth = Number(warship[index]);
            let res = sectionHealth - damage; 
            sectionHealth = res;
            if(sectionHealth > 0){
                warship.splice(index, 1, sectionHealth);
            } else {
                gameOver = true;
               return console.log("You won! The enemy ship has sunken.")
            }
                       
        }
    }

    function defend(pirateShip, start, end, damage){
        if(start >= 0 && start < end && end > start && end < pirateShip.length){
            for(let i = start; i <= end; i++){
                let sectionHealth = Number(pirateShip[i]);
                let res = sectionHealth - damage;
                sectionHealth = res;
                if(sectionHealth > 0 ){

                    pirateShip.splice(i, 1, sectionHealth);

                } else {
                    gameOver = true;
               return console.log("You lost! The pirate ship has sunken.")
                }
                
            }
        }      

    }

    function repair(pirateShip, index, heal){
        if(index >= 0 && index < pirateShip.length){

            let sectionHealth = Number(pirateShip[index]);
            let res = sectionHealth + heal;
            sectionHealth = res;
            if(res > maxHealth){
                sectionHealth = maxHealth;
                pirateShip.splice(index,1, sectionHealth);
            } else {
                pirateShip.splice(index, 1, sectionHealth);
            }
        }
    }

    function status(pirateShip, maxHealth){
        let needRepair = maxHealth*0.2;
        let counter = 0;

        for(let i = 0; i < pirateShip.length; i++){
            let sectionsPirateShip = Number(pirateShip[i]);
            if(sectionsPirateShip < needRepair){
                counter += 1;
            }

        }
        console.log(`${counter} sections need repair.`);
    }

   //console.log(counter)

}
