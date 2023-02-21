function ladyBugs(input){


    let fieldSize = input[0];
    let indexes = input[1];
    let arrIndex = indexes.split(" ");
    let newIndex = [];
    let position = 0;

    //console.log(arrIndex);
    //let arrIndexes = indexes.split(" ");
    //let commands = input[2];
    //let arrCommands = commands.split(" ");
    //let startCommand = arrCommands[0];
    //let comand = arrCommands[1];
    //let endComand = arrCommands[2];


    for(let i = 2; i<input.length; i++){
        let temp = input[i];
        let commands = temp.split(" ")
        let startCommand = Number(commands[0]);
        let command = commands[1];
        let endCommand = Number(commands[2]);

        let indexes = input[1];
        let arrIndex = indexes.split(" ");

        position = startCommand + endCommand;

        for(let k = 0; k<arrIndex.length; k++){
            let index = Number(arrIndex[k]);

            

            if(startCommand == index && position < fieldSize ){

                position = index + endCommand;

                
                //if(position != index && position < fieldSize ){
                    //position = position;
                //} else if(position == index && position < fieldSize ){
                   // position = index + endCommand;
                //} else{
                    //position = 0;
                   //}

            } else {
                position = position
                break;
                
            }

            if(position == index){
                position = index + endCommand;
            } else {
                break;
            }

            //if(position == index && position < fieldSize ){
                //position = index + endCommand;
            //} else if (position != index && position < fieldSize ){
                //position = position
            //} else if (position > fieldSize){
                //break;
           // }

            

            
        }

        newIndex.push(position)

        

        
        
    }

    
console.log(newIndex)
    //let text = input.split(" ")

    

}

ladyBugs([ 3, '0 1 2',
'0 right 1',
'1 right 1',
'2 right 1'])
