function sorting(input){

    input.sort((a,b) => a-b);

    let newArr = [];

    index = 0;

    if(input.length % 2 === 0){

        while(index < input.length/2){

            let temp = input[index];
            let temp2 = input[input.length-1-index];
    
            newArr.push(temp2);
            newArr.push(temp);
    
            index++
        }

    } else if(input.length % 2 !== 0){
        let num = (input.length -1)/2;

        while(index <= num-1){

            let temp = input[index];
            let temp2 = input[input.length-1-index];
    
            newArr.push(temp2);
            newArr.push(temp);
    
            index++
        }

        newArr.push(input[num])
    }
    
    //console.log(input.join(" "))
    console.log(newArr.join(" "))

}

sorting([34, 2, 32, 45, 690, 6, 32, 7, 19])
