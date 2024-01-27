function movingTarget(input){

    let targets = input.shift().split(" ").map(Number);

    let commands = input;

    for(let i = 0; i<input.length; i++){
        let temp = input[i].split(" ");

        let command = temp.shift();

        switch(command){
            case "Shoot": 

            let shotIndex = Number(temp.shift());

            let shotPower = Number(temp.shift());

            if(shotIndex < targets.length){

            let target = Number(targets[shotIndex]);

            let res = target - shotPower;

            targets[shotIndex] = res;

            if(res <= 0){
                targets.splice(shotIndex, 1)
            }

            }           

            break;

            case "Add":

            let addIndex = Number(temp.shift());

            let addValue = Number(temp.shift());

            if(addIndex < targets.length){
                targets.splice(addIndex, 1, addValue)
            }else{
                console.log("Invalid placement!")
            }

            break;

            case "Strike":

            let strikeIndex = Number(temp.shift());

            let radiusIndex = Number(temp.shift());

            if(strikeIndex < targets.length){

               
            let start = strikeIndex - radiusIndex;

            let range = radiusIndex*2+1;

            if(start <= 0 || (range + start-1) >= targets.length-1){
                console.log("Strike missed!");
                continue;
            }               
            
            targets.splice(start, range);

            }else {
                console.log("Strike missed!")
            }           

            break;

            case "End":

            console.log(targets.join("|"))


            //console.log(addIndex)
        }



        //console.log(commands)
    }

    //console.log(targets)

}

movingTarget([
"1 2 3 4 5",
"Strike 0 1",
"End"
])
