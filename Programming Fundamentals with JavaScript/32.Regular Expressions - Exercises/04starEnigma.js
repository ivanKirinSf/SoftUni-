function starEnigma(input){

let num = input.shift();

let starCode = /[STARstar]/g;

let pattern = /[^@\-!:>\s]*@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>\s]*!(?<type>[A|D])![^@\-!:>\s]*\->(?<count>\d+)/;

let counter = 0;

let newMes = "";

let attackedPlanetsList = new Set();

let destroyedPlanetsList = new Set();

for(let line of input){

   counter = 0;

   let match = starCode.exec(line);

   while(match !== null){

    counter ++;

    match = starCode.exec(line);

   }

   for(let ch of line){

    let value = ch.charCodeAt();

    let res = value - counter;

    let character = String.fromCharCode(res);

    newMes += character;
    
   }   
   
}

if(pattern.exec(newMes)){

    let match = pattern.exec(newMes);

    if(match.groups.type === "A"){

        attackedPlanetsList.add(match)       

    }

    if(match.groups.type === "D"){

        destroyedPlanetsList.add(match)
    }

  }

console.log(`Attacked planets: ${attackedPlanetsList.size}`)

let sortedAttacked = attackedPlanetsList.sort((a,b)=> a[0].localeCompare(b[0]));

console.table(sortedAttacked)

//console.log(`-> ${sortedAttacked[0]}`)

}

starEnigma(
    ['3',
        "tt(''DGsvywgerx>6444444444%H%1B9444",
        //'GQhrr|A977777(H(TTTT',
        //'EHfsytsnhf?8555&I&2C9555SR'
        ]
    )
