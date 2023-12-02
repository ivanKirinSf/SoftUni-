function imitationGame(input){

    let message = input.shift();
    let arr = message.split("");
    let newArr = "";
    //console.log(arr)
    
    for(let i = 0; i<input.length; i++){
        let temp = input[i].split("|");
        let command = temp.shift();

        if(command === "Move"){
            let num = Number(temp.shift());

            index = 0;
            while(index < num){

                let char = arr.shift();
                arr.push(char);

                index++;

            }
            //console.log(num);
        }else if(command === "Insert"){
            let index = Number(temp.shift());
            let value = temp.shift().split("")

            if(index >= 0 || index < arr.length){

                for(let char of value){

                    arr.splice(index, 0, char);
                    index++;

                }

            }
           //console.log(value)
        }else if(command === "ChangeAll"){
            let substring = temp.shift();
            let replacement = temp.shift();

            for(let c = 0; c < arr.length; c++){
                let tempChar = arr[c];

                if(tempChar === substring){
                    arr.splice(c, 1, replacement)
                }
            }            
        }else if(command === "Decode"){

            break;

        }
        
    }

    for(let el of arr){
        newArr += el
    }

    console.log(`The decrypted message is: ${newArr}`)

}

imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
  ]
  )
