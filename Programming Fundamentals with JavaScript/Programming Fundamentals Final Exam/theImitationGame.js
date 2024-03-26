function imitationGame(input){

    let message = input.shift().split("");

    for(let i = 0; i < input.length; i++){
        let temp = input[i].split("|");

        let command = temp.shift();

        if(command === "Move"){

            let num = Number(temp.shift());

            index = 0;
            while(index < num){
                let first = message.shift();

                message.push(first);

                index++;
            }           

        }else if(command === "Insert"){

            let index = Number(temp.shift());

            let value = temp.shift().split("").reverse();

            for(let el of value){

                message.splice(index, 0, el);

            }

            //console.log(value);

        }else if(command === "ChangeAll"){

            let substring = temp.shift();

            let replacement = temp.shift();


            let index = message.indexOf(substring);

            while(index !== -1){

                message.splice(index, 1, replacement)

                    index = message.indexOf(substring);

                
            }

            //console.log(substring)

        }else if(command === "Decode"){

            console.log(`The decrypted message is: ${message.join("")}`)
        }

        //console.log(command)
    }

    //console.log(message)

}

imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
])
