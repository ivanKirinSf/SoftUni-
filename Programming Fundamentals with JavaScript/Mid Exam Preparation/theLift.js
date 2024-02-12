function theLift(input){

    let people = Number(input.shift());

    let lift = input.shift().split(" ").map(Number);

    let isFull = true;

    //console.log(people)
    //console.log(lift)

    for(let i = 0 ; i < lift.length; i++){

       let wagon = Number(lift[i]);

       if(people === 0 && wagon < 4){

            console.log(`The lift has empty spots!`)
            console.log(lift.join(" "))
            break;            
       
        //continue;
       }

       if(wagon < 4){

        let emptySeats = 4 - wagon;

        if(people - emptySeats > 0){        

        people = people - emptySeats;

        lift[i] = 4;

       }else if(people > 0 && people < 4){

        lift[i] = people;

        people = 0;

       }      
       
        } else {
            continue;
        }      

    }

    if(people > 0){

        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(lift.join(" "));
        

    }

    for(let a = 0; a < lift.length; a++){
        let tempA = Number(lift[a]);

        if(tempA !== 4){
            isFull = false;
            break;
        }
    }   
    
    if(isFull === true && people === 0){

        console.log(lift.join(" "))

    }

    //console.log(lift)

    //console.log(people)

}

theLift([
    "15",
    "0 0 0 0 0"
   ]     
   )
