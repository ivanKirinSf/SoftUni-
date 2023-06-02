function listOfProducts (arr){

let sorting = products(arr);
let numbers = listNum(sorting);

function products(input){

    return input.sort();
}

function listNum(input){
    for(let i = 0; i<input.length; i++){
        let temp = input[i]

        console.log(`${i+1}.${temp}`)
    }
}




    
}

listOfProducts (['Potatoes', 'Tomatoes', 'Onions', 'Apples'])
