function manOWar(input){

let pirateShip = input.shift().split(">").map(Number);
let warship = input.shift().split(">").map(Number);
let maxHealth = input.shift();
let gameOver = false;

for(let i = 0; i < input.length; i++){
    let temp = input[i].split(" ");
    let command = temp.shift();
    

    if(command === "Fire"){
        let amount1 = temp.shift();
        let amount2 = temp.shift();
        let fireToWarship = fire(warship, amount1, amount2);
        if(gameOver === true){
            
            break;
        } 

    }else if(command === "Defend"){
        let amount1 = temp.shift();
        let amount2 = temp.shift();
        let amount3 = temp.shift();
        let defendThePirateShip = defend(pirateShip, amount1, amount2, amount3);
        if(gameOver === true){
            break;
        }
    }else if(command === "Repair"){
        let amount1 = temp.shift();
        let amount2 = temp.shift();
        let repairPirateShip = repair(pirateShip, amount1, amount2, maxHealth);     
        
    }else if(command === "Status"){
        let statusPirateShip = status(pirateShip);
    }else if(command === "Retire"){

        break;
    }    

    //console.log(command)
}


if(gameOver !== true){

    let pirateShipSum = 0;
    for(let p = 0; p < pirateShip.length; p++){
        let tempP = Number(pirateShip[p]);
        pirateShipSum += tempP;
    }
    
    let warshipSum = 0;
    for(let w = 0; w < warship.length; w++){
        let tempW = Number(warship[w]);
        warshipSum += tempW;
    }
    
    console.log(`Pirate ship status: ${pirateShipSum}`+`\n`+`Warship status: ${warshipSum}`);

}

   

function fire(warship, index, damage){
    let indexSection = Number(index);
    let attackDamage = Number(damage);

    if(indexSection >= 0 && indexSection < warship.length){
        let sectionHealth = warship[indexSection];
        let res = sectionHealth - attackDamage;
        if(res <= 0){  
            gameOver = true;                       
            return console.log(`You won! The enemy ship has sunken.`);
                    
        }else {
            warship.splice(indexSection, 1, res);
        }
    }
}

function defend(pirateShip, startIndex, endIndex, damage){
    let start = Number(startIndex);
    let end = Number(endIndex);
    let attackDamage = Number(damage);

    if(start >= 0 && start < end && end> start && end < pirateShip.length){
        for(let i = start; i <= end; i++){
            let sectionHealth = Number(pirateShip[i]);
            let res = sectionHealth - attackDamage;
            if( res <= 0){

                gameOver = true;
                return console.log(`You lost! The pirate ship has sunken.`)

            }else {

                pirateShip.splice(i, 1, res);

            }
        }
    }
}

function repair(pirateShip, index, health, maxHealth){
    let indexRepair = Number(index);
    if(indexRepair >= 0 && indexRepair < pirateShip.length){
        let sectionHealth = Number(pirateShip[indexRepair]);
        let res = sectionHealth + Number(health);
        if(res < maxHealth){
            sectionHealth = res;
            pirateShip.splice(indexRepair, 1, sectionHealth);
        }else {
            sectionHealth = maxHealth;
            pirateShip.splice(indexRepair, 1, sectionHealth)
        }
    }
}

function status(pirateShip){
    let count = 0;
    for(let i = 0 ; i < pirateShip.length; i++){
        let pirateShipSection = Number(pirateShip[i]);
        if(pirateShipSection < maxHealth*0.2){
           count +=1;
        }
    }

    return console.log(`${count} sections need repair.`);

}

//console.log(pirateShip);

}
