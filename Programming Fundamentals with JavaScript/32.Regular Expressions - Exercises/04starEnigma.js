function starEnigma(input){

let num = input.shift();

let codePattern = /[STARstar]/g;

let pattern = /@(?<name>[A-Z][a-z]*)[^@!:>]*:(?<population>[0-9]*)[^@!:>]*!(?<type>[AD]+)!->(?<count>[0-9]+)/;

let encMessage = "";

for(let line of input){

    let codeCounter = 0;

    let match = codePattern.exec(line);

    while(match !== null){

        codeCounter ++;

        match = codePattern.exec(line);
    }

    for(let el of line){

        let elNum = el.charCodeAt();

        let res = elNum - codeCounter;

        let character  = String.fromCharCode(res);

        encMessage += character;
        
    }
}

console.log(encMessage)

}

starEnigma([
    '3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    //'GQhrr|A977777(H(TTTT',
    //'EHfsytsnhf?8555&I&2C9555SR'
])
