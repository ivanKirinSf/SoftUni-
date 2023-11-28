function imitationGame(input){

    let message = input.shift();

    

    for(let i = 0; i<input.length; i++){
        let temp = input[i].split("|");
        let command = temp.shift();

        if(command === "ChangeAll"){

            let value = temp[0];

            let num = message.includes(value);

            console.log(num)
            
        }
    }

    //let num = message.includes(z)
    console.log(num)
}

imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ]
  )
