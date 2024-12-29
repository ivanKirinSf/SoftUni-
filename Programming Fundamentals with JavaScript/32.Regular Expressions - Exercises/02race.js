function race(input){

   let participantsArr = input.shift().split(", ");

   let participants = {};

   for(let el of participantsArr){

      participants[el] = 0;
   }

   console.table(participants); 

   let patternName = /[A-Za-z]/;

   let patternDist = /[0-9]/;

   for(let line of input){

      if(line === "end of race"){
         break;
      }

      if(line.match(patternName)){

         let name = patternName.exec(line);

         //console.log(name)
      }
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
