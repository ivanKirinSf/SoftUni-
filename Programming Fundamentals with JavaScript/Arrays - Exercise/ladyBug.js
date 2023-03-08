function ladybugs(input){

  

    let field = [];
    let size =  Number(input[0]);
    for(let f = 0; f< size; f++){
        field[f] = 0;
    }
    
        
    
    

    let bugs = input[1].split(" ");
      
    for(let b = 0; b < bugs.length; b++){
        let bugsIndex = Number(bugs[b]);
       
        if(field[bugsIndex] == 0){
            field[bugsIndex] = 1;
        }

}

for(let i = 2; i<input.length; i++ ){
    let commands = input[i].split(" ");
    start = Number(commands[0]);
    direction = commands[1];
    end = Number(commands[2]);

    if(direction === "right"){
        if(field[start] == 0 ){
            let move = start + end;
            if(move+1 < size){
            field[move] = 1;
            }
            
        }else if(field[start] == 1){
            start += end;
            
        } else {
            continue;
        }
    }
}






    }
    










ladybugs([ 3, '0 1',
'0 right 1',
'2 right 1' ])
