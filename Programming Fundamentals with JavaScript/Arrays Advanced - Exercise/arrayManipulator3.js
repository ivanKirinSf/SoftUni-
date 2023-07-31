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
        numbers.splice(index, 0, ...numsToAdd);
        
       }else if(command === "contains"){
        let element = Number(temp[1]);
        let index = numbers.indexOf(element)
        console.log(index);
       }else if(command === "remove"){
         let index = temp[1];
         numbers.splice(index, 1);
       }else if(command === "shift"){
         let positions = Number(temp[1]);
         for(let i = 0; i<positions; i++){
            let firstNum = numbers.shift();
            numbers.push(firstNum);
         }
       }else if(command === "sumPairs"){
        let newArr = []

        if(numbers.length %2 !== 0){
            numbers.push(0)
        }

        for(let i = 0; i < numbers.length; i+=2){
            let first = Number(numbers[i]);
            let second = Number(numbers[i+1]);
            let sum = first + second;
            newArr.push(sum);            
        }

        numbers = newArr

       } else if(command === "print"){
        return console.log(`[ ${numbers.join(", ")} ]`)
       }     

    }      

}

arrayManipulator(
    [1, 2, 3, 4, 5],
['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
    )
