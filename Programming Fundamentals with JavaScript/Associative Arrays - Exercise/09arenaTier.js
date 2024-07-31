function arenaTier(input){

let gladiatorPool = new Map();

let index = 0;
let command = input[index];

index++;

while( command === "Ave Cesar"){

    let action = command.split(" -> ");

    if(action.length === 3){
        let [name, technique, skill] = action;

        if(!gladiatorPool.has(name)){
            gladiatorPool.get(name, new Map())
        }

        if(!gladiatorPool.get(name).has(technique) || 
            gladiatorPool.get(name).has(technique) && 
            gladiatorPool.get(name).get(technique)){
            gladiatorPool.get(name).set(technique, Number(skill))
            }          
        
     

    } else {
        action = command.split(" vs ");       
    }

}

      let gladiatorsPoints = new Map();

      for(let [name, technique] of Array(gladiatorPool)){

        let sum = 0; 

        for(let [tech, skill] of technique){
            sum += skill
        }

        gladiatorPool.set(name, skill)

      }
}

arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
    ])
