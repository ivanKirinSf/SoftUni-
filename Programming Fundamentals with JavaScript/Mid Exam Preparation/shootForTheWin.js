function shootForTheWin(input){

    let targets = input.shift().split(" ").map(Number);
    let counter = 0;

    for(let i = 0; i < input.length; i++){
        let index = input[i];

        if(index === "End"){

            console.log(`Shot targets: ${counter} -> ${targets.join(" ")}`);

            break;
        }else{
            index = Number(input[i])
        }

        if(index >= 0 && index < targets.length){
            let value = Number(targets[index]);

            if(value !== -1){

                targets[index] = -1;
                counter += 1;

            for(let a = 0; a < targets.length; a++){
                let tempA = Number(targets[a]);

                if(tempA > value){

                    let res = tempA - value;

                    targets[a] = res;

                }else if(tempA === -1){
                    continue;
                }else if(tempA <= value){

                    let res = tempA + value;

                    targets[a] = res;

                }

            }

            }else if(value === -1){
                continue;
            }
            
        }
    }

    //console.log(targets)
}

shootForTheWin([
"30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"
])
