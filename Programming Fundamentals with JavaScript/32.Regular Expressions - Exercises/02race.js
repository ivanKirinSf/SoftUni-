function race(input) {

let participantsList = input.shift().split(", ");

let patternName = /[A-Za-z]/g;

let patternLength = /[0-9]/g; 

for(let el of input){

    if(el === "end of race"){

    break; 

    }

    let name = el.exec(patternLength);

    console.log(name)
}



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
