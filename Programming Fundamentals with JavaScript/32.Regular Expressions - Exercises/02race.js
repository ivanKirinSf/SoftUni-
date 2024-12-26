function race(input){

    let RacersList = input.shift();

    let pattern = /(?<name>[A-Za-z]+)+(?<distance>[0-9]+)/;

    let personDist = ""

    for(let line of input){

        if(line === "end of race"){
            break;
        }

        if(pattern.test(line)){

            let personData = pattern.exec(line);
            let personDistance = personData.groups.distance;

        }        

    }
        
}

race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])
