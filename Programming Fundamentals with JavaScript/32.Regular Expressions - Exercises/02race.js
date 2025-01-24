function race(input) {

let participanstList = input.shift().split(", ") ;

let participants ={};

let namePatern = /[A-Za-z]/g;

let distancePatrn = /[0-9]/g;

for(let name of participanstList){

    participants[name] = 0;

}

for(let el of input){

    if(el === "end of race"){
        break;
    }

    let runnerName = namePatern.exec(el).join(", ");

    console.log(runnerName);

}

//console.log(participanstList)

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
