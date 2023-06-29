function gladiatorInventory(arr){

    let inventory = arr[0].split(" ");

    let newArr = arr;
    

    

    let currentInventory = newArr[0].split(" ");
    
    

    for(let i = 0; i<newArr.length; i++){
        let temp = newArr[i].split(" ")
        let command = temp[0];
        

        if(command === "Buy" ){

           let equipment = temp[1];

            if(currentInventory.includes(equipment) == false){

                currentInventory.push(equipment);

                //console.log(currentInventory)
                
            }

        } else if (command === "Trash"){
            let equipment = temp[1];

            if(currentInventory.includes(equipment) == true){

                let index = currentInventory.indexOf(equipment);

                currentInventory.splice(index, 1);        
                   

            }
        } else if (command === "Repair"){
            let equipment = temp[1];

            if(currentInventory.includes(equipment) == true){

                let index = currentInventory.indexOf(equipment);

               currentInventory.splice(index,1)

               currentInventory.push(equipment)
            }
        }else if (command === "Upgrade"){
            let inventory = temp[1].split("-");

            let num = inventory.length
            let equipment = inventory[0];
            let upgrade = inventory[1];

            if(currentInventory.includes(equipment) == true){

                let index = currentInventory.indexOf(equipment);
                let newArr = currentInventory.slice(0,index+1)
                let sliced = currentInventory.slice(index+1, currentInventory.length)
                let text = (`${equipment}:${upgrade}`)
                newArr.push(text);
                for(let i = 0; i<sliced.length; i++){
                    let temp = sliced[i];
                    newArr.push(temp)
                }
                currentInventory = newArr
                //console.log(newArr);
                

            }


            //console.log(equipment);
            //console.log(upgrade);
            //console.log(`${equipment}:${upgrade}`);
        }

    }

    console.log(currentInventory.join(" "))

}

gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel'
])
