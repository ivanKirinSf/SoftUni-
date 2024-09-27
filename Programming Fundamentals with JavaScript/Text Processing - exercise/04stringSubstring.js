function stringSubstring(word, str){

    //let wordData = word.toLowerCase();
    let wordData = word.toUpperCase();

    let arrStr = str.toUpperCase().split(" ");

    let isFind = false;

    for(let el of arrStr){

        if(el === wordData){

            isFind = true;

            console.log(word);

            break;

        }

        //console.log(el)
    }
    //console.log(arrStr)

    if(isFind === false){

        console.log(`${word} not found!`)

    }

}

stringSubstring('python',
'JavaScript is the best programming language')
