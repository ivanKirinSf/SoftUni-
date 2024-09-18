function revealWords(word, txt){

    let arr = txt.split(" ");

    let counter = 0;

    let stars = "";

    for(let i = 0; i < arr.length; i++){

        for(let ch of arr[i]){

            if(ch === "*"){

                counter ++;

            }else{
                 break;
            }
        }
        
    }

    if(counter === word.length){

        stars = "*".repeat(counter);

        //console.log(stars)      

    }

    let replacedText = txt.replace(stars, word)

    console.log(replacedText);

}

revealWords('great',
'softuni is ***** place for learning new programming languages')
