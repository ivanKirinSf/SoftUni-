function distinctArray(input){

    let uniqArr = [];
    for(let el of input){
        if(uniqArr.indexOf(el) === -1){
            uniqArr.push(el)
        }
    }

    console.log(uniqArr.join(" "));




}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])
