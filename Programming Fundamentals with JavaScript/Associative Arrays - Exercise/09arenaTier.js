function arenaTier(input){

    let  gladiatorsPool = {};

    for(let line of input){

        if(line === "Ave Cesar"){
            break;
        }

        let temp = line.split(" ");

        console.log(temp)


        if(line.split(" -> ")){

            let name = line[0];

            let skill = line[1];

            let num = Number(line[2]);

            console.log = name;

        }           
             
               
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
