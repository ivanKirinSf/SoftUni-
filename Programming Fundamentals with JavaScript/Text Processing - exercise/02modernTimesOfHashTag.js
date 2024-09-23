function modernTimesOfHashTag(txt) {

    let arr = txt.split(" ");

    let word = "";

    let isSpecial = false;

    let special = "";

    for (let i = 0; i < arr.length; i++) {

        let temp = arr[i];


        if (temp[0] === "#") {

            word = arr[i];

            if (word.length <= 1) {

                continue;
            }

            for (let ch of word) {

                let code = ch.charCodeAt();


                if (code < 48 || code > 57) {

                    isSpecial = true

                } else {

                    isSpecial = false;

                    break;
                }

                special = word;
            }

            if (isSpecial === true) {

                let size = special.length;

                let wordSubstring = special.substring(1, size);

                console.log(wordSubstring)
            }


        }

        //console.log(temp[0])
    }

    //console.log(arr);

}

modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign')
