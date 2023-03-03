function maxNumber(arr){

    let top = 0;
    let newArr = [];
    let num = 0;

    for(let i = 0; i<arr.length; i++){
       let temp = arr[i];

       if(i === arr.length-1){
        top = temp
       }
       
       if(temp === arr[i+1]){
        continue;
       }
       //index = i+1
       ///while(index < arr.length)???
      index = i+1;
       while(index < arr.length){
        let tempI = arr[index];
        if(temp > tempI){
            top = temp;
        }else {
            top = 0;
            //break;
        }

        index++
       }
       
       if(top > 0){
       newArr.push(top)
       }

       


     

       
    }

    console.log(newArr.join(" "))



}

maxNumber([27, 19, 42, 2, 13, 45, 48])
