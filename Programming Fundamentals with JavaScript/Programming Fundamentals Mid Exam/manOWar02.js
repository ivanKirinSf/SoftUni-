function manOWar(input){

let pirateShip = input.shift().split(">").map(Number);
let warship = input.shift().split(">").map(Number);
let healthCap = Number(input.shift());
let pirateShipSum = 0;
let warshipSum = 0;

index = 0;
while(index < input.length){
    let temp = input[index].split(" ");
    let command = temp.shift();

    if(command === "Fire"){
        let indexFire = Number(temp.shift());
        let damage = Number(temp.shift());

        if(indexFire >= 0 && indexFire < warship.length){            
        
            let sectionHealth = Number(warship[indexFire]);
            let res = sectionHealth - damage;
            if(res <= 0){

                return console.log(`You won! The enemy ship has sunken.`);
                
            } else {
                warship.splice(indexFire, 1, res)
            }
            
        }
        //console.log(damage)
    }else if(command === "Defend"){
        let startIndex = Number(temp.shift());
        let endIndex = Number(temp.shift());
        let damage = Number(temp.shift());

        if(startIndex >= 0 && startIndex < endIndex && endIndex > startIndex && endIndex < pirateShip.length){
            indexD = startIndex;
            while(indexD <= endIndex){
                let sectionHealth = Number(pirateShip[indexD]);
                let res = sectionHealth - damage;
                if( res <= 0){

                    return console.log(`You lost! The pirate ship has sunken.`);

                } else {
                    pirateShip.splice(indexD, 1, res);
                }
                indexD++
            }
        } 

    }else if(command === "Repair"){
        let indexRepair = Number(temp.shift());
        let heal = Number(temp.shift());
        let res = Number(pirateShip[indexRepair]) + heal;
        if(res >= healthCap){

            res = healthCap;

            pirateShip.splice(indexRepair, 1, res);

        } else {

            pirateShip.splice(indexRepair, 1, res)

        }
        //console.log(heal)

    }else if(command === "Status"){
        let sectionForRepair = healthCap*0.20;
        let count = 0;

        for(let i = 0; i<pirateShip.length; i++){
            let sectionHealth = Number(pirateShip[i]);
            if(sectionHealth < sectionForRepair){

                count+=1;
            }

        }
        console.log(`${count} sections need repair.`);

        } else if(command === "Retire"){

            break;

        }

    //console.log(command)

    index++

}

//console.log(pirateShip)
//console.log(warship)

index = 0;
while(index < pirateShip.length){
    let temp = Number(pirateShip[index]);

    pirateShipSum += temp;

    index++;    
}

index = 0;
while(index < warship.length){
    let temp = Number(warship[index]);

    warshipSum += temp;

    index++;
}

console.log(`Pirate ship status: ${pirateShipSum}`+`\n`+`Warship status: ${warshipSum}`);

//console.log(pirateShip)
//console.log(warship)

}
