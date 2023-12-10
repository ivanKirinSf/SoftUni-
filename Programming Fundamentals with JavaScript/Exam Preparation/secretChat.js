function secretChat(input){

    let message = input.shift();
    for(let i = 0; i<input.length; i++){
        let temp = input[i].split(":|:");
        let command = temp.shift();
        let value = temp;
        //console.log(value)

        switch(command){
            case "ChangeAll": {
                let substring = value.shift();
                let replacement = value.shift();
                //console.log(substring)
                if(message.includes(substring)){
                    message = message.replace(substring, replacement);             
                }
                console.log(message);
            } break;
            case "Reverse": {
                let substring = value.shift();
                if(message.includes(substring)){
                    message = message.replace(substring, "");
                    let reversed = reverseStr(substring);
                    message = message+=reversed;
                    
                }else{
                    console.log("error")
                }
                console.log(message);
            } break;

            case "InsertSpace": {
                let index = Number(value.shift());
                let leftSide = message.substring(0,index);
                let rightSide = message.substring(index);
                message = leftSide + " " + rightSide;
                console.log(message);
            } break;            
        }

        if(command === "Reveal"){
            console.log(`You have a new text message: ${message}`);

            break;
            
        }
    }

    function reverseStr(str){
        let text = str.split("").reverse().join("");
        return text
    }

    //console.log(message)

}


secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    //'Reverse:|:jd',
    //'InsertSpace:|:3',
    //'InsertSpace:|:7',
    //'Reveal'
  ]  )
