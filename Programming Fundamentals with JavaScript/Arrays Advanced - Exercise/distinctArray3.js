function distinctArray(input){

    let arr = input;
    let newArr = [];
    

    for(let i = 0; i<arr.length; i++){
        let temp = Number(arr[i]);

        newArr.push(temp)

             
        arr.splice(i, 1);

        i -=1;

        let index = arr.indexOf(temp);

        if(index !== -1){
            arr.splice(index, 1);
            
        }
    }

    console.log(newArr.join(" "))

       

}

distinctArray([1, 1, 1, 2])
