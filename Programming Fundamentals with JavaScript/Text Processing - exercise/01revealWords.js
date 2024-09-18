function revealWords(words, txt){

    let word = "";

    let wordStars = "";

    let counter = 0;

    if(words.length >= 2){

        let wordsData = words.split(", ");

        for(let el of wordsData){

            word = el;

            let wordStars = "*".repeat(word.length);

            if(txt.includes(wordStars)){

                txt = txt.replace(wordStars, word)

            }

            



            console.log(wordStars)
        }

    }    

    console.log(txt)

}

revealWords('great, learning',
'softuni is ***** place for ******** new programming languages')
