function distinctArray(input){

    let newArr = [];

    for(let i = 0; i < input.length; i++){
        let temp = input[i];

        if(newArr.indexOf(temp) === -1){
            newArr.push(temp)
        }      

       
         
    }

    console.log(newArr.join(" "))
    //includes() 

}

distinctArray([20, 8, 12, 13, 4, 4, 8, 5])
