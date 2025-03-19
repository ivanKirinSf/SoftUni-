function starEnigma(input){

let num = input.shift();

let patterStar = /[STARstar]/g;

let pattern = /[^@\-!:>\s]*@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>\s]*!(?<type>[A|D])![^@\-!:>\s]*\->(?<count>\d+)/;

let decMessage = "";

let attackedPlanetsList = new Set();

let destroyedPlanetsList = new Set();

for(let line of input){
    
 let counter = 0;

 let match = patterStar.exec(line);

 while(match !== null){
    counter ++;

    match = patterStar.exec(line);
 }

 for(let char of line){

    let value = char.charCodeAt();

    let result = value - counter;

    let character = String.fromCharCode(result);

    decMessage += character;

 } 

}

if(pattern.test(decMessage)){

    let match = decMessage.match(pattern);
 
    if(match.groups.type === "A"){
 
     attackedPlanetsList.add(match.groups.name)
 
    }
 
    if(match.groups.type === "D"){
 
     destroyedPlanetsList.add(match.groups.name)
 
    }

}

if(attackedPlanetsList.size){

    console.log(`Attacked planets: ${attackedPlanetsList.size}`);

    let sortedAttacked = attackedPlanetsList.sort((a, b) => a.localeCompare(b));

for(let planet of sortedAttacked){

    console.log(`-> ${planet[0]}`)
}

}

if(destroyedPlanetsList.size){

    console.log(`Destroyed planets: ${destroyedPlanetsList.size}`);

    let sortedDestroyed = destroyedPlanetsList.sort((a, b) => a.localeCompare(b));

    for(let planet of destroyedPlanetsList){

        console.log(`-> ${planet[0]}`)
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
