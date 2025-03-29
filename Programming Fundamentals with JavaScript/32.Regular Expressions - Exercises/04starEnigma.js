function starEnigma(input){

let num = input.shift();

let starCode = /[STARstar]/g;

let pattern = /[^@\-!:>\s]*@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>\s]*!(?<type>[A|D])![^@\-!:>\s]*\->(?<count>\d+)/;

let counter = 0;

let newMess = "";

let attackedPlanetsList = new Set();

let destroyedPlanetsList = new Set();

for(let line of input){

let match = starCode.exec(line);

while(match !== null){

  counter ++;

  match = starCode.exec(line);

}

for(let ch of line){

  let value = ch.charCodeAt();

  let res = value - counter;

  let char = String.fromCharCode(res);

  newMess += char;

}

//console.log(newMess)




if(pattern.test(newMess)){

let match = newMess.match(pattern);

if(match.groups.type === "A"){

  attackedPlanetsList.add(match.groups.name); 

}else if(match.groups.type === "D"){

  destroyedPlanetsList.add(match.groups.name);  

}

newMess = "";

counter = 0;

}

}

console.log(`Attacked planets: ${attackedPlanetsList.size}`);

if(attackedPlanetsList.size){

   for(let planet of Array.from(attackedPlanetsList).sort((a,b) => a.localeCompare(b))){

    console.log(`-> ${planet}`);

   }

}

console.log(`Destroyed planets: ${destroyedPlanetsList.size}`);

if(destroyedPlanetsList.size){

  for(let planet of Array.from(destroyedPlanetsList).sort((a,b) => a.localeCompare(b))){

   console.log(`-> ${planet}`);
   
  }

}

}

starEnigma(

  ['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
  ]              
    )
