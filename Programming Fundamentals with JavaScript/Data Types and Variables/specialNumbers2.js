function specialNumbers(input){

    let num = input;

    for(let i = 1; i<=num ; i++){
        let temp = i;

        let sum = 0;

        let text = temp.toString();

        for(let k = 0; k < text.length; k++){

            let tempK = Number(text[k]);

            sum += tempK

        }

        if(sum === 5 || sum === 7 || sum === 11){

            console.log(`${temp} -> True`)

        }else {

            console.log(`${temp} -> False`)

        }
        
    }

}

specialNumbers(15)
