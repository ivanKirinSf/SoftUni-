function arrayManipulator(arr1, arr2){

    let numbers = arr1;    
    
    let commands = arr2;

    for(let i = 0; i < commands.length; i++){
        let temp = commands[i].split(" ");
        let command = temp[0]

       if(command === "add"){
        let index = Number(temp[1]);
        let element = Number(temp[2]);

        numbers.splice(index, 0, element)

       }else if(command === "addMany"){
        let index = Number(temp[1]);
        temp.splice(0,2);
        let numsToAdd = temp.map(Number);
        numbers.splice(index, 0, ...numsToAdd)

        console.log(numsToAdd)
       }else if(command === "contains"){
        let element = Number(temp[1]);
        let index = numbers.indexOf(element)
        console.log(index);
       }       

    } 
    
    console.log(numbers)

}

arrayManipulator(
    [1, 2, 3, 4, 5],
    [
        //'add 1 8', 
        //'addMany 5 9 8 7 6 5'
        'contains 16', 
        //'contains 3', 
        //'print'
    ]
    )
