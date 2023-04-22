function palindromeIntegers(input){

    let palindrome = number(input);
    

    return palindrome



    function number(arr){

        let palidArr = [];
        
        for(let i = 0; i<arr.length; i++){
            let temp = arr[i];

            let text = temp.toString();

            let text2 = "";

            

            index = text.length-1;
            while(index >= 0){

                let temp = text[index];

                text2 += temp;

                index--;               

            }

            if(text === text2){

                
                console.log("true")

            }else{
                console.log("false")
            }

        }


        
        


    }



    

    

    

}

palindromeIntegers([32,2,232,1010])
