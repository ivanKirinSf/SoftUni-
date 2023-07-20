function arrayManipulator(numbers, commands){

    for(let command of commands){
        let temp = command.split(" ");

        if(temp[0] === "add"){
            let index = Number(temp[1]);
            let element = Number(temp[2]);

            numbers.splice(index, 0, element);            
        }else if(temp[0] === "addMany"){

            let index = Number(temp[1]);
            temp.splice(0,2);
            let numsToAdd = temp.map(Number);
            numbers.splice(index, 0, ...numsToAdd);          

        }else if(temp[0] === "contains"){

            let element = Number(temp[1]);
            let index = numbers.indexOf(element);
            console.log(index);
            
        }else if(temp[0] === "remove"){
            let index = Number(temp[1]);
            numbers.splice(index, 1);
        }else if(temp[0] === "shift"){
            let positions = Number(temp[1]);            
            index = 1;
            while(index <= positions){

                let num = numbers.shift();
                numbers.push(num);                
                index++
            }          

        }else if(temp[0] === "sumPairs"){

            let arr = [];

            if(numbers.length % 2 !== 0){
                numbers.push(0);
            }

            index = 0;
            while(index < numbers.length){
                let temp = Number(numbers[index]);
                let temp2 = Number(numbers[index+1]);
                let sum = 0;
                sum = temp + temp2;
                arr.push(sum);

                index+=2;
            }

                //for(let i = 0; i<numbers.length; i+=2){
                //let temp = Number(numbers[i]);
                //let temp2 = Number(numbers[i+1]);
               // let sum = 0;
                //sum = temp + temp2;

               // arr.push(sum)

            //}

            numbers = arr;

        }else if(temp[0] === "print"){
            console.log(`[ ${numbers.join(", ")} ]`);
            break;
        }
    }    
}
