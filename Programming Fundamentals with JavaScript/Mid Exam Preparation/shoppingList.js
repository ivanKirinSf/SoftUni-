
function shoppingList(input){

    let list = input.shift().split("!");

    let commands = input;

    //console.log(commands)

    for(let i = 0; i<commands.length; i++){
        let temp = commands[i];

        if(temp === "Go Shopping!"){
            console.log(list.join(", "));
        }

       let text = temp.split(" ")

        //let command = temp.shift();

       let command = text.shift();

       if(command === "Urgent"){

        let item = text.shift();

        let index = list.indexOf(item);

        if(index === -1){

            list.unshift(item);
        }

       } else if(command === "Unnecessary"){
        let item = text.shift();

        let index = list.indexOf(item);

        if(index !== -1){

            list.splice(index, 1)

        }

       }else if(command === "Correct"){
        let oldItem = text.shift();
        let newItem = text.shift();

        let index = list.indexOf(oldItem);

        if(index !== -1){

            list[index] = newItem;
            
        }
    }else if(command === "Rearrange"){
        let item = text.shift();

        let index = list.indexOf(item);

        if(index !== -1){

            list.splice(index, 1);

            list.push(item);

        }
    }
    }

}

shoppingList([
"Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"
])

