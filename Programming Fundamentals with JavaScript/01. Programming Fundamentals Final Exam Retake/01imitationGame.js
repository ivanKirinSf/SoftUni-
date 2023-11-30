function imitationGame(input){

    let message = input.shift();
    let arr = message.split(""); 
    let str = "";
    //console.log(arr)

    

    for(let i = 0; i<input.length; i++){
        let temp = input[i].split("|");
        let command = temp.shift();
        

        if(command === "ChangeAll"){

            let substring = temp.shift();          

            let replacement = temp;

            for(let k = 0; k<arr.length ; k++){
                let tempChar = arr[k];
                //console.log(tempChar)
                if(tempChar === substring){
                    arr.splice(k, 1, replacement)
                }
            }

            //console.log(replacement);

            //console.log(value)

            //console.log(num)
            
        }else if(command === "Insert"){
            let index = Number(temp.shift());
            let value = temp;

            arr.splice(index,0, value)
            //console.log(value)
        }else if(command === "Move"){
            let firstN = Number(temp);

            //let firstChar = arr.splice(0, firstN);

            for(let f = 0; f<firstN; f++){
                let tempF = arr.shift();
                arr.push(tempF)
            }


            //console.log(firstChar)
        }else if(command === "Decode"){

            for(let a = 0; a < arr.length; a++){
                let tempA = arr[a];
                str += tempA;        
            }

            console.log(`The decrypted message is: ${str}`)

        }
        
    }
    
}
imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ]
  )
