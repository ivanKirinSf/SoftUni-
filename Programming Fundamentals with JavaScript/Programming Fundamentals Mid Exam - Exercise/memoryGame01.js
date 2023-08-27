function memoryGame (input) {

    let arr = input.shift().split(" ");
    let listIndexes = input;
    let firstCouple = listIndexes.shift();
    
    while(firstCouple !== "end"){

        let temp = firstCouple.split(" ");

        let index1 = temp.shift();
        let index2 = temp.shift();

        console.log(index1);
        console.log(index2);

        firstCouple = listIndexes.shift();
        
    }


    //console.log(listIndexes)

}

memoryGame ([
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ])
