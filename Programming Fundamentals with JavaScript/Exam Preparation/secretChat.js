function secretChat(input){

    let message = input.shift();
    let arr = message.split("");
    //console.log(arr)


    for(let i = 0; i<input.length; i++){
        let temp = input[i].split(":|:");
        let command = temp.shift();

        if(command === "InsertSpace"){
            let index = Number(temp.shift());
            let space = " ";
            let isCorrect = false;

            if(index >= 0 || index < arr.length){
                isCorrect = true;
                arr.splice(index, 0, space);

            }
            

            if(isCorrect === true){

                console.log(arr.join(""));

            }
            


        }else if(command === "Reverse"){
            let substring = temp.shift().split("");
            let isEqual = false;
            let reverseStop = false;

            if(reverseStop === false){

                for(let r = 0; r < arr.length; r++){
                
                    let temp = arr[r];
    
                    if(temp === substring[0]){
                        let indexR = r;
                        
                        index = 0;
                        while(index < substring.length){
                            if(arr[r + index] !== substring[index]){
                                isEqual = false
                                break;
                            }else {
                                isEqual = true;
                            }                        
                            index++
                        }
    
                        if(isEqual === true){
                            reverseStop = true;
                            let reversed = substring.reverse();
                            arr.splice(indexR, reversed.length);
    
                            for(let a = 0; a<reversed.length; a++){                            
                                arr.push(reversed[a])
                            }

                            break;
            }
            
            }                 
                
            }
            
            //console.log(substring)
             
        }  
        
        if(reverseStop === false){

            console.log(`error`)

        }else if(reverseStop === true){
            console.log(arr.join(""))
        }

        

    }else if(command === "ChangeAll"){

        let substringC = temp.shift();
        let replacementC = temp.shift();
        let isCorrect = false;

        for(let b = 0; b < arr.length; b++){
            
            if(arr[b] === substringC){
                isCorrect = true;
                arr.splice(b, 1, replacementC)
            }
        }

        if(isCorrect === true){
            console.log(arr.join(""))
        }
        
    }else if(command === "Reveal"){

        console.log(`You have a new text message: ${arr.join("")}`);

        break;

    }

    //console.log(arr.join(""))

}
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ]      
  )
