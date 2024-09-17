function revealWords(word, txt){

    let arr = txt.split(" ");

    let counter = 0;

    for(let i = 0; i < arr.length; i++){

        for(let ch of arr[i]){

            if(ch === "*"){

                counter ++;

            }else{
                 break;
            }
        }
    }

    //console.log(arr)

}

revealWords('great',
'softuni is ***** place for learning new programming languages'
)
