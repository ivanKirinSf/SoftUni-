function numbers(input){

    let arr = input.split(" ");
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        let temp = Number(arr[i]);
        sum += temp;   
    }

    let avg = sum/arr.length;
    let res = [];

    for(let el of arr){
        if(el > avg){
            res.push(el);          
        }        
    }

    res.sort((a, b) => b-a);
    final = [];


    for(let i = 0; i < 5; i++){
        if(res[i] !== undefined){

            final.push(res[i])

        }
    }


    if(final.length === 0){
        console.log("No")
    }
    console.log(final.join(" "))
    //console.log(avg)

}

numbers('10 20 30 40 50')
