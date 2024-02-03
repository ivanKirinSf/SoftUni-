function movingTarget(input){

    let targets = input.shift().split(" ").map(Number);

    let commands = input

    for(let i = 0; i< commands.length; i++){
        
        let temp = commands[i].split(" ");

        let command = temp.shift();

        if(command === "Shoot"){

            let index = Number(temp.shift());

            let value = Number(temp.shift());

            if(index < targets.length && index >= 0){

               let res = targets[index] - value;

               if(res <= 0){
                targets.splice(index,1)
               }else {

                targets[index] = res

               }      

            }

            //console.log(value)

        }else if(command === "Add"){

            let index = Number(temp.shift());
            let value = Number(temp.shift());

            if(index >= 0 && index < targets.length){
                //targets[index] = value
                targets.splice(index, 1, value)
            }else{
                console.log("Invalid placement!")
            }

            //console.log(value)          

        }else if(command === "Strike"){
            let index = Number(temp.shift());
            let radius = Number(temp.shift());
            let range = radius*2+1;
            
            if(index - radius >= 0 && index + radius < targets.length){

                targets.splice(index-radius, range)

            }else {

                console.log("Strike missed!")

            }

        }if(command === "End"){

            console.log(targets.join("|"))

        }

        //console.log(temp)

    }

    //console.log(targets)
}

shoppingList([
"Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"
])

