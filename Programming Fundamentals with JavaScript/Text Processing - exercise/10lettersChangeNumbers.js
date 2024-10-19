function lettersChangeNumbers(txt){

    let arrTxt = txt.split("");

    let newArr = arrTxt;

    for(let p = 0; p < newArr.length; p++){

        let tempP = arrTxt[p];

        if(tempP === " "){

            for(let k = p+1; k < newArr.length; k++){

                if(newArr[k] === " "){

                    newArr.splice(index, 1);

                }else{
                    
                    break;
                }

            }
            
        }

    }

    //console.log(arrTxt)

    let arr = newArr.join("");

    //console.log(arr)
    
    arr = arr.split(" ");

    //console.log(arr)

    let num = ""

    let alphabetUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    let alphabetLow = "abcdefghijklmnopqrstuvwxyz";

    let res = 0;

    let arrRes = [];
    
    for(let i = 0; i < arr.length; i++){

        let temp = arr[i].split("");        

        let firstLetter = temp.shift();

        let lastLetter = temp.pop();

        let firstCode = firstLetter.charCodeAt();

        let lastCode = lastLetter.charCodeAt();

        num = Number(temp.join(""));        

        if(firstCode >= 65 && firstCode <= 90){

            let firstPos = alphabetUp.indexOf(firstLetter) + 1;
         
            res = num / firstPos;

            //console.log(res);

        }else if(firstCode >= 97 && firstCode <= 122){

            let firstPos = alphabetLow.indexOf(firstLetter) + 1;
            
            res = num * firstPos; 
            
            //console.log(res);
            
        }

        if(lastCode  >= 65 && lastCode <= 90){

            let lastPos = alphabetUp.indexOf(lastLetter) + 1;

            res = res - lastPos;

        }else if(lastCode  >= 97 && lastCode <= 122){

            let lastPos = alphabetLow.indexOf(lastLetter) + 1;

            res = res + lastPos;

        }

        arrRes.push(res);

    }

    //console.log(num);

    let result = 0;

    for(let el of arrRes){

        result += el;
    }

    console.log(result.toFixed(2));

}

lettersChangeNumbers( 'P34562Z q2576f   H456z' )
