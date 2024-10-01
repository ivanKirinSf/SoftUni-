function pascalCaseSplitter(str){

    let start = 0;

    let end = 0;

    let isWord = false;

    let arrOfWords = [];

    for(let i = 0; i < str.length; i++){

        let ch = str[i];

        let chCode = ch.charCodeAt();

        if(chCode >= 25 && chCode <= 90){

            start = i;

            for(let k = i+1; k < str.length; k++){

                let chK = str[k];

                let chCodeK = chK.charCodeAt();

                if(chCodeK >= 25 && chCodeK <= 90){

                    end = k;
                    
                    i = k-1;
                    
                    word = str.slice(start, end);

                    arrOfWords.push(word);

                    break;
                }  
                
                if(k === str.length-1){

                    end = k+1;                
                    
                    word = str.slice(start, end);

                    arrOfWords.push(word);

                    break;

                }

            }

        }

        //console.log(arrOfWords)
    }  
    
    console.log(arrOfWords.join(", "));

}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
