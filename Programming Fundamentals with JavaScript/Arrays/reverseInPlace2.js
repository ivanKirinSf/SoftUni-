function reverseInPlace(input){

    let num = input.length-1;

    for(let i = 0; i < num ; i++){

        let temp = input[input.length-1]

        input.pop()

        input.splice(i, 0, temp);       

    }

    console.log(input.join(" "));    

}

reverseInPlace(['a', 'b', 'c', 'd', 'e'])
