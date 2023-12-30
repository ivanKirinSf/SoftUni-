function triplesOfLatinLetters(input){

    let num = Number(input);
    //let text = "";
    let first = "";
    let second = "";
    let third = "";

    for(let i = 0; i < num; i++){
        let temp = i;

        let char = String.fromCharCode(97 + i);

        first = char;

        for(let k = 0; k < num; k++){
            let tempK = k;

            let charK = String.fromCharCode(97 + k);

            second = charK;

            for(let j = 0; j < num; j++){
                let tempJ = j;

                let charJ = String.fromCharCode(97 + j);

                third = charJ;

                console.log(`${first}${second}${third}`);

                //text = "";
                
            }
            
        }

        //console.log(char)

        //text = "";
    }

}

triplesOfLatinLetters('2')
