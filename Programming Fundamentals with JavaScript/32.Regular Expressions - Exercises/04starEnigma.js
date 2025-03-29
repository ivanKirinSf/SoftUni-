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

   match = starCode.exec(line)

  }

  for(let ch of line){
     
    let value = ch.charCodeAt();

    let res = value - counter;

    let char = String.fromCharCode(res);

    newMess += char;

  }
}

if(pattern.test(newMess)){

  let match = pattern.exec(newMess);

  if(match.groups.type === "A"){

    attackedPlanetsList.add(match.groups.name);

  }

  if(match.groups.type === "D"){

    destroyedPlanetsList.add(match.groups.name); 

  }
}

console.log(`Attacked planets: ${attackedPlanetsList.size}`);

for(let planet in attackedPlanetsList){

  console.log(`-> ${planet}`)
}

console.log(`Destroyed planets: ${destroyedPlanetsList.size}`);

for(let planet of attackedPlanetsList){

  console.log(`-> ${planet}`)
}

//console.log(newMess)

}





starEnigma(
    ['3',
        "tt(''DGsvywgerx>6444444444%H%1B9444",
        //'GQhrr|A977777(H(TTTT',
        //'EHfsytsnhf?8555&I&2C9555SR'
        ]
        
    )
