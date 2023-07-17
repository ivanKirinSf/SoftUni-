function arrayManipulator(arr1, arr2){

    
    let integers = arr1.map(Number);
    let commands = arr2;

    for(let i = 0; i<commands.length; i++){
        let temp = commands[i].split(" ");
        let command = temp[0];

        switch(command){

            case "add": 

            let index = Number(temp[1]);

            let element = Number(temp[2]);

            integers.splice(index, 0, element);
            
            break;

            case "addMany":

            let indexAddMany = Number(temp[1]);

            temp.splice(0, 2);            

            let numsToAdd = temp.map(Number);

            integers.splice(indexAddMany, 0, ...numsToAdd);

            console.log(integers);

        }
    }

    console.log(integers);
    
}

arrayManipulator([1, 2, 3, 4, 5],
[
 'addMany 5 9 8 7 6 5',
 //'contains 1',
 //'contains 3',
 //'print'
])
