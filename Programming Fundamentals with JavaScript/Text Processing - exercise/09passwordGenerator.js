function passwordGenerator(arr){

    let first = arr.shift();

    let second = arr.shift(); 

    let third = arr.shift();
    
    let str = `${first}${second}`;

    let arrStr = str.split("");

    let num = 0;

    for(let i = 0; i < arrStr.length; i++){

        let ch = arrStr[i];

        let code = ch.charCodeAt();

        if(code === 97 || code === 101 || code === 105 || code === 111 || code === 117){

            let thirdCh = third[num].toUpperCase();

            arrStr.splice(i, 1, thirdCh);

            if(num < third.length-1){

                num++;

            }else{

                num = 0;

            }
        }
        
    }

    let final = arrStr.reverse().join("");

    console.log(`Your generated password is ${final}`)

}

passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
    ])
