function arrayManipulator(arr1, arr2){

    let numbers = arr1;    
    
    let commands = arr2;

    for(let i = 0; i < commands.length; i++){
        let temp = commands[i];

        console.log(temp);

    }    

}

arrayManipulator(
    [1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']
    )
