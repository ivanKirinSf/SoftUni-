function starEnigma(input){

let num = input.shift();

let decKey = 0;

let decMessage = "";

for(let el of input){

    let encMessage = el.split("");

    let lowered = el.toLowerCase().split("");

    for(let char of lowered){

        if(char === "s"){

            decKey += 1;

        }else if(char === "t"){

            decKey += 1;

        }else if(char === "a"){

            decKey += 1;

        }else if(char === "r"){

            decKey += 1;

        }
    }   
    
    for(let char of encMessage){

       let value = char.charCodeAt(0);

       let res = value - decKey;

       let decChar =  String.fromCharCode(res);

       decMessage += decChar;

       //console.log(decChar);

    }

    console.log(decMessage)
}

console.log(num)

}

starEnigma([
    '3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    //'GQhrr|A977777(H(TTTT',
    //'EHfsytsnhf?8555&I&2C9555SR'
])
