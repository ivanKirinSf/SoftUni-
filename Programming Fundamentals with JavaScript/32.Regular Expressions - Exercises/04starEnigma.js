function starEnigma(input){

let num = input.shift();

let pattern = /[^@\-!:>\s]*@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>\s]*!(?<type>[A|D])![^@\-!:>\s]*\->(?<count>\d+)/;

let starCode = /[STARstar]/g;

let counter = 0;

let newMess = "";

let attackedPlanetsList = new Set();

let destroyedPlanetsList = new Set();



for(let line of input){

  let match = starCode.exec(line);

  while(match !== null){

    counter ++

    match = starCode.exec(line);

    
  }

  for(let ch of line){
    
    let value = ch.charCodeAt();
    
    let res = value - counter;

    let char = String.fromCharCode(res);

    newMess += char;
  }

  if(pattern.test(newMess)){

    let match = newMess.match(pattern);

    if(match.groups.type === "A"){

      attackedPlanetsList.add(match.groups.name);

    }else if(match.groups.type === "D"){

      destroyedPlanetsList.add(match.groups.name);

    }    

  }

  newMess = "";

  counter = 0;

}

//console.log(`Attacked planets: ${attackedPlanetsList.size}`);

console.log(`Attacked planets: ${attackedPlanetsList.size}`);

if(attackedPlanetsList.size){

  //console.log(`Attacked planets: ${attackedPlanetsList.size}`);

  for(let planet of Array.from(attackedPlanetsList).sort((a,b)=>a.localeCompare(b))){

    console.log(`-> ${planet}`);

  }
}

console.log(`Destroyed planets: ${destroyedPlanetsList.size}`);

if(destroyedPlanetsList.size){

  //console.log(`Destroyed planets: ${destroyedPlanetsList.size}`);

  for(let planet of Array.from(destroyedPlanetsList).sort((a,b)=>a.localeCompare(b))){

    console.log(`-> ${planet}`);

  }
}
//console.log(newMess)

}

starEnigma(

  ['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR'
  ]     
                  
    )
