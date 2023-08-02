function manOWar(input) {

    let piratShip = input[0].split(">");
    let warship = input[1].split(">");
    let maxHealth = Number(input[2]);
    let sum = 0;

    input.splice(0, 3)

    let commands = input;

    for (let i = 0; i < commands.length; i++) {
        let temp = commands[i].split(" ");
        let command = temp[0];

        if (command === "Fire") {
            let index = Number(temp[1]);
            let damage = Number(temp[2]);
            if (index < warship.length) {
                let sectionHealth = Number(warship[index]);
                let res = sectionHealth - damage;
                if (res <= 0) {
                    return console.log(`You won! The enemy ship has sunken.`)
                } else {
                    let num = Number(res);
                    warship.splice(index, 1, num);
                    
                }

            } else {
                continue;
            }
            //console.log(warship.length)
        } else if (command === "Defend") {
            let start = Number(temp[1]);
            let end = Number(temp[2]);
            let damage = Number(temp[3]);
            if (start < piratShip.length-1 && end < piratShip.length) {
                for (let i = start; i <= end; i++) {
                    let sectionHealth = Number(piratShip[i]);
                    let res = sectionHealth - damage;
                    if (res <= 0) {
                        return console.log(`You lost! The pirate ship has sunken.`);
                    } else {
                        let num = Number(res);
                        piratShip.splice(i, 1, Number(num));
                    }
                    //console.log(sectionHealth)
                }

            } else {
                continue;
            }
            //console.log(damage)
        }else if (command === "Repair"){
            let index = temp[1];
            let healthAmount = Number(temp[2]);
            if(index < piratShip.length){
                let sectionHealth = Number(piratShip[index]);
                let res = healthAmount + sectionHealth;
                if(res > 70){
                    res = 70;
                    piratShip.splice(index, 1, res)
                } else {
                    piratShip.splice(index, 1, res)
                }
                //console.log(res)
            } else {
                continue;
            }

            //console.log(healthAmount)
        }else if (command === "Status"){
            let healthForRepair = maxHealth*0.2;
            let sectionsToRepairCounter = 0;
            //console.log(HealthForRepair)
            for(let i = 0; i<piratShip.length; i++){
                let sectionHealth = Number(piratShip[i]);
                if(sectionHealth < healthForRepair){
                    sectionsToRepairCounter += 1;
                }
            }
            console.log(`${sectionsToRepairCounter} sections need repair.`)
        }else if (command === "Retire"){
            break;
        }        
        //console.log(command)
    } 

    let sumPiratShip = 0;
        let sumWarShip = 0;
        for(let p = 0; p < piratShip.length; p++){
            let temp = Number(piratShip[p]);
            sumPiratShip += temp;
        }
        for(let w = 0; w < warship.length; w++){
            let temp = Number(warship[w]);
            sumWarShip += temp;
        }        
        console.log(`Pirate ship status: ${sumPiratShip}` + `\n` + `Warship status: ${sumWarShip}`);     
    //console.log(piratShip)

}

manOWar([
"10>3>4>5>2",
"6>7>8>9>10>11",
"20",
//"Status",
"Fire -1 10",
//"Defend 3 4 1",
//"Repair 0 70",
//"Retire",
])
