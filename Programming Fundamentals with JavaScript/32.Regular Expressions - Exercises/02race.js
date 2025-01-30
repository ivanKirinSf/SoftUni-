function race(input) {

let participantsList = input.shift().split(", ");

let participants = {};

let patternName = /[A-Za-z]/g;

let patternLength = /[0-9]/g;

let totalDistance = 0;

for(let participantName of participantsList){

    participants[participantName] = 0;
}

for(let el of input){

    if(el === "end of race"){
        break;
    }

    let name = el.match(patternName).join("");

    let distanceArr = el.match(patternLength);

    for(let length of distanceArr){

        totalDistance += Number(length)

    }


    if(participants.hasOwnProperty(name)){

        participants[name] += totalDistance;

        totalDistance = 0;         

    }

    //console.log(totalDistance)

}

let sorted = Object.entries(participants).sort((a,b) => b[1]-a[1])

console.log(`1st place: ${sorted[0][0]}`);
console.log(`2nd place: ${sorted[1][0]}`);
console.log(`3rd place: ${sorted[2][0]}`);

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
