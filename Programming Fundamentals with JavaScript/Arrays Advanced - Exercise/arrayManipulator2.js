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

            //let indexAddMany = Number(temp[1]);
            //let numsToAdd = temp.splice(2,temp.length-2 ); 
            //let nums = numsToAdd.map(Number);
            //integers.splice(indexAddMany, 0, ...nums);
            let idx = Number(temp[1]);
            temp.splice(0,2);
            let numToAdd = temp.map(Number);
            integers.splice(idx, 0, ...numToAdd); 
            
            
            break;
            
            case "contains": 
            let elementContains = Number(temp[1]);
            let indexContains = integers.indexOf(elementContains);
            console.log(indexContains)
            break;

            case "remove":
                let indexRemove = Number(temp[1]);
                integers.splice(indexRemove, 1);
                break;

                case "shift": 
                let positions = Number(temp[1]);
                let numbers = integers.splice(0,positions); 
                let num = numbers.length;       
                for(let i = 0; i < num; i++){
                    let firstNum = numbers.shift();
                    integers.push(firstNum);
                };
                break; 

                case "sumPairs":

                let arrSum = [];
                let el = 0;
                let isOdd = false;
                

                if(integers.length % 2 !== 0){
                    isOdd = true;
                    let element = integers.pop();
                    el = element
                }               
                
                for(let i = 0; i<integers.length; i+=2){
                    let temp = Number(integers[i]);
                    let temp2 = Number(integers[i+1]);
                    let sum = temp + temp2;
                    arrSum.push(sum);
                };

                if(isOdd === true){
                    arrSum.push(el)
                }

                integers = arrSum;

                break;

                case "print": 

                console.log(`[ ${integers.join(", ")} ]`);
                break;    
        }
    }   
    
}
