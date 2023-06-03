function listOfProducts(arr){

    //sort by name
    //put number infront of and print
    
    let sortingNames = sort(arr);
    let printNum = print(sortingNames);

    function sort(input){
        input.sort();

        return input;
    }

    function print(input){

        index = 0;
        while(index < input.length){
            let temp = input[index];

            console.log(`${index+1}.${temp}`)

            index++;
        }
    }



}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])
