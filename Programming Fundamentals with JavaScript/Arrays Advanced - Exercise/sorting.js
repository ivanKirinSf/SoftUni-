function sorting(input){


    let newArr = [];
     

        input.sort((a,b) => a-b);
          

       for(let i = input.length-1; i >= 0; i--){
        let temp = input[i];

        if( newArr.length === input.length ){

            break;

        }
        newArr.push(temp);

        //let minNum = temp

        for(let k = (input.length-1)-i; k < i; k++){
            let tempK = input[k];

            newArr.push(tempK);
            break;

            

        }

        //newArr.push(minNum);

        }    

    //return newArr.join(" ")
    console.log(newArr.join(" "))
}
   



sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
