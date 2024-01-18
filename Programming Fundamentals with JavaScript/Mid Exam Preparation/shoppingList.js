function shoppingList(input){

    let list = input.shift().split("!");

    for(let i = 0; i<input.length; i++){
        let temp = input[i];

        if(temp === "Go Shopping!"){
            break;
        }else {

            temp = input[i].split(" ")

        }

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

                    list.splice(indexCorrect,1);

                    list.splice(indexCorrect, 0, newItem)

                }
                break;



                console.log(newItem)

            //console.log(index)
        }

        //console.log(command)
    }

    console.log(list)



}

shoppingList([
"Tomatoes!Potatoes!Bread",
//"Unnecessary Potatoes",
"Correct Potatoes Onion",
//"Urgent Tomatoes",
//"Go Shopping!"
])
