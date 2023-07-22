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
                }

        }
    }

    console.log(inventory)
    
}

gladiatorInventory (
    [
    'SWORD Shield Spear',
    //'Buy Bag',
    'Trash Shield',
    //'Repair Spear',
    //'Upgrade SWORD-Steel'
]
)
