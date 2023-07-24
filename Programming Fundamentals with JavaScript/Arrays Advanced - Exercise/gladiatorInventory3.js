function gladiatorInventory(input){

    let arr = input;
    
    let inventory = arr.shift().split(" ");    
           
    let commands = arr;


    for(let i = 0; i < commands.length; i++){
        let temp = commands[i].split(" ");
        let command = temp[0]
                
        switch(command){
            case "Buy": 
            let equipment = temp[1];
            let buyIndex = inventory.indexOf(equipment);
            if(buyIndex === -1){                
                inventory.push(equipment);                
            };
            break;
            case "Trash":
                let trashEquipment = temp[1];
                let trashIndex = inventory.indexOf(trashEquipment);
                if(trashIndex !== -1){
                    inventory.splice(trashIndex, 1)
                };
                break;
                case "Repair":
                    let equipmentRepair = temp[1];
                    let repairIndex = inventory.indexOf(equipmentRepair);
                    if(repairIndex !== -1){
                        inventory.splice(repairIndex, 1);
                        inventory.push(equipmentRepair);
                    };
                    break;
                    case "Upgrade":
                        let tokensUpgrade = temp[1].split("-");
                        
                        let equipmentUpgrade = tokensUpgrade[0];

                        let upgrade = tokensUpgrade[1];                        
                        
                        let upgradeIndex = inventory.indexOf(equipmentUpgrade);

                        if(upgradeIndex !== -1){
                            let text = `${equipmentUpgrade}:${upgrade}`;
                            inventory.splice(upgradeIndex+1, 0, text);
                        }
        }
    }
    console.log(inventory.join(" "))    
}

gladiatorInventory (
    [
    'SWORD Spear Shield',
    //'Buy Bag',
    //'Trash Shield',
    //'Repair Spear',
    'Upgrade SWORD-Steel'
]
)
