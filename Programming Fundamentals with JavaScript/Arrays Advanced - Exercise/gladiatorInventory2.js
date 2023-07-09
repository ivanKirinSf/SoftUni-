function gladiatorInventory(input){

    let arr = input.shift().split(" ");

    let commands = input;

    //console.log(commands)

    index = 0;
    while(index < commands.length){
        let temp = commands[index].split(" ");
        let command = temp[0]

        switch(command){
            case "Buy": 
            let equipment = temp[1];
            let index = arr.indexOf(equipment);
            if(index === -1){
                arr.push(equipment)
            };
            break;
            case "Trash":
                let equipmentForTrash = temp[1];
                let indexTrash = arr.indexOf(equipmentForTrash)
                if(indexTrash !== -1){

                    arr.splice(indexTrash,1)

                };
                break;
                case "Repair": 
                 let equipmentToRepair = temp[1];
                 let indexRepair = arr.indexOf(equipmentToRepair);
                 if(indexRepair !== -1){
                    arr.splice(indexRepair, 1);
                    
                    arr.push(equipmentToRepair)
                 };
                 break;
                 case "Upgrade":
                    let element = temp[1].split("-");
                    let equipmentToUpgrade = element[0];
                    let upgrade = element[1];
                    let indexUpgrade = arr.indexOf(equipmentToUpgrade);
                    //let text = `${equipmentToUpgrade}:${upgrade}`.

                    if(indexUpgrade !== -1){
                        arr.splice(indexUpgrade+1,0,`${equipmentToUpgrade}:${upgrade}`)
                    }             
                
            
        }

        //console.log(command)

        index++
    }

    console.log(arr.join(" "))





}

gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V'
])
