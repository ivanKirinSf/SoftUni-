function secretChat(input){

    let message = input.shift();

    for(let i = 0; i < input.length; i++){
        let temp = input[i].split(":|:"); 
        let command = temp.shift(); 
        let value = temp;

        switch(command){
            case "ChangeAll":
                let substring = value.shift();
                let replacement = value;
                console.log(replacement)
                if(message.includes(substring)){
                    message = message.replace(substring, replacement)
                }
                break;
                case "Reverse":
                    let substringR = value;
                    if(message.includes(substringR)){
                        message = message.replace(substringR, "");
                    }                    
                    break;                    
        }      
        
    }

    console.log(message)

}

secretChat([
    'Hiware?uiy',
    //'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    //'Reverse:|:jd',
    //'InsertSpace:|:3',
    //'InsertSpace:|:7',
    //'Reveal'
  ])
