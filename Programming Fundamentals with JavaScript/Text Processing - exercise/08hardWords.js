function hardWords(arr){

    let str = arr.shift();    

    //console.log(str);

    let arrWords = arr.shift();

    let arrStr = str.split(" ");    

    //console.log(arrStr);

    let isValid = false;

    let count = 0;

    let newWord = "";

    let replacedStr = str;    

    for(let i = 0; i < arrStr.length; i++){

        let wordStr = arrStr[i];

        if(wordStr.includes(".")){

            wordStr = wordStr.replace(".", "")
        }

        if(wordStr.includes(",")){

            wordStr = wordStr.replace(",", "")
        }        

        for(let ch of wordStr){

            if(ch === "_"){

                isValid = true;

                count = wordStr.length;

                newWord += "_"

            }else{

                newWord = "";

                isValid = false;

                break;

            }
        }

        if(isValid === true){

             for(let k = 0; k < arrWords.length; k++){

               let wordK = arrWords[k];
               
               if(newWord.length === wordK.length){

                replacedStr = replacedStr.replace(newWord, wordK);

                break;

               }

             }

             

             //console.log(str)

        }

        //console.log(wordStr)

    }


    console.log(replacedStr)

}

hardWords(

    ['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]                   
        
)
