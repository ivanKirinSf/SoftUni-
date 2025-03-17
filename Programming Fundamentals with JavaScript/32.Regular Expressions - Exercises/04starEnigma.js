function starEnigma(input){

let num = input.shift();

let codePattern = /[STARstar]/g;

let pattern = /[^@\-!:>\s]*@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>\s]*!(?<type>[A|D])![^@\-!:>\s]*\->(?<count>\d+)/;

let newMessage = "";

let planetAttackList = new Set();

let planetDestructionList = new Set();

for(let line of input){

    let counter = 0;

    let match = codePattern.exec(line);

    while(match !== null){

        counter ++;

        match = codePattern.exec(line);
    }

    for(let char of line){

        let value = char.charCodeAt();

        let res = value - counter;

        let newChar = String.fromCharCode(res);

        newMessage += newChar

        //console.log(newChar)
    }
}

if(pattern.test(newMessage)){

    let match = newMessage.match(pattern);

    if(match.groups.type === "A"){

        planetAttackList.add(match.groups.name);        
    }

    if(match.groups.type === "D"){

        planetDestructionList.add(match.groups.name);

    }
}

}

starEnigma(
    ['3',
        "tt(''DGsvywgerx>6444444444%H%1B9444",
        //'GQhrr|A977777(H(TTTT',
        //'EHfsytsnhf?8555&I&2C9555SR'
        ]
    )
