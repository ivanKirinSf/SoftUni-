function race(input){

    let participantsList = input.shift().split(", ");

    let participants = [];

    let patternName = /[A-Za-z]/g;

    let patternDist = /[0-9]/g;

    
    for(let el of participantsList){

       participants[el] = 0;

    }

    for(let line of input){

        if(line === "end of race"){
            break;
        }

        if(line.match(patternName)){

            let name = patternName.match(line);

            console.log(name)
        }
    }

    console.log(participantsList)

}

race([
   'George, Peter, Bill, Tom',
   'G4e@55or%6g6!68e!!@ ',
   'R1@!3a$y4456@',
   'B5@i@#123ll',
   'G@e54o$r6ge#',
   '7P%et^#e5346r',
   'T$o553m&6',
   'end of race'
])
