function arenaTier(input){

let gladiatorsPool = new Map();

let index = 0;
let command = input[index];
index ++; 

while(command !== "Ave Cesar"){
    let action = command.split(" -> ");

    if(action.length === 3){

        let [name, technique, skill] = action;

        if(!gladiatorsPool.has(name)){
            gladiatorsPool.set(name, new Map)
        }else if(gladiatorsPool.has(name).gladiatorsPool.get(technique)){
          

        }

    }else {
        action = command.split(" vs ")
    }
}

}
