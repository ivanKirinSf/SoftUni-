function giftsFromSanta(input){

    let numM = Number(input[1]);
    let numN = Number(input[0]);
    let numS = Number(input[2]);
    let text = ""


    for(let i = numM; i >= numN; i--){
        let temp = i;

        if(temp % 2 === 0 && temp % 3 === 0){
           
           if(temp !== numS){

            text += temp + " ";
            
           }else if(temp === numS){
            break;
           }
            
        }
    }

    console.log(text)

}

giftsFromSanta([
"1",
"36",
"12"
])
