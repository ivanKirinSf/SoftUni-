function theImitationGame(input){

    let message = input.shift().split("");

    //console.log(message);

    //let strings = input;

    for(let i = 0; i<input.length; i++){
        let temp = input[i].split("|");
        let command = temp.shift()

        if(command === "Decode"){
            console.log(`The decrypted message is: ${message.join("")}`)
        }else if(command === "ChangeAll"){

            let substring = temp.shift();

            let replacement = temp.shift();

            let index = message.indexOf(substring);
            
            while(index !== -1){
                
                message.splice(index, 1, replacement);
                index = message.indexOf(substring)
            };
            //console.log(replacement)
        }else if(command === "Insert"){

            let index = Number(temp.shift());

            let value = temp.shift();

            message.splice(index, 0, value);

        }else if(command === "Move"){

            let indexMove = Number(temp.shift());

            let index = 0;

            while( index < indexMove ){

                let firstChar = message.shift();
                
                message.push(firstChar);

                index++;

            }

        }

        //console.log(temp)

    }

    //console.log(message)

}

theImitationGame([

    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'

  ])
