function movingTargets(input){

    let targets = input.shift().split(" ").map(Number);

    let commands = input;

    for(let i = 0 ; i<commands.length; i++){

        let temp = commands[i].split(" ");

        let command = temp.shift();

        if(command === "Shoot"){

            let indexShoot = Number(temp.shift());

            let powerShoot = Number(temp.shift());

            if(indexShoot < targets.length && indexShoot >= 0){

                let res = targets[indexShoot] - powerShoot;

                if(res > 0){

                    targets.splice(indexShoot, 1, res)

                }else{
                    targets.splice(indexShoot, 1)
                }

            }
        }else if(command === "Add"){

            let indexAdd = Number(temp.shift());
            let valueAdd = Number(temp.shift());

            if(indexAdd >= 0 && indexAdd < targets.length){

                targets.splice(indexAdd, 0, valueAdd)

            }else{
                console.log("Invalid placement!")
            }
        }else if( command === "Strike"){

            let indexStrike = Number(temp.shift());
            let radiusStrike = Number(temp.shift());

            if(indexStrike - radiusStrike >= 0 && indexStrike + radiusStrike < targets.length){

                targets.splice((indexStrike-radiusStrike), (radiusStrike*2 + 1))

            }else {
                console.log("Strike missed!")
            }

        }else if(command === "End"){

            console.log(targets.join("|"))

        }
    }

    //console.log(commands)
}

movingTargets([
"1 2 3 4 5",
"Strike 0 1",
"End"
])

