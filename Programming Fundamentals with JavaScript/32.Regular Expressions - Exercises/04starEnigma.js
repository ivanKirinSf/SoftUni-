function starEnigma(input){

    let num = input.shift();

    for(let el of input){

        let message = el.split("");

        let countingMess = el.toLowerCase().split("");

        let counter = 0;

        for(let char of countingMess){

            if(char === "s"){
                counter += 1
            }
            if(char === "t"){
                counter += 1
            }
            if(char === "a"){
                counter += 1
            }
            if(char === "r"){
                counter += 1
            }


        }

        console.log(counter)
    }

}

starEnigma([
    '3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
])
