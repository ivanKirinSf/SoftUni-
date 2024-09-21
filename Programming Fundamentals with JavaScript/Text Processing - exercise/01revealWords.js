function revealWords(words, txt) {

    let arrWords = words.split(", ");

    let arrTxt = txt.split(" ");

    //console.log(arrTxt);

    for (let elWords of arrWords) {

        let tempWords = elWords;

        let wordStars = '*'.repeat(tempWords.length);

        for (let i = 0; i < arrTxt.length; i++) {

            let tempTxt = arrTxt[i];

            if (wordStars === tempTxt) {

                arrTxt.splice(i, 1, tempWords);

            }


            //console.log(tempTxt)
        }

        //for(let i = 0; i < arrTxt)


    }

    console.log(arrTxt.join(" "))

}

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages')
