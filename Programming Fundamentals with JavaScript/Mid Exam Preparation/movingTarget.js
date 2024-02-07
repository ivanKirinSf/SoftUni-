function movingTarget(input){

    let targets = input.shift().split(" ").map(Number)

    //console.log(targets)

    for(let i = 0; i< input.length; i++){
        
        let temp = input[i].split(" ");

        let command = temp.shift();

        if(command === "Shoot"){

            let index = Number(temp.shift());
            let power = Number(temp.shift());

            if(index >= 0 && index < targets.length){

                let res = targets[index] - power;

            if(res > 0){
                
                targets.splice(index, 1, res)
            }else{
                targets.splice(index,1)
            }

            }
            

        }else if(command === "Add"){

            let index = Number(temp.shift());

            let value = Number(temp.shift());

            if(index >= 0 && index < targets.length){

                targets.splice(index, 0, value)              

            }else {
                console.log("Invalid placement!")
            }

        }else if(command === "Strike"){
            let index = Number(temp.shift());
            let radius = Number(temp.shift());

            if(index - radius >= 0 && index + radius < targets.length){
                targets.splice((index - radius), (radius*2 + 1))
            }else {

                console.log("Strike missed!")
            }

        }else if(command === "End"){

            console.log(targets.join("|"));
            break

        }



        //console.log(command)


    }

    //console.log(targets)

}

movingTarget([
"1 2 3 4 5",
"Strike 0 1",
"End"
])
