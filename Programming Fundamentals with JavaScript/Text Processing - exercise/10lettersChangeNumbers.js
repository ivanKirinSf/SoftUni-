function lettersChangeNumbers(txt){

    let arr = txt.split(" ");

    let num = ""

    let alphabetUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    let alphabetLow = "abcdefghijklmnopqrstuvwxyz";
    

    for(let i = 0; i < arr.length; i++){

        let temp = arr[i].split("");        

        let firstLetter = temp.shift();

        let lastLetter = temp.pop();

        let firstCode = firstLetter.charCodeAt();

        num = Number(temp.join(""));      

        

        if(firstCode >= 65 && firstCode <= 90){

            let firstPos = alphabetUp.indexOf(firstLetter) + 1;
         
            let res = num / firstPos;

            console.log(res)

        }

        //let firstPos = firstLetter.charCodeAt();

        //let lastLetter = temp.pop();

        //let lastCode = lastLetter.charCodeAt();

        //num = Number(temp.join(""));



        //console.log(firstCode);

    }

    //console.log(num);

    //console.log(arr);




}

lettersChangeNumbers( 'B12b' )
