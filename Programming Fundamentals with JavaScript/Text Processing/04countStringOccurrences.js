function countStringOccurrences(txt, word){

    let str = txt.split(" ");

    let counter = 0;

    for(let i = 0; i < str.length; i++){

        let temp = str[i];

        if(temp === word){

            counter += 1;

        }



        //console.log(temp)
    }

    console.log(counter)

}

countStringOccurrences('softuni is great place for learning new programming languages',
'softuni')
