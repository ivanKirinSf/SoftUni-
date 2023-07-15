function distinctArray(input){

    let arr = input;
    let newArr = [];
    

    for(let i = 0; i<arr.length; i++){
        let temp = Number(arr[i]);

        if(newArr.indexOf(temp) === -1){

            newArr.push(temp)

        }else{
            continue;
        }
        

             
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
