function мaxSequence(arr){

    let newArr = [];
    let maxArr = [];

   for(let i = 0; i<arr.length;i++){
    let temp = arr[i];
    let temp2 = arr[i+1];
    newArr = [];

    if(temp === arr[i-1]){
        continue;
    }
    index = i;
    while(temp === arr[index]){
        let num = arr[index];

        newArr.push(num)

        index++;

    }


    if(newArr.length > maxArr.length){
        maxArr = newArr;
        newArr = [];

    }

   }

   console.log(maxArr.join(" "))

}

мaxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3])
