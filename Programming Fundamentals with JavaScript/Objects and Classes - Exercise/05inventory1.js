function inventory(input){

    let hero = {};
    let arr = [];
    let minLevel = Number.MAX_SAFE_INTEGER

    for(let i = 0; i<input.length; i++){
        let temp = input[i].split(" / ");
        let heroName = temp.shift();
        let heroLevel = Number(temp.shift());        
        let heroItems = temp.shift().split(" , ")
        //console.log(heroItems)

        hero.Hero = heroName;
        hero.level = heroLevel;
        hero.items = heroItems;

        if(heroLevel < minLevel){
            minLevel = heroLevel;
            arr.unshift(hero);
            hero = {};
        }else{
            arr.push(hero);
            hero = {};
        }       
        
    }

    for(let k = 0; k<arr.length; k++){
        let temp = arr[k];
         for(let key of Object.keys(temp)){
        if(key === 'Hero'){
            console.log(`${key}: ${temp[key]}`)
        }else if(key === 'level'){
            console.log(`${key} => ${temp[key]}`)            
        }else{
            console.log(`${key} => ${temp[key]}`)
        }
    }

        
    }  

}

inventory([
    'Batman / 18 / Banana, Gun',
    'Superman / 0 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]    
    )
