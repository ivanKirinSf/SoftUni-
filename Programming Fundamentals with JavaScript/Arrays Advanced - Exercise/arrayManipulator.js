function arrayManipulator(arr1, arr2){

    for(let i = 0; i<arr2.length; i++){
        let temp = arr2[i].split(" ");

        if(temp[0] === 'add'){

            let index = Number(temp[1]);
            let element = Number(temp[2]);
            
            arr1.splice(index, 0, element)

        }else if(temp[0] === 'addMany'){
            let index = Number(temp[1]);
            temp.splice(0,2);
            let elements = temp.map(Number)
            arr1.splice(index, 0, ...elements)
            

        }else if(temp[0] === 'contains'){

            let element = Number(temp[1]);

            let index = arr1.indexOf(element);

            console.log(index)

        }else if(temp[0] === 'remove'){

            let index = Number(temp[1]);

            arr1.splice(index,1)

        }else if(temp[0] === 'shift'){

            let positions = Number(temp[1]);

            for(let i = 0; i < positions; i++){

                let element = arr1.shift();

                arr1.push(element) 

            }                                  

        }else if(temp[0] === 'sumPairs'){

            let newArr = [];

            if(arr1.length % 2 !== 0){
                arr1.push(0)
            }

            for(let i = 0; i<arr1.length; i+=2){

                let temp1 = Number(arr1[i]);

                let temp2 = Number(arr1[i+1]);

                let sum = temp1 + temp2;

                newArr.push(sum);
                
            }

            arr1 = newArr

        }else if(temp[0] === 'print'){

            return console.log(`[ ${arr1.join(", ")} ]`)

        }

     

    }

}

arrayManipulator([2, 2, 4, 2, 4],
    ["add 1 4", "sumPairs", "print"]                   
    )

}

}
