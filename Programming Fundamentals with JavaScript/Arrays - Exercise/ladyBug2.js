function ladybugs(input){

    
let field = [];
let size = Number(input[0]);
for(let f = 0; f<size; f++){
    field[f]=0;
}

let bugs = input[1].split(" ");
for(let b = 0; b < bugs.length; b++){
    let bugsIndex = Number(bugs[b])
    if(field[bugsIndex] !== undefined){
        field[bugsIndex] = 1;
    }
}

for(let i = 2; i < input.length; i++){
    let commands = input[i].split(" ");
    let start = Number(commands[0]);
    let direction = commands[1];
    let end = Number(commands[2]);

    if(start >= field.legth || start < 0 || field[start] == 0){
        continue;
    }


    if(direction === "right"){
        if(field[start] == 1){
            field[start] = 0;
            start += end;
            

            while(field[start] > 0){
                start+=end;
            }

            if(start<field.length){
            field[start] = 1;
            }
            
        }else if(field[start] == 0){
            let move = start + end;
            field[move] = 1;
        }else{
            continue;
        }
    }else if(direction === "left"){
        if(field[start] == 1){
            field[start] = 0;
            start -= end;
            
            while(field[start] > 0){
                start -= end;
            }

            if(start < field.length && start >= 0){
                field[start] = 1;
            }
        } else if(field[start] == 0){
            let move = start - end;
            field[move] = 1;
        }
    }else {
        continue;
    }
}
    console.log(field.join(" "))
    
        }
