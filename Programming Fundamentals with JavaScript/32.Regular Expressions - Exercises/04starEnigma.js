function starEnigma(input){

let num = input.shift();

let codePattern = /[STARstar]/g;

let pattern = /@(?<name>[A-Z][a-z]*)[^@!:>]*:(?<population>[0-9]*)[^@!:>]*!(?<type>[AD]+)!->(?<count>[0-9]+)/;

let codeCounter = 0;

let decMessage = "";

for(let line of input){

    if(codePattern.test(line)){

        let match = codePattern.exec(line);

        while(match !== null){

            codeCounter ++;

            match = codePattern.exec(line);
        }
    }

    for(let char of line){

        let value = char.charCodeAt();

        let res = value - codeCounter;

        let newCh = String.fromCharCode(res)

        decMessage += newCh;        
    }
}


console.log(decMessage)


}

starEnigma(
    ['3',
        "tt(''DGsvywgerx>6444444444%H%1B9444",
        //'GQhrr|A977777(H(TTTT',
        //'EHfsytsnhf?8555&I&2C9555SR'
        ]
    )
