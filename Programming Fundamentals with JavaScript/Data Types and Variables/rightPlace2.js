function rightPlace(string1, char, string2){

    let text = "";

    for(let i = 0; i < string1.length; i++){
        let temp = string1[i];
        
        if(temp !== "_"){

        text += temp            

        } else if(temp === "_"){
            text += char;
        }
    }

    if(text === string2){
        console.log(`Matched`);
    }else if(text !== string2){
        console.log(`Not Matched`);
    }

}

rightPlace('Str_ng', 'I', 'StrIng')
