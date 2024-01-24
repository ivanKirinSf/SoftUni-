function shoppingList(input){

    let list = input.shift().split("!");

    for(let i = 0; i<input.length; i++){
        let temp = input[i].split(" ");

        //if(temp[0] === "Go"){

            //let second = temp[1];

            //if(second === "Shopping!"){
                //break;
            //}            
        //}

        let command = temp.shift();
        
        switch(command){
            case "Urgent": 
            let itemUrgent = temp.shift();

            let indexUrgent = list.indexOf(itemUrgent);

            if(indexUrgent === -1){

                list.unshift(indexUrgent);  


            }

            break;

            case "Unnecessary":
                let itemUnnecessary = temp.shift();
                let indexUnnecessary = list.indexOf(itemUnnecessary);

                if(indexUnnecessary !== -1){
                   list.splice(indexUnnecessary, 1)
                }

                break;

                case "Correct":

                let oldItem = temp.shift();
                let newItem = temp.shift();

                let indexCorrect = list.indexOf(oldItem);

                if(indexCorrect !== -1){

                    list.splice(indexCorrect,1, newItem);

                    //list.splice(indexCorrect, 0, newItem)

                }
                break;

                case "Rearrange":
                    let itemRearrange = temp.shift();
                    let indexRearrange = list.indexOf(itemRearrange);

                    if(indexRearrange !== -1){

                        let product = list[indexRearrange]

                        list.splice(indexRearrange, 1);

                        list.push(product)

                    }                  

                    break;

                    case "Go":
                        let second = temp.shift();

                        if(second === "Shopping!"){
                            
                            console.log(list.join(", "))

                            
                        }

                        break;                                    

                

            //console.log(index)
        }

        

        //console.log(command)
    }

    

}

shoppingList([
"Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"
])

