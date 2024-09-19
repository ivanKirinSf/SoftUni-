function revealWords(words, txt){

    let wordsData = words.split(", ");

    let word = "";

    let wordStars = "";

    if(wordsData.length > 1){

        

        for(let el of wordsData){

            word = el;

            let wordStars = "*".repeat(word.length);

            if(txt.includes(wordStars)){

                while(txt.includes(wordStars)){

                txt = txt.replace(wordStars, word);

                }
              

            }        



            //console.log(wordStars)
        }

    }else{

        word = words;

        let wordStars = "*".repeat(word.length);

        if(txt.includes(wordStars)){

            while(txt.includes(wordStars)){

                txt = txt.replace(wordStars, word);

            }           

        }   
        //console.log(wordStars)
    }    

    console.log(txt)

}

revealWords('great, learning',
'softuni is ***** place for ******** new programming languages')
