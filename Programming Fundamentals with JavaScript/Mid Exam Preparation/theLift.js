function theLift(input){

    let people = Number(input.shift())

    let lift = input.shift().split(" ").map(Number);

    let isLiftEmpty = true;

    //console.log(lift)

    for(let i = 0; i < lift.length; i++){

        let wagon = Number(lift[i]);

        let res = 4-wagon;

        if(people > res){

            lift[i] = 4

            people = people - res

        }else if(people <= res){
            let sum = wagon + people;
            lift[i] = sum
            people = 0;
        }        
    }

    let counter = 0

    for(let a = 0; a < lift.length; a++){
        let tempA = Number(lift[a]);

        if(tempA === 4){

            counter += 1

        }else{
            break;
        }

    }

    if(counter === lift.length){

        isLiftEmpty = false;

    }

    if(isLiftEmpty === true && people === 0){

        console.log(`The lift has empty spots!`)
        console.log(lift.join(" "))

    }

    if(isLiftEmpty === false && people !== 0){

        console.log(`There isn't enough space! ${people} people in a queue!`)
        console.log(lift.join(" "))

    }

    if(isLiftEmpty === false && people === 0){

        console.log(lift.join(" "))

    }

}

theLift([
    "0",
    "0 0 0"
   ]   
   )
