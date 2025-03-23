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

        let char = String.fromCharCode(res)

        newMess += char;
    }
}

//console.log(newMess);

if(newMess){

    let match = pattern.exec(newMess);

    if(match.groups.type === "A"){

        attackedPlanetsList.add(match);

    }

    if(match.groups.type === "D"){

        destroyedPlanetsList.add(match);

    }

    console.log(`Attacked planets: ${attackedPlanetsList.size}`);

    let sortAttacked = attackedPlanetsList.sort((a,b)=> a[0].localeCompare(b[0]));

    for(let el of sortAttacked){

        console.log(`-> ${el[0]}`)

    }



    console.log(`Destroyed planets: ${destroyedPlanetsList.size}`);

    let sortDestroyed = destroyedPlanetsList.sort((a,b)=> a[0].localeCompare(b[0]));

    for(let el of sortDestroyed){

        console.log(`-> ${el[0]}`)

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
