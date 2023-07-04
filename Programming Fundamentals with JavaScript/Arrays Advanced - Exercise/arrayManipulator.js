function arrayManipulator(arr1, arr2){

    let numbers = arr1.map(Number)

    

    for(let i = 0; i < arr2.length; i++){
        let temp = arr2[i].split(" ");

        let command = temp.shift();

        if(command === "add"){

            let index = temp[0];
            let element = Number(temp[1]);

            numbers.splice(index,0,element);           

        } else if (command === "addMany"){

            let index = Number(temp[0]);
            
            let elements = temp.slice( 1, temp.length);

            let numToAdd = elements.map(Number);           

            

            numbers.splice(index, 0, ...numToAdd)

            
            
        }


        
        
    }

    console.log(numbers)



}

arrayManipulator([1, 2, 4, 5, 6, 7, 8],
    ['sumPairs',
     'print',
     //'contains 1',
     //'contains 3',
     //'print'
    ]
    )
