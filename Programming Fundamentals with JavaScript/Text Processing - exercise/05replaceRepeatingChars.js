function replaceRepeatingChars(str){

    let arr = str.split("");

    let counter = 0;

    for(let i = 0; i < arr.length; i++){

        let charA = arr[i];   

        let index = i;
        while(charA === arr[index]){

            counter += 1;

            index++
        }

        if(counter > 1){

            arr.splice(i, counter, charA);

            counter = 0;
        }

        counter = 0;
    }

    console.log(arr.join(""))

}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')
