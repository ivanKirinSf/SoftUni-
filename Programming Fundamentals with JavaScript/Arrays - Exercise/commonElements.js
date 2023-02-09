function commonElements(arr1, arr2){

    for(let i = 0; i<arr1.length; i++){
        let currentWord = arr1[i];
        if(arr2.includes(currentWord)){
            console.log(currentWord);

        }
        

    }


}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2'])
