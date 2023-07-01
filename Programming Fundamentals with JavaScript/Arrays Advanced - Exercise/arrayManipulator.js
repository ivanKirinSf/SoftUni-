function arrayManipulator(numbers, commands){
for(let command of commands){
    let tokens = command.split(" ");

      

    if(tokens[0] === "add"){
        let index = Number(tokens[1]);
        let element = Number(tokens[2]);
        numbers.splice(index, 0, element);        

    } else if (tokens[0] === "addMany"){
        let index = Number(tokens[1]);
        let element = tokens.slice(2, tokens.length);

        for(let i = 0; i<element.length; i++){
            let temp = Number(element[i]);
            numbers.splice(index + i, 0, temp)
        }

        //console.log(element)

    }else if (tokens[0] === "contains"){
        let element = Number(tokens[1]);
        let index = numbers.indexOf(element);        
        console.log(index);

    }else if (tokens[0] === "remove"){ 
        let index = Number(tokens[1]);
        numbers.splice(index, 1);

    }else if (tokens[0] === "shift"){
        let positions = Number(tokens[1]);
        let spliced = numbers.splice(0,positions);

        //console.log(spliced)

        index = 0;
        while(index < spliced.length){
            let temp = spliced[index];
            numbers.push(temp);
            index++;
        }

    }else if (tokens[0] === "sumPairs"){

        let sum = 0;
        let newArr = [];

        if(numbers.length % 2 === 0){
            

            for(let i = 0; i<numbers.length; i+=2){
                let temp = numbers[i];
                let temp2 = numbers[i+1];
                sum = temp + temp2;

                newArr.push(sum)

            }

            numbers = newArr



        }else {
            let spliced = numbers.splice(numbers.length-1, 1);

            for(let i = 0; i<numbers.length; i+=2){
                let temp = numbers[i];
                let temp2 = numbers[i+1];
                sum = temp + temp2;

                newArr.push(sum);

            }

            numbers = newArr;

            numbers.push(spliced);

        }
        
    }else if (tokens[0] === "print"){

        console.log(`[ ${numbers.join(", ")} ]`);
        break;
        
    }
}



}

arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
    
)
