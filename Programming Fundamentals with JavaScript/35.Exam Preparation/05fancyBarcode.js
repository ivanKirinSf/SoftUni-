function fancyBarcode(input){

    let isValid = true;

    


    let n = input.shift();

    for(let line of input){

        let str = line.split("");

        if(str[0] === "@"){

            let spliced = str.splice(0, 1);

            let counter = 0;

            index = 0;
            while(str[index] ==="#"){

                let spliced = str.splice(0, 1);

                counter += 1;

                index++;
            }

            if(counter < 0){

                isValid = false;

                continue;


            }else if(counter > 0){

                
            }

            
        }else if(str[0] !== "@"){

            isValid = false;

        }
    }

    //console.log(input)


}

fancyBarcode([
"3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"
])
