function arrayManipulator(arr1, arr2){

    let commands = arr2;
    let integers = arr1;

    for(let i = 0; i<commands.length; i++){
        let temp = commands[i].split(" ");
        let command = temp[0];

        if(command === "add"){
            let index = Number(temp[1]);
            let element = Number(temp[2]);
            integers.splice(index, 0, element);            
        }else if(command === "addMany"){
            let index = Number(temp[1]);
            temp.splice(0,2)
            temp.map(Number);
            integers.splice(index, 0, ...temp);         

        }else if(command === "contains"){
            let element = Number(temp[1]);
            let index = integers.indexOf(element);
            console.log(index);

            }else if(command === "remove"){
                let index = Number(temp[1]);
                integers.splice(index, 1);

            }else if(command === "shift"){
                let positions = Number(temp[1]);
                
                for(let i = 0; i < positions; i++){
                    let temp = integers.shift();
                    integers.push(temp);
                }               
            }else if(command === "sumPairs"){
                
                let arrSum = [];
                
                if(integers.length % 2 !== 0){
                    integers.push(0)
                }

                for(let i = 0; i<integers.length-1; i+=2){
                    let temp = Number(integers[i]);
                    let temp2 = Number(integers[i+1]);
                    let sum = temp + temp2;

                    arrSum.push(sum)


                    //console.log(arrSum)
                }

                integers = arrSum;                            
                
            }else if(command === "print"){
                return console.log(`[ ${integers.join(", ")} ]`);
                
            }
    } 

}

arrayManipulator([1, 2, 3, 4, 5],
    ["addMany 5 9 8 7 6 5",
     "contains 15", 
     "remove 3", 
     "shift 1", 
     "print"]
           
)
