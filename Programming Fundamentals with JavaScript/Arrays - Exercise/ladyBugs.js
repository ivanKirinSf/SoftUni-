function ladyBugs(input){


    let fieldSize = input[0];
    let indexes = input[1];
    let arrIndex = indexes.split(" ");
    let newIndex = [];
    let position = 0;
    let tempPosition = 0;

    
    for(let i = 2; i<input.length; i++){
        let temp = input[i];
        let commands = temp.split(" ")
        let startCommand = Number(commands[0]);
        let command = commands[1];
        let endCommand = Number(commands[2]);

        let indexes = input[1];
        let arrIndex = indexes.split(" ");

        for(let k = 0; k<fieldSize-1; k++){
            let index = k;

            let j =0;
            while(j<=arrIndex.length){
                let jIndex = arrIndex[j];

            if(jIndex == index && startCommand == jIndex){
                position = 0;
                if(command == "right"){
                    position += jIndex + endCommand;

                } else if(command == "left"){
                    position += jIndex - endCommand;
                }
            }

            if(startCommand == position){
                position = 0;
                if(command == "right"){
                    position += startCommand + endCommand;
                }else if(command == "left"){
                    position += startCommand - endCommand;
                }

            }

            

            
            j++;
        }
       if(position == 0){
        newIndex.push(0);
       } else if(position > 0){
        newIndex.push(position)
        position = 0;
       }
        }

        newIndex.push(position)

        }

        console.log(newIndex)

        

        
            
           
            
        }

        

        ladyBugs([ 5, '3',
        '3 left 2',
        '1 left -2'])
