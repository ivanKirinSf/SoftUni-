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

            }else if(command === "Add"){

                

            }
