function starEnigma(input){

    let numOfmess = input.shift();

    let decryptionKey = 0;

    let encryptedMessage = "";
    //console.log(input)

    for(let el of input){

        let encMessage = el;

        let caseInsensitiveMess = encMessage.toLowerCase().split("");

        for(let char of caseInsensitiveMess){

            if(char === "s"){
                decryptionKey += 1;
            }else if(char === "t"){
                decryptionKey += 1;
            }else if(char === "a"){
                decryptionKey += 1;
            }else if(char === "r"){
                decryptionKey += 1;
            }
        }

        for(let char2 of caseInsensitiveMess){

            let value = char2.charCodeAt();

            let res = value - decryptionKey;

            let enChar = String.fromCharCode(res)

            encryptedMessage += enChar;

        }

        console.log(encryptedMessage)

        //console.log(caseInsensitiveMess)
    }

}

starEnigma([
    '3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    //'GQhrr|A977777(H(TTTT',
    //'EHfsytsnhf?8555&I&2C9555SR'
])
