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
            let value = temp.shift().split("");
            
            console.log(value);

            if(index >= 0 || index <= message.length-1){

                for(let char of value){
                    arr.splice(index,0, char);
                    index += 1;
                }
                
            }
            
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

            break;

        }
        
    }

    for(let a = 0; a < arr.length; a++){
        let tempA = arr[a];
        str += tempA;        
    }

    console.log(`The decrypted message is: ${str}`);
    
}

imitationGame(['owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]  )
