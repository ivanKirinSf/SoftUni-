function maxNumber(arr){

    let result = []

    let temp = 0;
    let temp2 = 0;
    let max = 0;
    
   for(let i = 0; i<arr.length; i++){
      temp = arr[i];
      if(i === arr.length-1){
        result.push(temp);
        break;

      }

      max = 0;

      for(let k =i+1; k<arr.length; k++){
        temp2 = arr[k];

        if(temp > temp2 || temp2 === undefined){
            max = temp;
      } else {
        max=0;
        break;
      }

      

    }

    if(max != 0){
    result.push(max)
    }

    
}

console.log(result.join(" "))
}



maxNumber([1, 4, 3, 2])
maxNumber([41, 41, 34, 20])
maxNumber([27, 19, 42, 2, 13, 45, 48])
