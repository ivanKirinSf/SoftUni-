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

            if(index >= 0 || index < arr.length)
            arr.splice(index, 0, space);

            console.log(arr.join(""));


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
                            let reverseStop = true;
                            let reversed = substring.reverse();
                            arr.splice(indexR, reversed.length);
    
                            for(let a = 0; a<reversed.length; a++){                            
                                arr.push(reversed[a])
                            }
            }
            }               
                
            }
            //console.log(substring)
             
        }

        console.log(arr.join(""));

    }else if(command === "ChangeAll"){

        let substringC = temp.shift();
        let replacementC = temp.shift();

        for(let b = 0; b < arr.length; b++){
            
            if(arr[b] === substringC){
                arr.splice(b, 1, replacementC)
            }
        }
        console.log(arr.join(""))
    }else if(command === "Reveal"){

        console.log(`You have a new text message: ${arr.join("")}`);

        //break;

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
