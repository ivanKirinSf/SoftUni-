function searchForANumber (arr1, arr2){

    let takeNum = Number(arr2[0]);
    let delNum = Number(arr2[1]);
    let searched = Number(arr2[2]);
    let collection = [];
    let occurs = 0;

    index = 0;
    while(index < takeNum){

        let temp = Number(arr1[index]);

        collection.push(temp);

        index++;

    }

    collection.splice(0,delNum);

    index = 0;
    while(index < collection.length){

        let temp = Number(collection[index]);

        if(searched === temp){

            occurs += 1;
                        
        }

        index++;
    }
    
        console.log(`Number ${searched} occurs ${occurs} times.`)      

}
