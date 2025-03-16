function starEnigma(input){

let num = input.shift();

let patternCode = /[STARstar]+/;

let code = 0;

let pattern = /@(?<name>[A-Z][a-z]*)[^@!:>]*:(?<population>[0-9]*)[^@!:>]*!(?<type>[AD]+)!->(?<count>[0-9]+)/;

for(let line of input){
    if(patternCode.test(line)){

        let match = line.match(patternCode);

        while(match !== null){

            code++

        }
    }
}



}

starEnigma([
    '3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    //'GQhrr|A977777(H(TTTT',
    //'EHfsytsnhf?8555&I&2C9555SR'
])
