function battleManager(input){

    let arrName = [];
    let arrHealth = [];
    let arrEnergy = [];

    for(let i = 0; i<input.length; i++){
        let temp = input[i].split(":");
        let command = temp.shift();

       if(command === "Add"){
        let name = temp.shift();
        let health = Number(temp.shift());
        let energy = Number(temp.shift());

        if(arrName.indexOf(name) === -1){
        arrName.push(name);
        arrHealth.push(health);
        arrEnergy.push(energy)
        }else{
            let index = arrName.indexOf(name);
            let oldHealth = Number(arrHealth[index]);
            let resHealth = oldHealth + health;
            arrHealth.splice(index, 1, resHealth);
            //console.log(resHealth);  
        } 

        //console.log(arrEnergy)     

       }else if(command === "Attack"){
        let attackerName = temp.shift();
        let defenderName = temp.shift();
        let damage = Number(temp.shift());
        let isExist = 0;

        if(arrName.indexOf(attackerName) !== -1){
            isExist += 1;
        }

        if(arrName.indexOf(defenderName) !== -1){
            isExist += 1;
        }

        if(isExist === 2){

            //console.log(arrHealth)
            let index = arrName.indexOf(attackerName);
            let oldAttackerEnergy = Number(arrEnergy[index]);
            let resAttackerEnergy = oldAttackerEnergy - 1;
            arrEnergy.splice(index, 1, resAttackerEnergy)

            //console.log(arrEnergy)
            //let resAttackerHealth = oldAttackerHealth - damage;
           //arrHealth.splice(index, 1, resAttackerHealth);

            let indexDefender = arrName.indexOf(defenderName);
            let oldDefenderHealth = Number(arrHealth[indexDefender]);
            let resDefenderHealth = oldDefenderHealth - damage;
            arrHealth.splice(indexDefender, 1, resDefenderHealth)


            if(resDefenderHealth <= 0){
                console.log(`${defenderName} was disqualified!`);
                let index = arrName.indexOf(defenderName);
                arrName.splice(index, 1);
                arrHealth.splice(index, 1);
                arrEnergy.splice(index, 1);
            }

            if(resAttackerEnergy <= 0){
                console.log(`${attackerName} was disqualified!`);
                let index = arrName.indexOf(attackerName);
                arrName.splice(index, 1);
                arrHealth.splice(index, 1);
                arrEnergy.splice(index, 1);
            }
            //if(resAttackerHealth)
            //console.log(arrName)

        }       

       }else if(command === "Delete"){
        let userName = temp.shift();
        if(userName === "All"){
            arrName = [];
            arrHealth = [];
            arrEnergy = [];
        }
        let indexUser = arrName.indexOf(userName);
        if(indexUser !== -1){

        arrName.splice(indexUser, 1);
        arrHealth.splice(indexUser, 1);
        arrEnergy.splice(indexUser, 1);
        }
        
        //console.log(arrEnergy);       
    }else if(command === "Results"){
        break;
    }
    //console.log(arrName)
        //console.log(command)
    }

    let peopleCount = Number(arrName.length)
    console.log(`People count: ${peopleCount}`);
    for(let j = 0; j<arrName.length; j++){
        let name = arrName[j];
        let health = Number(arrHealth[j]);
        let energy = Number(arrEnergy[j]);

        console.log(`${name} - ${health} - ${energy}`)
    }

    //console.log(input[0])

}
