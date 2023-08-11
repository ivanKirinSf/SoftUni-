function manOWar(input) {

let pirateShip = input.shift().split(">").map(Number);
let warship = input.shift().split(">").map(Number);
let maxHealth = Number(input.shift());
let gameOver = false;

//console.log(maxHealth);

for(let i = 0; i < input.length; i++){
    let temp = input[i].split(" ");
    let command = temp.shift();

    if(command === "Fire"){
        let amount1 = temp.shift();
        let amount2 = temp.shift();
        let fireToWarship = fire(warship, amount1, amount2);
        if(gameOver === true){
            console.log(`You won! The enemy ship has sunken.`);
            break;
        }

        //console.log(damageFire)
    }else if(command === "Defend"){
        let amount1 = Number(temp.shift());
        let amount2 = Number(temp.shift());
        let amount3 = Number(temp.shift());
        let defendPirateShip = defend(pirateShip, amount1, amount2,amount3);
        if(gameOver === true){
            break;
        }

    }else if(command === "Repair"){
        let amount1 = Number(temp.shift());
        let amount2 = Number(temp.shift());
        let repairPirateShip = repair(pirateShip, amount1, amount2, maxHealth); 
        
    }else if(command === "Status"){

        let statusPirateShip = status(pirateShip, maxHealth);

    }

    
}


if(gameOver !== true){
    let pirateShipSum = 0;
    let warshipSum = 0;

    for(let j = 0; j < pirateShip.length; j++){
        let tempP = Number(pirateShip[j]);
        pirateShipSum += tempP;
    }

    for(let k = 0; k < warship.length; k++){
        let tempK = Number(warship[k]);
        warshipSum += tempK;
    }

    console.log(`Pirate ship status: ${pirateShipSum}`+`\n`+`Warship status: ${warshipSum}`)

}

function fire(warship, index, damage){

    let indexWarship = Number(index);
    let damageWarship = Number(damage);
    if(indexWarship >= 0 && indexWarship < warship.length){
        let sectionHealth = Number(warship[indexWarship]);
        let res = sectionHealth - damageWarship;
        if(res <= 0){
            gameOver = true;
        } else {
            warship.splice(indexWarship, 1, res);
        }
    }    
}

function defend(pirateShip, indexStart, indexEnd, damage){
    let start = Number(indexStart);
    let end = Number(indexEnd);
    let damagePirateShip = Number(damage);
    if(start >= 0 && start < end && end > start && end < pirateShip.length){
        
        for(let d = start; d <= end; d++){
            let sectionHealth = Number(pirateShip[d]);
            let res = sectionHealth - damagePirateShip;
            if(res <= 0){
                gameOver = true;
                return console.log(`You lost! The pirate ship has sunken.`)
            } else{
                pirateShip.splice(d, 1, res)
            }
        }        
    }
}

function repair(pirateShip, index, health, maxHealth){
    let indexRepair = Number(index);
    let healthRepair = Number(health);
    let sectionHealth = Number(pirateShip[indexRepair]);
    if(indexRepair >= 0 && indexRepair < pirateShip.length){

        let res = sectionHealth + healthRepair;

    if(res >= maxHealth){

        return pirateShip.splice(indexRepair, 1, maxHealth);

    }else {
        return pirateShip.splice(indexRepair, 1, res);
    }
    }    
}

function status(pirateShip, maxHealth){

    let count = 0;
    for(let s = 0; s < pirateShip.length; s++){
        let sectionHealth = Number(pirateShip[s]);
        let healthToRepair = maxHealth*0.2;
        if(sectionHealth < healthToRepair){
            count += 1;
        }
        
    }

  return console.log(`${count} sections need repair.`)

}

//console.log(pirateShip)
}
