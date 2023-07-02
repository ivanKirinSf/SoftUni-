function arrayManipulator(numbers, commands){

    for(let command of commands) {
        let tokens = command.split(' ');

        if(tokens[0] === 'add') {
            let index = Number(tokens[1]);
            let element = Number(tokens[2]);
            numbers.splice(index, 0, element);
            
        } else if(tokens[0] === 'addMany'){
            let index = Number(tokens[1]);
            tokens.splice(0,2);
            let numToAdd = tokens.map(Number);
            numbers.splice(index, 0, ...numToAdd);
                
        } else if(tokens[0] === 'contains'){
            let result = numbers.indexOf(Number(tokens[1]));
            console.log(result);
        } else if(tokens[0] === 'remove'){
            let index = Number(tokens[1]);
            numbers.splice(index, 1);
        } else if(tokens[0] === 'shift'){
            let positions = tokens[1];
            for(let i = 0; i<positions; i++){
                let firstNum = numbers.shift();
                numbers.push(firstNum);               

            }
            console.log(numbers)
        } else if(tokens[0] === 'sumPairs'){

            let res = [];
            if(numbers.length % 2 !== 0){
                numbers.push(0);
            }

            for(let i = 0; i < numbers.length-1 ; i+= 2){
                let sum = numbers[i] + numbers[i+1]; 
                res.push(sum);
            }
            numbers = res;
            

        } else if(tokens[0] === 'print'){
            console.log(`[ ${numbers.join(", ")} ]`);
            return;
        }

    }



}

arrayManipulator([1, 2, 4, 5, 6, 7, 8],
    ['sumPairs',
     'print',
     //'contains 1',
     //'contains 3',
     //'print'
    ]
    )
