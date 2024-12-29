function race(input){

let participantsArr = input.shift().split(", ");

let participants = {};

for(let partName of participantsArr){

   participants[partName] = 0;
}

let patternName = /[A-Za-z]/g;

let patternDist = /[0-9]/g;

let distance = 0;

for(let line of input){

   if(line === "end of race"){
      break;
   }

   let name = line.match(patternName).join("");

   let distArr = line.match(patternDist);

   for(let num of distArr){

      distance += Number(num);     

   }

   if(participants.hasOwnProperty(name)){

      participants[name] += distance;

   }

   distance = 0;

   //console.log(distArr)
}

let sorted = Object.entries(participants).sort((a,b) => b[1] - a[1])

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
