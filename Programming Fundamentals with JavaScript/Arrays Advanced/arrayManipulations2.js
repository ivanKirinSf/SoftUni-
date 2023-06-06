function arrayManipulations(commands){

    let com = solve(commands);

    return console.log(com)
    
   

    function solve(input){
        let arr = input
        .shift()
        .split(' ')        
        .map(Number);

        

        

        for(let i = 0; i < input.length; i++){
            let temp = input[i];
            let elements = temp.split(' ');

            
            


            let commandsWord = elements[0];
            let firstNum = Number(elements[1]);
            let secondNum = Number(elements[2]);

            switch(commandsWord){
                case "Add": arr.push(firstNum);
                break;
                case "Remove": arr = arr.filter(el => el !== firstNum);    
                break;
                case "RemoveAt": arr.splice( firstNum, 1);
                break;
                case "Insert": arr.splice( secondNum, 0, firstNum );
                break;

            }

            


            }

            return arr.join(" ")

            

            //console.log(temp)
        }
    }

    

arrayManipulations(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2'])
