function train(input){

    //1. arr wagons
    //2. arr commands
    //3. print the final state of arr wagons    

    let wagons = input[0].split(" ").map(Number);    

    let max = Number(input[1]);

    let commands = input;

    commands.splice(0,2)

    //console.log(commands);

    for(let i = 0; i<commands.length; i++){
        
        let temp = commands[i].split(" ");

        let command = "";

        let passengers = 0; 

        if( temp[0] === "Add"){

            command = temp[0];

            passengers = Number(temp[1]);  
            
            wagons.push(passengers)

        } else {

            passengers = Number(temp[0]);

            //console.log(passengers);

            index = 0;
            while(index < wagons.length){

                let temp = Number(wagons[index]);

                let sum = temp + passengers;

                if(sum <= max){
                    wagons.splice(index, 1, sum);
                    break;
                }

                index++;

            }

        }

    }

    console.log(wagons.join(" "))

}
